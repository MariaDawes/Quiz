
var startPageEl = document.getElementById("start-page");
var startButton = document.getElementById("start");
var questions = document.getElementById("myQuestions");

//Clean page title
function beginQuiz(){
    var startPageEl = document.getElementById("start-page");
    startPageEl.setAttribute("class", "hide");
    questions.removeAttribute("class");
    //set timer
}

startButton.onclick = beginQuiz; 

// ------------------------------------------------


// Pages with questions 


var Repository = [
    {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
    },
    {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "curly brackets"
    },
    {
    title: "Arrays in Javascript can be used to store:",
    choices: ["numbers and strings", "Other arrays", "booleans", "all of the above"],
    answer: "all of the above"
    },
    {
    title: "String values must be enclosed with ______ when being assigned to variables ",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes"
    },
    {
    title: "A very useful tool used during development and debugging for printing the content into the debugger.",
    choices: ["JavaScript", "Terminal bash", "for loops", "console.log"],
    answer: "console.log"
    }
    ]
  
  
var oneA = document.getElementById("a1");
var twoA = document.getElementById("a2");
var threeA = document.getElementById("a3");
var fourA = document.getElementById("a4");
var correctCount = 0
 

for (var i = 0; i < 5; i++){
        
    questions = Repository.title;
       
    oneA = Repository.choices[1];
    twoA = Repository.choices[2];
    threeA = Repository.choices[3];
    fourA = Repository.choices[4];
        
    console.log(questions);
    console.log(oneA);
    console.log(twoA);
    console.log(threeA);
    console.log(fourA);

    var Arepo = "noanswer";

    If (oneA.onclick){
        var Arepo = OneA;
    } 
    if (twoA.onclick){
    var Arepo = TwoA;
    }
    if (threeA.onclick){
    var Arepo = ThreeA;
    }
    if (fourA.onclick){
    var Arepo = FourA;  
    }

    if (Arepo = Repository.answer){
        // display correct
        correctCount ++
    }
    else {
        //display incorrect
        correctCount --
    }

  //Clean page 
    var questions = document.getElementById("myQuestions");
    questions.setAttribute("class", "hide");
    questions.removeAttribute("class");

}


//display ScoreE1 near the html "my final score"




// Page - All done!!!


// Clean page with questions 

var startPage3 = document.getElementById("score");
var questions = document.getElementById("myQuestions");
questions.setAttribute("class", "hide");
startPage3.removeAttribute("class");

//display ScoreE1 near the html "my final score"
var ScoreEl = document.getElementById("thescore");


// Page Higher Score

// Clean page " All done!"
var startPage3 = document.getElementById("score");
var questions = document.getElementById("myQuestions");
questions.setAttribute("class", "hide");
startPage3.removeAttribute("class");





