import { changeImage } from '../../utils/helpers/image_carousel';
const initialState = {
  currentSlide: {
    title_small: 'BEST CHOICE',
    title_big: 'YUMMY',
    image: changeImage(),
  },
};

let sliderArray = [
  {
    title_small: 'BEST CHOICE',
    title_big: 'YUMMY',
  },
  {
    title_small: 'SWEETEST TASTE',
    title_big: 'YUMMY',
  },
  {
    title_small: 'NATURAL INGREDIENTS',
    title_big: 'YUMMY',
  },
];

const slider = (state = initialState, action) => {
  let curSlide;
  switch (action.type) {
    case 'NEXT_SLIDE':
      sliderArray.map((item, index) => {
        if (item.title_small === state.currentSlide.title_small) {
          index = index + 1;
          if (index > sliderArray.length - 1) {
            index = 0;
          }
          let currentImage = changeImage(sliderArray[index].title_small);
          curSlide = { ...sliderArray[index], image: currentImage };
        }
      });
      return {
        ...state,
        currentSlide: curSlide,
      };
    case 'PREV_SLIDE':
      sliderArray.map((item, index) => {
        if (item.title_small === state.currentSlide.title_small) {
          index = index - 1;
          if (index < 0) {
            index = sliderArray.length - 1;
          }
          let currentImage = changeImage(sliderArray[index].title_small);
          curSlide = { ...sliderArray[index], image: currentImage };
        }
      });
      return {
        ...state,
        currentSlide: curSlide,
      };
    default:
      return state;
  }
};

export default slider;
