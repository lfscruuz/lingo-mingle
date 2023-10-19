import { useNavigate } from 'react-router-dom';

function Header({ shuffleCardsFunctionOne, shuffleCardsFunctionTwo, shuffleCardsFunctionThree }) {

  const navigate = useNavigate();

  function navigateMain(){
    navigate("/");
  }

  function navigateOne() {
    navigate("/phase-one");
    shuffleCardsFunctionOne();
  }

  function navigateTwo(){
    navigate("/phase-two");
    shuffleCardsFunctionTwo();
  }

  function navigateThree(){
    navigate("/phase-three");
    shuffleCardsFunctionThree();
  }

  return (
    <div className='header'>
      <button onClick={navigateMain}>
        Home
      </button>
      <button onClick={navigateOne}>
        Fase 1
      </button>

      <button onClick={navigateTwo}>
        Fase 2
      </button>

      <button onClick={navigateThree}>
        Fase 3
      </button>
    </div>
  )
}

export default Header
