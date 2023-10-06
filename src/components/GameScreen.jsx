import { useState } from 'react';
import cardArray from '../constants/cardArray';
import Card from './Card';

export default function GameScreen() {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)

    console.log(cardArray);

    function shuffleCards() {
        const shuffledCards = cardArray.sort(() => Math.random() - 0.5).map((card)=>({...card}));
        setCards(shuffledCards);
        setTurns(0);

        console.log(cards);
    }

    return (
        <div>
            <div className='cards-grid'>
                {cards.length == 0 ? <>inicie um novo jogo</> :
                    cards.map((card) => {
                        console.log(card)
                        return (
                            <Card key={card.id} card={card}/>
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