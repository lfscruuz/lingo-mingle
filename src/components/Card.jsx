import ReactFlipCard from 'reactjs-flip-card';

export default function Card({card, handleChoice}) {

    const {id, name, content} = card

    function handleClick(){
        handleChoice(card)
    }

    return (
        <div className="card">
            <div>
                <div className="front">
                    {id} front
                </div>
                <div className="back" onClick={handleClick}>
                    {id} back
                </div>
            </div>
        </div>
    )
}
