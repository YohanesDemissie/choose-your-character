import { combineReducers } from 'redux';
import createCharacter from './characters-reducers.js'
import characters from './characters-reducers';
import heroes from './heroes-reducers';

const rootReducer = combineReducers({
  characters,
  createCharacter,
  heroes
})

export default rootReducer;