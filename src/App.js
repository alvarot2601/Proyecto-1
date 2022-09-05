import './App.css';
import Topbar from './components/pure/topbar';
import Converter from './components/pure/converter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Topbar />
        <Converter />
      </header>
    </div>
  );
}

export default App;
