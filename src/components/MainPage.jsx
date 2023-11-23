import logo from '/images/cards.png';
import tutoriaGif from '/images/linglemingle_test.gif';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Main() {
    const navigate = useNavigate();
    const [tutorialPupup, setTurorialPopup] = useState(false);

    function closeTutorialPopup() {
        setTurorialPopup(false);
    }
    function openTutorialPopup(){
        setTurorialPopup(true);
    }

    useEffect(() => {
        openTutorialPopup();
    }, [])

    function navigateOne() {
        navigate("/phase-one");
        shuffleCardsFunctionOne();
    }

    return (
        <>
            {tutorialPupup ? <div className='popup tutorial-popup'>
                <p onClick={closeTutorialPopup}>X</p>
                <h1 className='tutorial-title'>APRENDA A JOGAR</h1>
                <img src={tutoriaGif} alt="gif tutorial" className='gif-tutorial' />
                <h3>relacione as figuras</h3>
                <h3>aos seus nomes em inglês</h3>
            </div> : <></>}
            <img className='logo' src={logo} alt="cards-logo" />
            <div className="buttons-container">
                <button onClick={navigateOne}>NOVO JOGO</button>
            </div>
        </>
    )
}

