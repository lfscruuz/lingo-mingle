import ReactFlipCard from 'reactjs-flip-card';

export default function Card({card}) {

    const {id, name, content} = card

    return (
        <div className="card">
            <div>
                <div className="front">
                    {id} front
                </div>
                <div className="back">
                    {id} back
                </div>
            </div>
        </div>
    )
}
