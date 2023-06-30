const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const quizQuestions = [
    {
    question: "1. Laavanya is currently a:",
    answers: {
      a: "Bachelor's student at QUT",
      b: "Academic at QUT",
      c: "Associate Fellow of Higher Education Academy, UK",
      d: "PhD Researcher at QUT"
    },
    correctAnswer: "d"
    },
    {
    question: "2. Laavanya works in the research area of:",
    answers: {
      a: "Animal Science",
      b: "Nutrition and Exercise",
      c: "Public Health",
      d: "Clinical Sciences"
    },
    correctAnswer: "c"
    },
    {
    question: "3. Laavanya's research skill is NOT",
    answers: {
      a: "Project planning",
      b: "Organization",
      c: "Data management",
      d: "Report writing"
    },
    correctAnswer: "b"
    },
    {
    question: "4. Laavanya is skilled in :",
    answers: {
      a: "Project Management",
      b: "Leadership",
      c: "Report writing",
      d: "All of the above"
    },
    correctAnswer: "d"
    }
    ];
function buildQuiz(){
const output = [];
for(i=0; i<quizQuestions.length; i++){
const answers = [];
for(letter in quizQuestions[i].answers){
answers.push(
'<label>'
+ '<input type="radio" name="question'+i+'" value="'+letter+'">' 
+ letter + ': '
+ quizQuestions[i].answers[letter]
+ '</label>'  
);
}
output.push(
'<div class="question">' + quizQuestions[i].question + '</div>'
+'<div class="answers">' + answers.join('') + '</div>'
);
}
quizContainer.innerHTML = output.join("");
}
function showResults(){

var answerContainers = quizContainer.querySelectorAll('.answers');

var numCorrect = 0;

for(i=0; i<quizQuestions.length; i++){

userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

if(userAnswer===quizQuestions[i].correctAnswer){

numCorrect++;

answerContainers[i].style.color = 'lightgreen';

}

else{

answerContainers[i].style.color = 'red';

}

}

if (numCorrect === 0) { 

resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";

}

if (numCorrect === 1) { 

resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";

}

if (numCorrect === 2) { 

resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";

}

if (numCorrect === 3) { 

resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Tara pretty well!";

}

if (numCorrect === 4) { 

resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Tara so well!";

}

}

buildQuiz();

submitButton.onclick = function() {

showResults();
    
}
