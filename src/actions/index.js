//Actions are objects that manipulate state with a "type" variable, using action.types as a string reference that we identify in this file

export const ADD_CHARACTER = 'ADD_CHARACTER'; //DECLARING ACTION TYPE

//Below is an action creator setting the default array of objects. action.id will reference each character in the initial array
export function addCharacterById(id) {
  const action = {
    type: ADD_CHARACTER,
    id
  }
  return action;
}

