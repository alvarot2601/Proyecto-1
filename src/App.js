import './App.css';
import Topbar from './components/topbar';
import Converter from './components/converter';

function App() {
  return (
    <div className="App">
      <Topbar className="topbar" />
      <Converter className="converter" />
    </div>
  );
}

export default App;
