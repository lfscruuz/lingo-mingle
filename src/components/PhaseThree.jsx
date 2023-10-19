import { useEffect, useState } from 'react';

import Card from './Card';

export default function PhaseThree({cards, setCards, shuffleCardsFunctionThree, choiceOne, setChoiceOne, choiceTwo, setChoiceTwo, disabled, setDisabled, resetTurn }) {


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
            setTimeout(() => {
                resetTurn();
            }, 1000);
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
                <button onClick={shuffleCardsFunctionThree}>NOVO JOGO</button>
            </div>

        </div>
    )
}