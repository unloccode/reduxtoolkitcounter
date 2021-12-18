import './App.css';
import { Counter } from './features/counter/Counter';
import { AddFormPerson } from './features/counter/AddFormPerson';

function App() {
  return (
    <div className="App">
      <div>React-Redux</div>
      <Counter/>
      <AddFormPerson/>
    </div>
  );
}

export default App;
