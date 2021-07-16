const quotes = [{
        quote: "\"Love is not blind - it sees more, not less. But because it sees more, it is willing to see less.\"",
        author: "Rabbi Julius Gordon",
    },
    {
        quote: "\"Human beings have an inalienable right to invent themselves.\"",
        author: "Germaine Greer",
    },
    {
        quote: "\"Those who cannot remember the past are condemned to repeat it.\"",
        author: "George Santayana",
    },
    {
        quote: "\"Tis the most tender part of love, each other to forgive.\"",
        author: "John Sheffield",
    },
    {
        quote: "\"If you would be loved, love and be lovable.\"",
        author: "Benjamin Franklin",
    },
    {
        quote: "\"Everything that I understand, I understand only because I love.\"",
        author: "Lev Tolstoy",
    },
    {
        quote: "\"It's not how much we give, but how much love we put into giving.\"",
        author: "Mother Teresa",
    },
    {
        quote: "\"No man is born wise.\"",
        author: "Miguel de Cervantes",
    },
    {
        quote: "\"Life is like riding a bicycle. To keep your balance you must keep moving.\"",
        author: "Albert Einstein",
    },
    {
        quote: "\"In youth we learn; in age we understand.\"",
        author: "Marie Ebner von Eschenbach",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const WHITECENTER = "whiteCenter"
quote.classList.add(WHITECENTER);
author.classList.add(WHITECENTER);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
quote.classList.add("bottom1");
author.classList.add("bottom2");