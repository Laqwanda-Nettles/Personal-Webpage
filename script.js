function showQuote() {
  const quote = document.querySelector("#quote");
  let answer = document.querySelector("input").value;
  if (answer === "yes") {
    quote.innerHTML = "thanks";
  }
}
