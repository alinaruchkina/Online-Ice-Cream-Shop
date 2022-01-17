const initialState = {
  card: [
    {
      image: '',
      name: 'test',
      teste: ['chocolate', 'lemon', 'vanilla'],
      description: 'test test test',
      price: 28,
      amount: 1,
      id: 1,
    },
  ],
  currentCard: {
    image: '',
    name: 'test',
    teste: ['chocolate', 'lemon', 'vanilla'],
    description: 'test test test',
    price: 28,
    amount: 1,
    id: 1,
  },
};

const Card = (state = initialState, action) => {
  switch (action.type) {
    case '':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default Card;
