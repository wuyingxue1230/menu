export const ingredients = [
  { id: 1, name: '土豆', category: '蔬菜' },
  { id: 2, name: '胡萝卜', category: '蔬菜' },
  { id: 3, name: '猪肉', category: '肉类' },
  { id: 4, name: '鸡蛋', category: '其他' },
  { id: 5, name: '西红柿', category: '蔬菜' },
  { id: 6, name: '青椒', category: '蔬菜' },
  { id: 7, name: '牛肉', category: '肉类' },
  { id: 8, name: '大葱', category: '蔬菜' },
  { id: 9, name: '姜', category: '调味料' },
  { id: 10, name: '蒜', category: '调味料' },
];

export const recipes = [
  {
    id: 1,
    name: '土豆炖牛肉',
    ingredients: ['土豆', '牛肉', '胡萝卜', '大葱', '姜', '蒜'],
    difficulty: '中等',
    cookingTime: '60分钟',
    steps: [
      '1. 牛肉切块，土豆和胡萝卜切大块',
      '2. 锅中放油，爆香姜蒜',
      '3. 加入牛肉翻炒至变色',
      '4. 加入适量清水，大火烧开后转小火炖40分钟',
      '5. 加入土豆和胡萝卜继续炖15分钟',
      '6. 加入调味料，即可出锅'
    ],
    nutrition: {
      calories: 320,
      protein: '22g',
      carbs: '30g',
      fat: '15g'
    },
    tips: '牛肉最好选择带筋的部位，炖煮时间要足够长，这样肉质会更嫩',
    alternatives: {
      '牛肉': ['羊肉'],
      '土豆': ['山药', '芋头']
    }
  },
  {
    id: 2,
    name: '西红柿炒鸡蛋',
    ingredients: ['西红柿', '鸡蛋', '葱花'],
    difficulty: '简单',
    cookingTime: '15分钟',
    steps: [
      '1. 西红柿切块，打散鸡蛋',
      '2. 锅中放油，炒散鸡蛋至七分熟',
      '3. 加入西红柿翻炒',
      '4. 加入适量盐和鸡精',
      '5. 撒上葱花即可'
    ],
    nutrition: {
      calories: 180,
      protein: '12g',
      carbs: '8g',
      fat: '12g'
    },
    tips: '西红柿最好选择新鲜多汁的，这样炒出来的味道会更好',
    alternatives: {
      '西红柿': ['番茄'],
      '鸡蛋': ['鸭蛋']
    }
  }
];