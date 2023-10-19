import Card from './Card';
import { useEffect } from 'react';


export default function PhaseThree({ cards, setCards, shuffleCardsFunctionThree, choiceOne, setChoiceOne, choiceTwo, setChoiceTwo, disabled, setDisabled, resetTurn, setTurns, turns, setPopup, popup }) {

    function closePopup() {
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
                <h1 className='turns'>JOGADAS: {turns}</h1>
                <button onClick={shuffleCardsFunctionThree}>NOVO JOGO</button>
            </div>
            {popup ? <div className='popup'>
                <p onClick={closePopup}>X</p>
                <h1>PARABÉNS! VOCÊ GANHOU!!</h1>
                <h2>VOCÊ TERMINOU O JOGO EM {turns} JOGADAS </h2>
            </div> : <></>}
        </div>
    )
}