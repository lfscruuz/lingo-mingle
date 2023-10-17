
const cards = [
    {
        name: "dog",
        content: "/images/dog.png",
        matched: false,
    },
    {
        name: "dog",
        content: "/images/palavra Dog.png",
        matched: false,
    },
    {
        name: "cat",
        content: "/images/cat.png",
        matched: false,
    },
    {
        name: "cat",
        content: "/images/palavra Cat.png",
        matched: false,
    },
    {
        name: "bird",
        content: "/images/bird.png",
        matched: false,
    },
    {
        name: "bird",
        content: "/images/palavra Bird.png",
        matched: false,
    },
    {
        name: "chicken",
        content: "/images/chicken.png",
        matched: false,
    },
    {
        name: "chicken",
        content: "/images/palavra Chicken.png",
        matched: false,
    },
    {
        name: "horse",
        content: "/images/horse.png",
        matched: false,
    },
    {
        name: "horse",
        content: "/images/palavra Horse.png",
        matched: false,
    },
    {
        name: "pig",
        content: "/images/pig.png",
        matched: false,
    },
    {
        name: "pig",
        content: "/images/palavra Pig.png",
        matched: false,
    },
    {
        name: "rabbit",
        content: "/images/rabbit.png",
        matched: false,
    },
    {
        name: "rabbit",
        content: "/images/palavra Rabbit.png",
        matched: false,
    },
    {
        name: "turtle",
        content: "/images/turtle.png",
        matched: false,
    },
    {
        name: "turtle",
        content: "/images/palavra Turtle.png",
        matched: false,
    },
];

const cardArray1 = cards.map((card, i) => ({...card, id: i}))

export default cardArray1;

