import { useEffect, useState } from 'react';
import cardArray2 from '../constants/cardArray2';

import Card from './Card';

export default function PhaseTwo() {
    const [cards, setCards] = useState([]);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);


    function shuffleCards() {
        const shuffledCards = () => {
            var copy = [], n = cardArray2.length, i;
            while (n) {
              i = Math.floor(Math.random() * n--);
          
              copy.push(cardArray2.splice(i, 1)[0]);
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
                console.log(choiceOne, choiceTwo);
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
                    console.log("THEY MATCH!!");
                } else {
                    console.log("THEY DON'T MATCH...");
                }
            }
            setTimeout(() => {
                resetTurn();
            }, 1000);
        }
    }, [choiceOne, choiceTwo]);


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