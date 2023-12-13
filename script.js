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

let output = document.getElementById("output");
let affirmations = [
  "Nothing can dim the light that shines from within.",
  "I am in the right place at the right time, doing the right thing.",
  "You are loved just for being who you are, just for existing.",
  "I AM GOOD ENOUGH!",
  "Your life is about to be incredible.",
  "Failure is just another way to learn how to do something right.",
  "Hold your head up, you are deserving of all good things coming to you!",
];

function getAffirmation() {
  for (affirmation of affirmations) {
    output.innerHTML =
      affirmations[Math.floor(Math.random() * affirmations.length)];
  }
}
