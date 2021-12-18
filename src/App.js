import './App.css';
import { Counter } from './features/counter/Counter';
import { AddFormPerson } from './features/counter/AddFormPerson';
import { PeopleList } from './features/counter/PeopleList';

function App() {
  return (
    <div className="App">
      <div>React-Redux</div>
      <Counter/>
      <AddFormPerson/>
      <PeopleList/>
    </div>
  );
}

export default App;
