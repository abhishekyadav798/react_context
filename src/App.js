import './App.css';
// import {createContext} from 'react';
import Child1 from './Child1';
import Component_2_weather from './Component_2_weather';
import OnClick from './OnClick';

function App() {
  return (
    <div className="App">
      <Child1/>
      <OnClick/>
      <Component_2_weather/>
    </div>
  );
}

export default App;
