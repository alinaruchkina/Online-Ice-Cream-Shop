import { combineReducers } from 'redux';
import slider from './slider';
import cake_carousel from './cake_carousel';

const rootReducer = combineReducers({
  slider,
  cake_carousel,
});

export default rootReducer;
