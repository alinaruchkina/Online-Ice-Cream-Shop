import maple_walnut from '../../utils/images/maple_walnut.png';
import strawberry from '../../utils/images/strawberry.png';
import vanilla_dream from '../../utils/images/vanilla_dream.png';
import pistachio from '../../utils/images/pistachio.png';
import chocolate_and_coconut from '../../utils/images/coconut_chocolate.png';
import tiramisu from '../../utils/images/tiramisu.png';
import creme_brulee from '../../utils/images/creme_brulee.png';
import sorbet from '../../utils/images/lemon_and_lime.png';
import double_cream_meringue from '../../utils/images/double_cream_meringue.png';
import banana from '../../utils/images/banana.png';

const initialState = {
  card: [
    {
      image: maple_walnut,
      name: 'MAPLE WALNUT',
      taste: ['caramel', 'vanilla'],
      description: 'Creamy Ice Cream with maple syrup and walnuts',
      price: 55,
      amount: 1,
      id: 1,
    },
    {
      image: strawberry,
      name: 'STRAWBERRY',
      taste: ['strawberry'],
      description: 'Classic Strawberry Ice Cream with slices of freshly picked Strawberries',
      price: 45,
      amount: 1,
      id: 2,
    },
    {
      image: vanilla_dream,
      name: 'VANILLA DREAM',
      taste: ['vanilla'],
      description: 'Creamy Vanilla Ice Cream with Chocolate Syrup',
      price: 28,
      amount: 1,
      id: 3,
    },
    {
      image: pistachio,
      name: 'PISTACHIO',
      taste: ['pistachio'],
      description: 'Classic Pistachio Ice Cream with incredible Taste and delicate Texture.',
      price: 50,
      amount: 1,
      id: 4,
    },
    {
      image: chocolate_and_coconut,
      name: 'CHOCOLATE AND COCONUT',
      taste: ['chocolate'],
      description: 'Refined Aroma of Coconut, Swiss Chocolate of the highest quality',
      price: 67,
      amount: 1,
      id: 5,
    },
    {
      image: tiramisu,
      name: 'TIRAMISU',
      taste: ['chocolate', 'vanilla', 'caramel'],
      description: 'Classic Italian Dessert - airy Mascarpone, Biscuit Pieces and Coffee sauce',
      price: 72,
      amount: 1,
      id: 6,
    },
    {
      image: creme_brulee,
      name: 'CREME BRULEE',
      taste: ['caramel', 'vanilla'],
      description: 'The Perfect balance of caramel topped with Creamy Ice Cream',
      price: 65,
      amount: 1,
      id: 7,
    },
    {
      image: sorbet,
      name: 'SORBET',
      taste: ['mango', 'lemon and lime', 'raspberry and strawberry'],
      description: 'Fruity, Sweet and Velvety Ice Cream.',
      price: 32,
      amount: 1,
      id: 8,
    },
    {
      image: double_cream_meringue,
      name: 'DOUBLE CREAM MERINGUE',
      taste: ['chocolate', 'vanilla', 'caramel'],
      description: 'Vanilla Ice Cream with double cream',
      price: 35,
      amount: 1,
      id: 9,
    },
    {
      image: banana,
      name: 'BANANA',
      taste: ['banana'],
      description:
        'A Mix of ripe and less ripe Bananas, which are hand-selected. Perfect for pairing with Alpine Cream.',
      price: 38,
      amount: 1,
      id: 10,
    },
  ],
  currentCard: {
    image: banana,
    name: 'BANANA',
    taste: ['banana'],
    description:
      'A Mix of ripe and less ripe Bananas, which are hand-selected. Perfect for pairing with Alpine Cream.',
    price: 38,
    amount: 1,
    id: 10,
  },
};

const Card = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CARD':
      return {
        ...state,
        currentCard: state.card.find((i) => {
          if (i.id === action.payload) {
            return i;
          }
        }),
      };
    default:
      return state;
  }
};

export default Card;
