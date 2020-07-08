import React, { Component} from 'react';
import CharacterList from './CharacterList';

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
      <div>
        <h1>Choose Your Character</h1>
        <CharacterList />
      </div>
    )
  }
}

export default App;
