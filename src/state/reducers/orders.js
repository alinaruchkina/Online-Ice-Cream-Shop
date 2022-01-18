const initialState = {
  orders: [],
};

const orders = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_ALL_CARD':
      return {
        ...state,
        orders: [],
      };
    case 'ADDED_NEW_CARD':
      console.log('orders:', action.payload);
      return {
        ...state,
        orders: [...state.orders, { ...action.payload }],
      };
    default:
      return state;
  }
};

export default orders;
