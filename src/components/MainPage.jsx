import { Link, useNavigate } from 'react-router-dom'
import logo from '/images/cards.png'

export default function Main() {
    const navigate = useNavigate();

    function navigateOne() {
        navigate("/phase-one");
        shuffleCardsFunctionOne();
    }
    return (
        <>
            <img className='logo' src={logo} alt="cards-logo" />
            <div className="buttons-container">
                <button onClick={navigateOne}>NOVO JOGO</button>
            </div>
        </>
    )
}

