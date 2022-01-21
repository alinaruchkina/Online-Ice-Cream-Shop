const initialState = {
  orders: [],
  totalPrice: 0,
};

const orders = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_ALL_CARD':
      return {
        ...state,
        orders: [],
        totalPrice: 0,
      };
    case 'ADD_CARD_TO_ORDER':
      let currentCard = {
        ...action.payload.card,
        taste: action.payload.card.taste[action.payload.taste],
        amount: action.payload.amount,
      };
      let newOrders = [...state.orders, { ...currentCard }];
      return {
        ...state,
        orders: newOrders,
        totalPrice: newOrders
          .map((element) => {
            return element.amount * element.price;
          })
          .reduce((sum, current) => {
            return sum + current;
          }),
      };
    case 'CHANGE_AMOUNT_CARD':
      let newAmountCard = [
        ...state.orders.map((elem) => {
          if (action.payload.id === elem.id) {
            if (action.payload.action) {
              return { ...elem, amount: elem.amount + 1 };
            } else {
              return { ...elem, amount: elem.amount - 1 };
            }
          }
        }),
      ];
      return {
        ...state,
        orders: [...newAmountCard],
        totalPrice: newAmountCard
          .map((element) => {
            return element.amount * element.price;
          })
          .reduce((sum, current) => {
            return sum + current;
          }),
      };
    default:
      return state;
  }
};

export default orders;
