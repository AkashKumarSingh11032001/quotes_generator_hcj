const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote() {
  const API_URL = "https://api.quotable.io/random";

  const response = await fetch(API_URL);
  var data = await response.json();
  console.log(data);
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

function tweet() {
  let tweet_mssg = quote.innerHTML + " --- by " + author.innerHTML;
  window.open(
    `http://twitter.com/intent/tweet?text=${tweet_mssg}`,
    "Tweet Window",
    "width=600 height=300"
  );
}

getQuote();
