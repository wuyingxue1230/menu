import React, { useState } from 'react';
import { Tabs, Form, Input, Button, List, Card, Switch } from 'antd';
import styled from 'styled-components';

const { TabPane } = Tabs;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const StyledForm = styled(Form)`
  max-width: 400px;
  margin: 0 auto;
`;

const UserCenter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [history, setHistory] = useState([]);

  const handleLogin = (values) => {
    // 模拟登录
    setIsLoggedIn(true);
    // 模拟获取收藏和历史记录
    setFavorites([
      { id: 1, name: '土豆炖牛肉', date: '2024-03-21' },
      { id: 2, name: '西红柿炒鸡蛋', date: '2024-03-20' },
    ]);
    setHistory([
      { id: 1, name: '土豆炖牛肉', date: '2024-03-21' },
      { id: 2, name: '西红柿炒鸡蛋', date: '2024-03-20' },
    ]);
  };

  const PreferenceForm = () => (
    <StyledForm layout="vertical">
      <Form.Item label="不吃辣">
        <Switch />
      </Form.Item>
      <Form.Item label="素食主义">
        <Switch />
      </Form.Item>
      <Form.Item label="低脂饮食">
        <Switch />
      </Form.Item>
      <Form.Item label="过敏食材">
        <Input.TextArea placeholder="请输入过敏食材，用逗号分隔" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">保存设置</Button>
      </Form.Item>
    </StyledForm>
  );

  const LoginForm = () => (
    <StyledForm onFinish={handleLogin}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input placeholder="用户名" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password placeholder="密码" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          登录
        </Button>
      </Form.Item>
      <Form.Item>
        <Button block>注册</Button>
      </Form.Item>
    </StyledForm>
  );

  if (!isLoggedIn) {
    return (
      <Container>
        <LoginForm />
      </Container>
    );
  }

  return (
    <Container>
      <Tabs defaultActiveKey="1">
        <TabPane tab="收藏菜谱" key="1">
          <List
            grid={{ gutter: 16, column: 3 }}
            dataSource={favorites}
            renderItem={item => (
              <List.Item>
                <Card title={item.name}>
                  <p>收藏日期：{item.date}</p>
                </Card>
              </List.Item>
            )}
          />
        </TabPane>
        <TabPane tab="浏览历史" key="2">
          <List
            grid={{ gutter: 16, column: 3 }}
            dataSource={history}
            renderItem={item => (
              <List.Item>
                <Card title={item.name}>
                  <p>浏览日期：{item.date}</p>
                </Card>
              </List.Item>
            )}
          />
        </TabPane>
        <TabPane tab="个人偏好" key="3">
          <PreferenceForm />
        </TabPane>
      </Tabs>
    </Container>
  );
};

export default UserCenter;