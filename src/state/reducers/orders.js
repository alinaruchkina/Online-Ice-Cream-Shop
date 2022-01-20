const initialState = {
  orders: [
    {
      image: '',
      name: 'Vanilla Prague',
      type: 'Ice Cream',
      taste: ['chocolate', 'lemon', 'vanilla', 'banana'],
      description: 'Creamy Vanilla Ice Cream with Chocolate Syrup',
      price: 28,
      amount: 1,
      id: 1,
    },
  ],
};

const orders = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_ALL_CARD':
      return {
        ...state,
        orders: [],
      };
    case 'ADD_CARD_TO_ORDER':
      let currentCard = {
        ...action.payload.card,
        taste: action.payload.card.taste[action.payload.taste],
        amount: action.payload.amount,
      };
      console.log(currentCard);
      return {
        ...state,
        orders: [...state.orders, { ...currentCard }],
      };
    default:
      return state;
  }
};

export default orders;
