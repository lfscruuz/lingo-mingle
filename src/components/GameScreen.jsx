import { useState } from 'react';
import cards from '../constants/cardArray';
import Card from './Card';

export default function GameScreen() {
    const [shuffledCards, setShuffledCards] = useState([]);
    const [turns, setTurns] = useState(0);

    function shuffleCards() {
        const newCards = cards.sort(() => Math.random() - 0.5);
        setShuffledCards(newCards);
        setTurns(0);

        console.log(shuffledCards);
    }

    return (
        <div>
            <div className='cards-container'>
                {shuffledCards.length == 0 ? <>inicie um novo jogo</> :
                    shuffledCards.map((card) => {
                        console.log(card)
                        return (
                            <Card name={card.name} />
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