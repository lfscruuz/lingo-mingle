import { useEffect, useState } from 'react';
import PhaseOne from './components/PhaseOne';
import './styles/App.scss'
import PhaseTwo from './components/PhaseTwo';

function App() {

  const [phaseOne, setPhaseOne] = useState(false);
  const [phaseOneDone, setPhaseOneDone] = useState(false);
  const [phaseTwo, setPhaseTwo] = useState(false);

  useEffect(() => {
    phaseOne ? setPhaseOneDone(true) : setPhaseOneDone(false);
  }, [phaseOne])

  return (
    <div className='App'>
      {phaseOneDone === false ? 
        <PhaseOne setPhaseOne={setPhaseOne}/>
        :
        <PhaseTwo/>
      }
    </div>
  )
}

export default App
