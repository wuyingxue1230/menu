import React, { useState } from 'react';
import { Input, Tag, Button, Card, List, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { ingredients, recipes } from '../data/mockData';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 20px;
`;

const TagContainer = styled.div`
  margin-bottom: 20px;
`;

const Home = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [generatedRecipes, setGeneratedRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleIngredientSelect = (value) => {
    if (!selectedIngredients.includes(value)) {
      setSelectedIngredients([...selectedIngredients, value]);
    }
    setSearchText('');
  };

  const handleIngredientRemove = (ingredient) => {
    setSelectedIngredients(selectedIngredients.filter(i => i !== ingredient));
  };

  const generateRecipes = () => {
    const filtered = recipes.filter(recipe => 
      selectedIngredients.some(ingredient => 
        recipe.ingredients.includes(ingredient)
      )
    );
    setGeneratedRecipes(filtered);
  };

  const showRecipeDetail = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const filteredIngredients = ingredients
    .filter(i => i.name.includes(searchText))
    .map(i => i.name);

  return (
    <Container>
      <StyledInput
        placeholder="输入食材"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        suffix={
          searchText && (
            <Button type="link" onClick={() => handleIngredientSelect(searchText)}>
              <PlusOutlined />
            </Button>
          )
        }
      />

      <TagContainer>
        {selectedIngredients.map(ingredient => (
          <Tag
            key={ingredient}
            closable
            onClose={() => handleIngredientRemove(ingredient)}
            style={{ marginBottom: 8 }}
          >
            {ingredient}
          </Tag>
        ))}
      </TagContainer>

      <Button 
        type="primary" 
        onClick={generateRecipes}
        disabled={selectedIngredients.length === 0}
        style={{ marginBottom: 20 }}
      >
        生成菜谱
      </Button>

      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={generatedRecipes}
        renderItem={recipe => (
          <List.Item>
            <Card
              title={recipe.name}
              hoverable
              onClick={() => showRecipeDetail(recipe)}
            >
              <p>难度：{recipe.difficulty}</p>
              <p>烹饪时间：{recipe.cookingTime}</p>
            </Card>
          </List.Item>
        )}
      />

      <Modal
        title={selectedRecipe?.name}
        open={!!selectedRecipe}
        onCancel={() => setSelectedRecipe(null)}
        footer={null}
        width={800}
      >
        {selectedRecipe && (
          <>
            <h3>所需食材</h3>
            <p>{selectedRecipe.ingredients.join('、')}</p>
            
            <h3>烹饪步骤</h3>
            {selectedRecipe.steps.map((step, index) => (
              <p key={index}>{step}</p>
            ))}
            
            <h3>营养信息</h3>
            <p>热量：{selectedRecipe.nutrition.calories}卡路里</p>
            <p>蛋白质：{selectedRecipe.nutrition.protein}</p>
            <p>碳水化合物：{selectedRecipe.nutrition.carbs}</p>
            <p>脂肪：{selectedRecipe.nutrition.fat}</p>
            
            <h3>烹饪技巧</h3>
            <p>{selectedRecipe.tips}</p>
            
            <h3>替代食材建议</h3>
            {Object.entries(selectedRecipe.alternatives).map(([ingredient, alternatives]) => (
              <p key={ingredient}>
                {ingredient}可替换为：{alternatives.join('、')}
              </p>
            ))}
          </>
        )}
      </Modal>
    </Container>
  );
};

export default Home;