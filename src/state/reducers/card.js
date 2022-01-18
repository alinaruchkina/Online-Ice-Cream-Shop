import { useDispatch } from 'react-redux';
import { addedNewCard } from '../actions/orders';
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
    {
      image: '',
      name: 'test',
      teste: ['chocolate', 'lemon', 'vanilla'],
      description: 'test test test',
      price: 48,
      amount: 3,
      id: 2,
    },
  ],
  currentCard: {
    image: '',
    name: 'test',
    taste: ['chocolate', 'lemon', 'vanilla', 'banana'],
    description: 'test test test',
    price: 28,
    amount: 1,
    id: 1,
  },
};

const Card = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARD_TO_ORDER':
      let currentCard = {
        ...state.currentCard,
        taste: state.currentCard.taste[action.payload.taste],
        amount: action.payload.amount,
      };
      // useDispatch(addedNewCard(currentCard));
      // console.log('card:', currentCard);
      return {
        ...state,
        addNewCardToOrder: currentCard,
      };
    default:
      return state;
  }
};

export default Card;
