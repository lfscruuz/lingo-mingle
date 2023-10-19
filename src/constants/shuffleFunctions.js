import cardArray1 from '../constants/cardArray1';
import cardArray2 from '../constants/cardArray2';
import cardArray3 from './cardArray3';

const phaseOne = () => {
    let copy = [...cardArray1]; // Create a copy of the original array
    let shuffledArray = [];

    while (copy.length > 0) {
        const randomIndex = Math.floor(Math.random() * copy.length);
        const randomCard = copy[randomIndex];
        shuffledArray.push(randomCard);
        copy.splice(randomIndex, 1); // Remove the selected card from the copy
    }

    return shuffledArray;
}

const phaseTwo = () => {
    let copy = [...cardArray2]; // Create a copy of the original array
    let shuffledArray = [];

    while (copy.length > 0) {
        const randomIndex = Math.floor(Math.random() * copy.length);
        const randomCard = copy[randomIndex];
        shuffledArray.push(randomCard);
        copy.splice(randomIndex, 1); // Remove the selected card from the copy
    }

    return shuffledArray;
}

const phaseThree = () => {
    let copy = [...cardArray3]; // Create a copy of the original array
    let shuffledArray = [];

    while (copy.length > 0) {
        const randomIndex = Math.floor(Math.random() * copy.length);
        const randomCard = copy[randomIndex];
        shuffledArray.push(randomCard);
        copy.splice(randomIndex, 1); // Remove the selected card from the copy
    }

    return shuffledArray;
}

const shuffle = {
    phaseOne,
    phaseTwo,
    phaseThree
};

export default shuffle;
