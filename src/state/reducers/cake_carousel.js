import ice_cake from '../../utils/images/Choco_Cherry.jpg';
const initialState = {
  cake_carousel: [
    {
      image: ice_cake,
      name: 'Choco Cherry',
      price: 37,
    },
    {
      image: ice_cake,
      name: 'Choco Cherry',
      price: 37,
    },
  ],
};

const slider = (state = initialState, action) => {
  let curSlide;
  switch (action.type) {
    case 'NEXT_SLIDE':
      return {
        ...state,
      };
    case 'PREV_SLIDE':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default slider;
