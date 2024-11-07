import characters_json from '../data/characters.json';

export function createCharacter(id) {
  let character = characters_json.find(c => c.id === id);
  return character;
}

//cannot export default or app crashes
//maybe because it only needs to be shared with one other file and not in the index file for entire application