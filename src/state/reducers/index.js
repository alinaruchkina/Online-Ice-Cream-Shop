import { combineReducers } from 'redux';
import slider from './slider';
import cake_carousel from './cake_carousel';
import orders from './orders';

const rootReducer = combineReducers({
  slider,
  cake_carousel,
  orders,
});

export default rootReducer;
