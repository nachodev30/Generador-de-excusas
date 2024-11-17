/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const select = ListArray => {
    let element = "";
    element = ListArray[Math.floor(Math.random() * ListArray.length)];
    return element;
  };

  select(action);

  let excuse = document.querySelector("#excuse");
  console.log(excuse);
  excuse.innerHTML = select(who) + " " + select(action) + " " + select(what);
  +" " + select(when);
};
