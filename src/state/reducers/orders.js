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
    case 'DELETE_ONE_CARD':
      let newOrder = state.orders.map((elem, index) => {
        if (action.payload.id === elem.id && action.payload.taste === elem.taste) {
          return [];
        } else {
          return { ...state.orders[index] };
        }
      });
      return {
        ...state,
        orders: [...newOrder.flat()],
        totalPrice:
          newOrder.flat().length !== 0
            ? newOrder
                .flat()
                .map((element) => {
                  return element.amount * element.price;
                })
                .reduce((sum, current) => {
                  return sum + current;
                })
            : 0,
      };
    case 'ADD_CARD_TO_ORDER':
      let newCard = false;
      let currentCard;
      let newOrders;
      newOrders = state.orders.map((item) => {
        if (
          item.taste === action.payload.card.taste[action.payload.taste] &&
          item.id === action.payload.card.id
        ) {
          newCard = true;
          return { ...item, amount: item.amount + action.payload.amount };
        } else {
          return item;
        }
      });
      if (!newCard) {
        currentCard = {
          ...action.payload.card,
          taste: action.payload.card.taste[action.payload.taste],
          amount: action.payload.amount,
        };
        newOrders = [...state.orders, { ...currentCard }];
      }
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
          if (action.payload.id === elem.id && action.payload.taste === elem.taste) {
            if (action.payload.action) {
              return { ...elem, amount: elem.amount + 1 };
            } else {
              return { ...elem, amount: elem.amount - 1 };
            }
          } else {
            return elem;
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
