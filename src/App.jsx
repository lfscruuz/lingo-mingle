import { useEffect, useState } from 'react';
import './styles/App.scss'
import Header from './components/Header';
import Main from './components/MainPage';
import PhaseOne from './components/PhaseOne';
import PhaseTwo from './components/PhaseTwo';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import shuffle from './constants/shuffleFunctions';

function App() {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  function resetTurn() {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  }

  function shuffleCardsFunctionOne() {
    const shuffledCards = shuffle.phaseOne;
    setCards(shuffledCards);
    resetTurn();
  }

  function shuffleCardsFunctionTwo() {
    const shuffledCards = shuffle.phaseTwo;
    setCards(shuffledCards);
    resetTurn();
  }


  return (
    <BrowserRouter>
      <div className='App'>
        <Header 
          shuffleCardsFunctionOne={shuffleCardsFunctionOne}
          shuffleCardsFunctionTwo={shuffleCardsFunctionTwo}
        />
        <Routes>
          <Route
            path='/'
            element={
              <Main
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
              />
            }
          />
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
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
