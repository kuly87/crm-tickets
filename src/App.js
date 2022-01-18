import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
import { Entry } from './page/entry/Entry';

function App() {
  return (
    <div className="App">
     Hello<Button>Button</Button>
     <Entry/>
    </div>
  );
}

export default App;
