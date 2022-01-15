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
    default:
      return state;
  }
};

export default orders;
