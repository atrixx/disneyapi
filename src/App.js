import './App.css';
import { CharactersView } from './features/characters/CharactersView';
import { ChartView } from './features/chart/ChartView';
import { ModalView } from './features/modal/ModalView';
import ModalBox from './components/Modal';

function App() {
  return (
    <><div className='chart'>
        <ChartView />
      </div>
      <div className="App">
        <CharactersView />
        <ModalView />
        {/* <ModalBox /> */}
      </div>    
    </>
  );
}

export default App;
