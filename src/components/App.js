import React, { Component} from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import '../styles/index.css';

// import { render } from '@testing-library/react';

//Stateless Component
// function App() {
//   return (
//     <div className="App">
//       Hello
//     </div>
//   );
// }

//For state manipulation
class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Choose Your Character</h2>
        <div className="col-md-6">
          <CharacterList />
        </div>
        <div className="col-md-6">
          <HeroList />
        </div>
      </div>
    )
  }
}

export default App;
