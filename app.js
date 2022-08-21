const questionDisplay = document.querySelector("#questions");
const answerDisplay = document.querySelector("#answer");

const questions = [
  {
    id: 0,
    text: "Pick a vacation destination:",
    answers: [
      {
        text: "New York",
        image: "https://images.unsplash.com/photo-1523540383849-4ae4125acd6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        alt: "Photo of the Empire State building during daytime.",
        credit: "Oliver Nibett"
      },
      {
        text: "Austin",
        image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        alt: "Time-lapse photography car lights on bridge",
        credit: "Carlos Anfonso"
      },
      {
        text: "Portland",
        image: "https://images.unsplash.com/photo-1558814014-ef437c5214fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJpc2UlMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        alt: "High-rise buildings",
        credit: "Elena Kuchko"
      },
      {
        text: "New Orleans",
        image: "https://images.unsplash.com/photo-1549965738-e1aaf1168943?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        alt: "Road with people and house",
        credit: "Joao Francisco"
      }
    ]
  },
  {
    id: 1,
    text: "Pick some food:",
    answers: [
      {
        text: "Pizza",
        image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
        alt: "Pepperoni Pizza",
        credit: "Alan Hardman"
      },
      {
        text: "Sandwich",
        image: "https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=724&q=80",
        alt: "ham sandwich on white surface",
        credit: "Eaters Collective"
      },
      {
        text: "Pasta",
        image: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        alt: "Pasta in tomato sauce",
        credit: "Mgg Vitchakorn"
      },
      {
        text: "Hamburger",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "hamburger",
        credit: "sk"
      }
    ]
  },
  {
    id: 2,
    text: "Pick a home:",
    answers: [
      {
        text: "Traditional",
        image: "https://images.unsplash.com/photo-1555040479-c949debe66c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        alt: "focus photography of building windows",
        credit: "Burgess Milner"
      },
      {
        text: "Modern",
        image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        alt: "low angle of building view",
        credit: "Brandon Giggs"
      },
      {
        text: "House",
        image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        alt: "trees beside white house",
        credit: "Phil Hearing"
      },
      {
        text: "Mountains",
        image: "https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        alt: "brown wooden cabin in front of forest",
        credit: "eulauretta"
      }
    ]
  }
]

const answers = [
  {
    combinations: ["New York", "Pizza", "Traditional"],
    text: "Blue Cheese",
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZSUyMGNoZWVzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: "Blue cheese"
  },
  {
    combinations: ["Austin", "Pasta", "Modern"],
    text: "Cheddar",
    image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZGRhciUyMGNoZWVzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: "Cheddar cheese"
  },
  {
    combinations: ["Portland", "Sandwich", "Mountains"],
    text: "Feta",
    image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmV0YSUyMGNoZWVzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: "Feta cheese"
  },
  {
    combinations: ["New Orleans", "Hamburger", "House"],
    text: "Halloumi",
    image: "https://images.unsplash.com/photo-1578172397201-efaa902004a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFsbG91bWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    alt: "Halloumi cheese"
  }
]

const unansweredQuestions = [];
const chosenAnswers = [];

const handleClick = (questionId, chosenAnswer) => {
  if(unansweredQuestions.includes(questionId)){
    chosenAnswers.push(chosenAnswer);
    const itemToRemove = unansweredQuestions.indexOf(questionId);
    if(itemToRemove > -1){
      unansweredQuestions.splice(itemToRemove, 1);
    }

    const lowestQuestionId = Math.min(...unansweredQuestions);
    location.href = "#" + lowestQuestionId;
    if(!unansweredQuestions.length){
      location.href = "#answer";
      showAnswer();
    }
  }
}

const showAnswer = () => {
  let result;
  answers.forEach(answer => {
    if(chosenAnswers.includes(answer.combinations[0]) + chosenAnswers.includes(answer.combinations[1]) + chosenAnswers.includes(answer.combinations[2])){
      result = answer;
      return;
    }else if(!result){
      result = answers[0]
    }
  });
  const answerBlock = document.createElement("div");
  answerBlock.classList.add("result-block");
  const answerTitle = document.createElement("h3");
  answerTitle.textContent = result.text;
  const answerImage = document.createElement("img");
  answerImage.setAttribute("src", result.image);
  answerImage.setAttribute("alt", result.alt);
  answerBlock.append(answerTitle, answerImage);
  answerDisplay.append(answerBlock);

  const allAnswerBlocks = document.querySelectorAll(".answer-block");
  Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))
}

const disableQuestionBlock = (questionId, chosenAnswer) => {
  const currentQuestionBlock = document.getElementById(questionId + "questions");
  Array.from(currentQuestionBlock.children).forEach(block => {
    if(block.children.item(1).innerText !== chosenAnswer){
      block.style.opacity = "50%";
    }
  })
}

const populateQuestions = () => {
  questions.forEach(question => {
    const titleBlock = document.createElement("div");
    titleBlock.id = question.id;
    titleBlock.classList.add('title-block');
    const titleHeading = document.createElement("h2");
    titleHeading.textContent = question.text;
    titleBlock.append(titleHeading);
    questionDisplay.append(titleBlock);

    const answersBlock = document.createElement("div");
    answersBlock.id = question.id + "-questions";
    answersBlock.classList.add("answer-options");
    unansweredQuestions.push(question.id);

    question.answers.forEach(answer => {
      const answerBlock = document.createElement("div");
      answerBlock.classList.add("answer-block");
      answerBlock.addEventListener("click", () => handleClick(question.id, answer.text));
      const answerImage = document.createElement("img");
      answerImage.setAttribute("src", answer.image);
      answerImage.setAttribute("alt", answer.alt);
      const answerTitle = document.createElement("h3");
      answerTitle.textContent = answer.text;
      const answerInfo = document.createElement("div");
      const imageLink = document.createElement("a");
      imageLink.setAttribute("href", answer.image);
      imageLink.textContent = answer.credit;
      const sourceLink = document.createElement("a");
      sourceLink.textContent = "Unsplash";
      sourceLink.setAttribute("href", "https://www.unsplash.com");
      answerInfo.append(imageLink, " to ", sourceLink);
      answerBlock.append(answerImage, answerTitle, answerInfo);
      answersBlock.append(answerBlock);
    })
    questionDisplay.append(answersBlock);
  });
}

populateQuestions();