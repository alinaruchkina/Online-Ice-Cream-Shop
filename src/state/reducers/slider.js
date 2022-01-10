const initialState = {
  title_small: 'BEST CHOICE',
  title_big: 'YUMMY',
};

const slider = (state = initialState, action) => {
  switch (action.type) {
    case 'BEST CHOICE':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default slider;
