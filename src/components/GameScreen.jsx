import { useEffect, useState } from 'react';
import cardArray from '../constants/cardArray';
import Card from './Card';

export default function GameScreen() {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);

    function shuffleCards() {
        const shuffledCards = cardArray.sort(() => Math.random() - 0.5).map((card) => ({ ...card }));
        setCards(shuffledCards);
        setTurns(0);
        resetTurn();
    }

    function handleChoice(card) {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }

    useEffect(() =>{
        if (choiceOne && choiceTwo) {
            setDisabled(true);
            if (choiceOne.id !== choiceTwo.id){
                console.log(choiceOne, choiceTwo);
                if (choiceOne.name === choiceTwo.name) {
                    setCards((prevCards) =>{
                        return prevCards.map((card) =>{
                            if(card.name === choiceOne.name){
                                return{...card, matched: true}
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
    },[choiceOne, choiceTwo]);

    console.log(cards);
    
    function resetTurn(){
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