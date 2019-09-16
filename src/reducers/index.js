import { combineReducers } from 'redux';
import home from './home';
import questions from './questions';
import answers from './answers';
import results from './results';

export default combineReducers({
  home,
  questions,
  answers,
  results
})
