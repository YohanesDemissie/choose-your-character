import characters_json from '../data/characters.json';
import { ADD_CHARACTER } from '../actions/index.js';

function characters(state = characters_json, action) {
  switch (action.type) { //specifies action type. Not necessary at this point but good common practice for larger projects
    case ADD_CHARACTER:
      //below will create a new array based on characters that arent selected
      let characters = state.filter(item => item.id !== action.id);
      return characters;
    default:
      return state;
  }
}

export default characters;