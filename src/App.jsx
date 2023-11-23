import { useState } from 'react';
import './styles/App.scss'
import Header from './components/Header';
import Main from './components/MainPage';
import PhaseOne from './components/PhaseOne';
import PhaseTwo from './components/PhaseTwo';
import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom';
import shuffle from './constants/shuffleFunctions';
import PhaseThree from './components/PhaseThree';

function App() {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [popup, setPopup] = useState(false);
  const [turns, setTurns] = useState(0);
  

  function resetTurn() {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  }

  function shuffleCardsFunctionOne() {
    const shuffledCards = shuffle.phaseOne;
    setCards(shuffledCards);
    setPopup(false);
    setTurns(0);
    resetTurn();
  }

  function shuffleCardsFunctionTwo() {
    const shuffledCards = shuffle.phaseTwo;
    setCards(shuffledCards);
    setPopup(false);
    setTurns(0);
    resetTurn();
  }

  function shuffleCardsFunctionThree() {
    const shuffledCards = shuffle.phaseThree;
    setCards(shuffledCards);
    setPopup(false);
    setTurns(0);
    resetTurn();
  }

  

  return (
    <BrowserRouter>
      <div className='App'>
        <Header
          shuffleCardsFunctionOne={shuffleCardsFunctionOne}
          shuffleCardsFunctionTwo={shuffleCardsFunctionTwo}
          shuffleCardsFunctionThree={shuffleCardsFunctionThree}
        />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route
            path='phase-one'
            element={
              <PhaseOne
                cards={cards}
                setCards={setCards}
                shuffleCardsFunctionOne={shuffleCardsFunctionOne}
                choiceOne={choiceOne}
                setChoiceOne={setChoiceOne}
                choiceTwo={choiceTwo}
                setChoiceTwo={setChoiceTwo}
                disabled={disabled}
                setDisabled={setDisabled}
                resetTurn={resetTurn}
                setTurns={setTurns}
                turns={turns}
                setPopup={setPopup}
                popup={popup}
              />
            }
          />
          <Route
            path='phase-two'
            element={
              <PhaseTwo
                cards={cards}
                setCards={setCards}
                shuffleCardsFunctionTwo={shuffleCardsFunctionTwo}
                choiceOne={choiceOne}
                setChoiceOne={setChoiceOne}
                choiceTwo={choiceTwo}
                setChoiceTwo={setChoiceTwo}
                disabled={disabled}
                setDisabled={setDisabled}
                resetTurn={resetTurn}
                setTurns={setTurns}
                turns={turns}
                setPopup={setPopup}
                popup={popup}
              />
            }
          />
          <Route
            path='phase-three'
            element={
              <PhaseThree
                cards={cards}
                setCards={setCards}
                shuffleCardsFunctionThree={shuffleCardsFunctionThree}
                choiceOne={choiceOne}
                setChoiceOne={setChoiceOne}
                choiceTwo={choiceTwo}
                setChoiceTwo={setChoiceTwo}
                disabled={disabled}
                setDisabled={setDisabled}
                resetTurn={resetTurn}
                setTurns={setTurns}
                turns={turns}
                setPopup={setPopup}
                popup={popup}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
