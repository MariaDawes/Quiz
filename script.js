var startPageEl = document.getElementById("start-page");
var startButtonEl = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var myquestEl = document.getElementById("Myquestions");
var scoreEl = document.getElementById("scores")
var timerTimer;
var timerEl = document.getElementById("thetime");
var time = 75;
var currentQuestion = 0;
var answersEl = document.getElementById("answers");
var rorwEl = document.getElementById("rightorwrong");
var repository = [
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

 
function beginQuiz(){
                                                    console.log("inside begin quiz function");
    var startPageEl = document.getElementById("start-page");
    startPageEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    timerTimer = setInterval(clockTick, 1000);
    timerEl.textContent = time;
    
//startPageEl.setAttribute("style", "display: none");
//startPageEl.setAttribute("style", "display: block");
}    
                                                    



startButtonEl.onclick = function() {beginQuiz()}; 


function clockTick(){
    console.log("time ..........................");
time--;
timerEl.textContent = time;
if (time <= 0){
    // function finalize() Add end of game tasks endof game function - call the funcion 
}
}


function getQuestions(){  

                                                    console.log("im in get question function");
    var a = 0;
    var b = 0;
    var userAnswer = "noanswer";
    var correctCount = 0;
    var rightAnswer = "t";
    var correctCount = 0;
    var msg = "."

    var test = repository[1].title
    console.log("test =",test);

    for (var i = 0; i < repository.lenght; i++){
            
        var tempQuestion = repository[i].title;
        questionsEl.textContent = tempQuestion;

        var rightAnswer = repository[i].answer;
    
                                                        console.log("Questions:", questionsEl);
                                                        console.log("the Answer:", theAnswer);

        //Add objects to array
        for (var a = 0; a < choices.lenght; a++){   
        
            OneArray[a] = repository[i].choices[a];
                                                        console.log("OneArray", OneArray[a]);
        }    
    
                                                        console.log(OneArray[0]);
                                                        console.log(OneArray[1]);
                                                        console.log(OneArray[2]);
                                                        console.log(OneArray[3]);

            
        //add buttons for every object in array
        OneArray.forEach( function(v) { 
            var button= document.createElement('button');
            button.type= 'button';
            button.appendChild(document.createTextNode(v.tooltip));
            button.setAttribute('onClick',v.press);
            document.getElementById("buttons").appendChild(button);
        } );

        if (button === rightAnswer){
            correctCount++;
            msg = "Correct!!!";
        } 
        else{
            correctCount--;
            msg = "Wrong!!!";
        }
        rorwEl.textContent = msg
        


        //clean screen 
        myquestEl.setAttribute("class", "hide");
        scoreEl.removeAttribute("class");
        
    }    
}
        
getQuestions();

        
    //Clean page 
    
    

    //     var questionsEl = document.getElementById("myQuestions");
    //     questionsEl.setAttribute("class", "hide");
    //     questionsEl.removeAttribute("class");

    


    //display ScoreE1 near the html "my final score"




//     // Page - All done!!!


//     // Clean page with questions 

//     var startPage3 = document.getElementById("score");
//     var questions = document.getElementById("myQuestions");
//     questionsEl.setAttribute("class", "hide");
//     startPage3.removeAttribute("class");

// //display ScoreE1 near the html "my final score"
// var ScoreEl = document.getElementById("thescore");


// // Page Higher Score

// // Clean page " All done!"
// var startPage3 = document.getElementById("score");
// var questionsEl = document.getElementById("myQuestions");
// questionsEl.setAttribute("class", "hide");
// startPage3.removeAttribute("class");





