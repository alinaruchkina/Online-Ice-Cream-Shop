const initialState = {
  card: [
    {
      image: '',
      name: 'test',
      taste: ['chocolate', 'lemon', 'vanilla'],
      description: 'test test test',
      price: 28,
      amount: 1,
      id: 1,
    },
    {
      image: '',
      name: 'test',
      taste: ['chocolate', 'lemon', 'vanilla'],
      description: 'test test test',
      price: 48,
      amount: 3,
      id: 2,
    },
  ],
  currentCard: {
    image: '',
    name: 'Vanilla Prague',
    type: 'Ice Cream',
    taste: ['chocolate', 'lemon', 'vanilla', 'banana'],
    description: 'Creamy Vanilla Ice Cream with Chocolate Syrup',
    price: 28,
    amount: 1,
    id: 1,
  },
};

const Card = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARD_TO_ORDER':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default Card;
