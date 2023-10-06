const cards = [
    {
        name: "dog",
        content: "dog image"
    },
    {
        name: "dog",
        content: "dog"
    },
    {
        name: "cat",
        content: "cat image"
    },
    {
        name: "cat",
        content: "cat"
    },
    {
        name: "bird",
        content: "bird image"
    },
    {
        name: "bird",
        content: "bird"
    },
    {
        name: "snake",
        content: "snake image"
    },
    {
        name: "snake",
        content: "snake"
    },
    {
        name: "wolf",
        content: "wolf image"
    },
    {
        name: "wolf",
        content: "wolf"
    },
    {
        name: "lion",
        content: "lion image"
    },
    {
        name: "lion",
        content: "lion"
    },
    {
        name: "banana",
        content: "banana image"
    },
    {
        name: "banana",
        content: "banana"
    },
    {
        name: "apple",
        content: "apple image"
    },
    {
        name: "apple",
        content: "apple"
    },
    {
        name: "pear",
        content: "pear image"
    },
    {
        name: "pear",
        content: "pear"
    }
];

const cardArray = cards.map((card, i) => ({...card, id: i}))
console.log(cardArray);

export default cardArray;

