import './App.css';
import ModalBox from './components/Modal';

import { CharactersView } from './features/characters/CharactersView';
import { ChartView } from './features/chart/ChartView';
import { ModalView } from './features/modal/ModalView';

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
