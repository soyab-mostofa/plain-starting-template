const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuotesBtn = document.getElementById("new-quote");

const getQuotes = () => {
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  quoteText.textContent = quote.text;
};

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${authorText.textContent}`;

  window.open(twitterUrl, "_blank");
}

twitterBtn.addEventListener("click", () => {
  tweetQuote();
});

newQuotesBtn.addEventListener("click", () => {
  getQuotes();
});

getQuotes();
