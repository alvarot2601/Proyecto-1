import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*los comentarios se ponen asi*/}
        {/*<Greeting name="jose" />*/}
        <GreetingF name="jose" />
      </header>
    </div>
  );
}

export default App;
