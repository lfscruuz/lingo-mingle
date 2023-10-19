import Card from './Card';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PhaseTwo({ cards, setCards, shuffleCardsFunctionTwo, choiceOne, setChoiceOne, choiceTwo, setChoiceTwo, disabled, setDisabled, resetTurn, setTurns, turns, setPopup, popup }) {

    const navigate = useNavigate();

    function navigateToPhase3(){
        navigate("/phase-three");
    }

    function closePopup(){
        setPopup(false);
    }

    function handleChoice(card) {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true);
            if (choiceOne.id !== choiceTwo.id) {
                if (choiceOne.name === choiceTwo.name) {
                    setCards((prevCards) => {
                        return prevCards.map((card) => {
                            if (card.name === choiceOne.name) {
                                return { ...card, matched: true }
                            } else {
                                return card
                            }
                        })
                    })
                }
            }
            setTurns(prevTurns => prevTurns + 1);
            setTimeout(() => {
                resetTurn();
            }, 1000);
        }
        if (cards.length !== 0) {
            const allMatches = cards.every(card => card.matched);
            if (allMatches) {
                setPopup(true);
            }
        }

    }, [choiceOne, choiceTwo]);



    return (
        <div>
            <div className='cards-grid'>
                {cards.length === 0 ?
                    (
                        <>
                            Clique em NOVO JOGO para iniciar
                        </>
                    )
                    :
                    cards.map((card) => {
                        return (
                            <Card
                                key={card.id}
                                card={card}
                                handleChoice={handleChoice}
                                flipped={card === choiceOne || card === choiceTwo || card.matched === true}
                                disabled={disabled}
                            />
                        )
                    })
                }
            </div>
            <div className="buttons-container">
                <button onClick={shuffleCardsFunctionTwo}>NOVO JOGO</button>
            </div>
            <h1>JOGADAS: {turns}</h1>
            {popup ? <div className='popup'>
                <p onClick={closePopup}>X</p>
                <h1>PARABÉNS! VOCÊ GANHOU!!</h1>
                <h2>VOCÊ TERMINOU O JOGO EM {turns} JOGADAS </h2>
                <button onClick={navigateToPhase3}>HOME</button>
            </div> : <></>}
        </div>
    )
}