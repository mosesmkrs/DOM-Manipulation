let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [{
    quote: '“You must be the change you wish to see in the world.” ',
    person: 'Gandhi'
},{
    quote: '“Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.”',
    person: 'Albert Einstein'
},{
    quote: '“A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.”',
    person:  'George Bernard Shaw'
},{
    quote: '“If you don’t like something, change it. If you can’t change it, change the way you think about it.”',
    person: 'Mary Engelbreit'
},{
    quote: '“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”',
    person: 'Bill Keane'
},{
    quote: '“When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.”',
    person: 'Helen Keller'
},{
    quote: '“Most people do not listen with the intent to understand; they listen with the intent to reply.”',
    person: 'Stephen Covey'
},{
   quote:  '“Challenges are what make life interesting and overcoming them is what makes life meaningful.”',
   person: 'Joshua J. Marine'
},{
    quote: 'A mind that is stretched by a new experience can never go back to its old dimensions.”',
    person: 'Oliver Wendell Holmes'
},{
    quote: '“The only way that we can live is if we grow. The only way we can grow is if we change. The only way we can change is if we learn. The only way we can learn is if we are exposed. And the only way that we are exposed is if we throw ourselves into the open.”',
    person:  'C. Joybell'
}
];

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length)
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})