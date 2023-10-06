import { useEffect, useState } from 'react';
import cardArray from '../constants/cardArray';
import Card from './Card';

export default function GameScreen() {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)

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
            if (choiceOne.id !== choiceTwo.id){
                console.log(choiceOne, choiceTwo);
                if (choiceOne.name === choiceTwo.name) {
                    console.log("THEY MATCH!!");
                } else {
                    console.log("THEY DON'T MATCH...");
                }
            }
            resetTurn();
        }
    },[choiceOne, choiceTwo])
    
    function resetTurn(){
        setChoiceOne(null);
        setChoiceTwo(null);
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