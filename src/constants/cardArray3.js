
const cards = [
    {
        name: "boots",
        content: "/images/boots.png",
        matched: false,
    },
    {
        name: "boots",
        content: "/images/boots palavra.png",
        matched: false,
    },
    {
        name: "dress",
        content: "/images/dress.png",
        matched: false,
    },
    {
        name: "dress",
        content: "/images/dress palavra.png",
        matched: false,
    },
    {
        name: "hat",
        content: "/images/hat.png",
        matched: false,
    },
    {
        name: "hat",
        content: "/images/Hat palavra.png",
        matched: false,
    },
    {
        name: "jacket",
        content: "/images/jacket.png",
        matched: false,
    },
    {
        name: "jacket",
        content: "/images/jackets palavra.png",
        matched: false,
    },
    {
        name: "pants",
        content: "/images/pants.png",
        matched: false,
    },
    {
        name: "pants",
        content: "/images/pants palavra.png",
        matched: false,
    },
    {
        name: "shirt",
        content: "/images/shirt.png",
        matched: false,
    },
    {
        name: "shirt",
        content: "/images/shirt palavra.png",
        matched: false,
    },
    {
        name: "skirt",
        content: "/images/skirt.png",
        matched: false,
    },
    {
        name: "skirt",
        content: "/images/skirt palavra.png",
        matched: false,
    },
    {
        name: "shoes",
        content: "/images/shoes.png",
        matched: false,
    },
    {
        name: "shoes",
        content: "/images/shoes palavra.png",
        matched: false,
    },
];

const cardArray3 = cards.map((card, i) => ({...card, id: i}))


export default cardArray3;

