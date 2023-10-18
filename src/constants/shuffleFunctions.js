import cardArray1 from '../constants/cardArray1';
import cardArray2 from '../constants/cardArray2';


// const phaseOne = () => {
//     let copy = [], n = cardArray1.length, i;

//     while (n) {
//         i = Math.floor(Math.random() * n--);

//         copy.push(cardArray1.splice(i, 1)[0]);
//     }

//     return copy;
// }


// const phaseTwo = () => {
//     let copy = [], n = cardArray2.length, i;

//     while (n) {
//         i = Math.floor(Math.random() * n--);

//         copy.push(cardArray2.splice(i, 1)[0]);
//     }

//     return copy;
// }


// const shuffle = {
//     phaseOne,
//     phaseTwo
// };

// export default shuffle;

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

const shuffle = {
    phaseOne,
    phaseTwo
};

export default shuffle;
