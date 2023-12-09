let message =
  "If you see the moon, you will see the beauty of God." +
  "\n" +
  "If you see the sun, you will see the power of God." +
  "\n" +
  "If you see a mirror, you will see God's best creation. So believe it." +
  "\n" +
  "We are all tourists, " +
  "God is our travel agent who has already identified," +
  "\n" +
  "our routes, bookings and destinations... trust Him and enjoy life." +
  "\n" +
  "Life is just a journey...Therefore, live today!";

function showQuote() {
  const quote = document.querySelector("#quote");
  let answer = document.querySelector("input").value;
  if (answer === "yes") {
    quote.innerHTML = message;
  } else if (answer === "no") {
    quote.innerHTML = "Awe, maybe next time!";
  } else {
    quote.innerHTML = "Huh?";
  }
}
