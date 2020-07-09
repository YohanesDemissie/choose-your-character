import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions'

class CharacterList extends Component {
  render() {
    console.log(this.props, 'HE;OOOOO')
    console.log(this.state, 'STATEEEEEE')
    return(
      <div>
        <h4>Heros</h4>
        <ul className="list-group">
          {
            this.props.characters.map(character => {
              return (
                <li key={character.id} className="list-group-item">
                  <div className="list-item">{character.name}</div>
                  <div
                    className="list-item right-button"
                    onClick={() => this.props.addCharacterById(character.id)} > + </div>
                    <div>
                    </div>
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
  console.log('state', state.heroes);
  return {
    characters: state.characters,
  };
}

// function mapDispatchToProps(dispatch) { // look up mapStateToprops
//   return bindActionCreators({ addCharacterById }, dispatch) // look up mapdispatch on redux
// }

export default connect(mapStateToProps, {addCharacterById})(CharacterList);