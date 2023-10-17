
const cards = [
    {
        name: "bread",
        content: "/images/bread.png",
        matched: false,
    },
    {
        name: "bread",
        content: "/images/palavra Bread.png",
        matched: false,
    },
    {
        name: "cake",
        content: "/images/cake.png",
        matched: false,
    },
    {
        name: "cake",
        content: "/images/palavra Cake.png",
        matched: false,
    },
    {
        name: "coffee",
        content: "/images/coffee.png",
        matched: false,
    },
    {
        name: "coffee",
        content: "/images/palavra Coffee.png",
        matched: false,
    },
    {
        name: "ice cream",
        content: "/images/ice cream.png",
        matched: false,
    },
    {
        name: "ice cream",
        content: "/images/palavra Ice Cream.png",
        matched: false,
    },
    {
        name: "juice",
        content: "/images/juice.png",
        matched: false,
    },
    {
        name: "juice",
        content: "/images/palavra Juice.png",
        matched: false,
    },
    {
        name: "pancake",
        content: "/images/pancake.png",
        matched: false,
    },
    {
        name: "pancake",
        content: "/images/palavra pancake.png",
        matched: false,
    },
    {
        name: "spaghetti",
        content: "/images/spaghetti.png",
        matched: false,
    },
    {
        name: "spaghetti",
        content: "/images/palavra spaghetti.png",
        matched: false,
    },
    {
        name: "pizza",
        content: "/images/pizza.png",
        matched: false,
    },
    {
        name: "pizza",
        content: "/images/palavra Pizza.png",
        matched: false,
    },
];

const cardArray2 = cards.map((card, i) => ({...card, id: i}))


export default cardArray2;

