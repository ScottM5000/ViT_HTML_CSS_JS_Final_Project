


 function imgWindow() {
  window.open("image") }



let quotes = [
  `I cook with wine; sometimes I even add it to the food.`,
  `Always start out with a larger pot than what you think you need.`,
  `Oh, I adore to cook. It makes me feel so mindless in a worthwhile way.`,
  `There is not a good or a bad cuisine, just the one you like the best.`
];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
  
};

newQuote();


