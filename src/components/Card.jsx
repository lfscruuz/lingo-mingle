import ReactFlipCard from 'reactjs-flip-card';
import verso from '/images/verso.png'

export default function Card({ card, handleChoice, flipped, disabled }) {

    const { content, name } = card

    function handleClick() {
        if (!disabled) {
            handleChoice(card)
        }
    }

    return (
        <div className="card">
            <div className={flipped ? 'flipped' : ''}>
                <img className='front' src={content} alt={name} />
                <img className='back' src={verso} alt="verso" onClick={handleClick} />
            </div>
        </div>
    )
}
