import React, { Component } from 'react';
import { connect } from 'react-redux';

class Hero extends Component {
  render() {
    return(
      <div>
        <h4>Your Hero Squad</h4>
        <ul className="list-group">
          {
            this.props.heroes.map(hero => {
              return (
                <li key={hero.id} className="list-group-item">
                  <div className="list-item">{hero.name}</div>
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
    heroes: state.heroes
  };
}

// function mapDispatchToProps(dispatch) { // look up mapStateToprops
//   return bindActionCreators({ addCharacterById }, dispatch) // look up mapdispatch on redux
// }

export default connect(mapStateToProps, null)(Hero);