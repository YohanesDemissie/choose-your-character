import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions'

class CharacterList extends Component {
  render() {
    console.log(this.props, 'HE;OOOOO')
    return(
      <div>
        <h4>Heros</h4>
        <ul>
          {
            this.props.characters.map(character => {
              return (
                <li key={character.id}>
                  <div>{character.name}</div>
                  <div
                    onClick={() => this.props.addCharacterById(character.id)}> + </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    characters: state.characters
  };
}

function mapDispatchToProps(dispatch) { // look up mapStateToprops
  return bindActionCreators({ addCharacterById }, dispatch) // look up mapdispatch on redux
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);