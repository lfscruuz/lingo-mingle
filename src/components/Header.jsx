import { useState } from 'react';
import shuffle from '../constants/shuffleFunctions';
import { Link, useNavigate } from 'react-router-dom';

function Header({ shuffleCardsFunctionOne, shuffleCardsFunctionTwo }) {

  const navigate = useNavigate();

  function navigateOne() {
    navigate("/phase-one");
    shuffleCardsFunctionOne();
  }

  function navigateTwo(){
    navigate("/phase-two");
    shuffleCardsFunctionTwo();
  }

  return (
    <>
      <button onClick={navigateOne}>
        Fase 1
      </button>

      <button onClick={navigateTwo}>
        Fase 2
      </button>

    </>
  )
}

export default Header
