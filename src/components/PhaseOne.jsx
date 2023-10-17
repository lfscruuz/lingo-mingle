import { useEffect, useState } from 'react';
import cardArray1 from '../constants/cardArray1';

import Card from './Card';
import Popup from 'reactjs-popup';

export default function PhaseOne({ setPhaseOne }) {
    const [cards, setCards] = useState([]);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [done, setDone] = useState(true);


    function shuffleCards() {
        const shuffledCards = () => {
            var copy = [], n = cardArray1.length, i;
          
            // While there remain elements to shuffle…
            while (n) {
          
              // Pick a remaining element…
              i = Math.floor(Math.random() * n--);
          
              // And move it to the new cardArray1.
              copy.push(cardArray1.splice(i, 1)[0]);
            }
          
            return copy;
          }

        setCards(shuffledCards);
        resetTurn();
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
            setTimeout(() => {
                resetTurn();
            }, 1000);
        }
        
    }, [choiceOne, choiceTwo]);
    
    useEffect(() => {
        if (cards.length !== 0){
            checkIfDone();
        }
    }, [choiceOne, choiceTwo]);

    function checkIfDone(){
        cards.forEach((card) => {
            console.log(card)
        })

        const finished = cards.every(card => card.matched);
        console.log(finished);
        setPhaseOne(finished);
    }

    function resetTurn() {
        setChoiceOne(null);
        setChoiceTwo(null);
        setDisabled(false);
    }

    return (
        <div>
            <div className='cards-grid'>
                {cards.length == 0 ? <>inicie um novo jogo</> :
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
                <button onClick={shuffleCards}>NEW GAME</button>
            </div>
        </div>
    )
}