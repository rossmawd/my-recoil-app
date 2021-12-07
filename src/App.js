import './App.css';
import {RecoilRoot} from 'recoil'
import CharacterCounter from './Components/CharacterCounter';

function App() {
  return (
    <RecoilRoot>
    <div className="App">
      Here we'll have the character counter component
      <CharacterCounter></CharacterCounter>
    </div>
    </RecoilRoot>
  );
}

export default App;
