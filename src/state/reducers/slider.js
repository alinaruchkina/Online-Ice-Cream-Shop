import image1 from '../../utils/images/content_background_girl.jpg';
import image2 from '../../utils/images/second_slide.jpg';
import image3 from '../../utils/images/third_slide.jpg';
const initialState = {
  currentSlide: {
    title_small: 'BEST CHOICE',
    title_big: 'YUMMY',
    image: image1,
  },
};

let sliderArray = [
  {
    title_small: 'BEST CHOICE',
    title_big: 'YUMMY',
    image: image1,
  },
  {
    title_small: 'SWEETEST TASTE',
    title_big: 'YUMMY',
    image: image2,
  },
  {
    title_small: 'NATURAL INGREDIENTS',
    title_big: 'YUMMY',
    image: image3,
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
          curSlide = { ...sliderArray[index] };
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
          curSlide = { ...sliderArray[index] };
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
