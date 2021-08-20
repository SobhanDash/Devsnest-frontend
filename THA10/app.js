var url = "https://opentdb.com/api.php?amount=10";

//selectors
const result = document.querySelector(".resultBtn");

//variables
let score = 0;
let body = document.body;

//FUNCTIONS
//shuffle the questions
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    //swapping using es6
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

//create the options
function createOption(option, answer = false) {
  //btn holder
  const opHolder = document.createElement("div");
  opHolder.className = "op";

  //btns
  const button = document.createElement("button");
  button.innerText = option;

  //event listener
  button.addEventListener("click", () => {
    if (answer) {
      if (!button.classList.contains("correct")) {
        score++;
      }
      button.classList.add("correct");
    } else {
      button.classList.add("wrong");
    }
    reveal(button);
  });

  //add buttons to the container and return the div
  opHolder.appendChild(button);
  return opHolder;
}

// result reveal
function reveal(bttn) {
  let temp = score;
  let options = bttn.closest(".options");
  console.log(options);
  let buttons = options.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.click();
  });
  score = temp;
}

//fetching the data
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    var results = data.results;
    results.forEach((ques) => {
      let options = [ques.correct_answer, ...ques.incorrect_answers];
      ques.options = options;
    });

    //foreach question create it's container and options
    results.forEach((currQues, qNo) => {
      //question container
      const container = document.createElement("div");
      container.className = "quiz-container";
      //questions
      const questions = document.createElement("div");
      questions.className = "question";
      questions.innerHTML = `${qNo + 1}. ${currQues.question}`;
      container.append(questions);

      //options container
      const options = document.createElement("div");
      options.className = "options";

      //each option
      let optionsArr = [];
      currQues.options.forEach((option, opNo) => {
        if (opNo === 0) {
          optionsArr.push(createOption(option, true));
        } else {
          optionsArr.push(createOption(option));
        }
      });

      //shuffle the options
      shuffle(optionsArr);

      //append the options in the container
      optionsArr.forEach((op) => {
        options.append(op);
      });

      //append the whole container to the body
      container.append(options);
      body.append(container);

      //for result btn
      result.addEventListener("click", () => {
        result.innerHTML = `${score}`;
      });
    });
  });
