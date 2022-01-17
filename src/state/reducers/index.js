import { combineReducers } from 'redux';
import slider from './slider';
import cake_carousel from './cake_carousel';
import orders from './orders';
import card from './card';

const rootReducer = combineReducers({
  slider,
  cake_carousel,
  orders,
  card,
});

export default rootReducer;
