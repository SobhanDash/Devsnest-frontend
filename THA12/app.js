//selectors
const quote = document.querySelector(".quote");
const genBtn = document.querySelector(".generate");

const url = "https://api.quotable.io/random";

quote.innerHTML = "History will be kind to me for I intend to write it";

function quoteFetch() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = data.content;
    });
}

genBtn.addEventListener("click", () => {
  quoteFetch();
});

let autoCall = setInterval(quoteFetch, 50000);
