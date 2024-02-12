import Header from '../Header/Header';
import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../RightPanel/RightPanel';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__content">
        <LeftPanel />
        <RightPanel />
      </main>
    </div>
  );
}

export default App;
