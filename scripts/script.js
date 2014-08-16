
//question objects
var questions = [
{
	qNum: 1,
	q: "What would a farmer do with his mangel-wurzel?",
	choices: ["Pull it behind his plow horse.", "Feed it to his animals.", "Wear it in inclement weather.", "Eat it with sauerkraut."],
	correct: 2,
	definition: "n. A variety of beet cultivated as food for livestock."
},

{
	qNum: 2,
	q: "What is a practitioner of labiomancy good at?", 
	choices: ["Finding water with a divining rod.", "Chemistry.", "Storm chasing.", "Reading lips"],
	correct: 4,
	definition: "n. Divination or interpretation by means of the motions of the lips; specifically, lip-reading."
},

 {
 	qNum: 3,
	q: "When would you eat a mesonoxian feast?",
	choices: ["At sunset on the Vernal equinox.", "750 BC.", "At midnight.", " On your  fiesta de quinceañera"],
	correct: 3,
	definition: "adj.	Pertaining to the hour of midnight."
},

{
	qNum: 4,
	q: "Your grandmother gave you spondulicks…what is it?",
	choices: ["Cash.", "A contagious disease.", "A delicious treat.", "Her homemade remedy for what ails you."],
	correct: 1,
	definition: "n. Money."
},

{
	qNum: 5,
	q: "Where would you wear your winklepickers?",
	choices: ["On the bridge of your nose.", "On your feet.", "On your hands.", "On your ears."],
	correct: 2,
	definition: "n. A shoe with a long pointed toe, popular in the 1950s."
},

{
	qNum: 6,
	q: "Your friend has the mulligrubs…you should:",
	choices: ["Get her to a doctor.", "Suggest a shower.", "Get out of the way.", "Cheer her up."],
	correct: 4,
	definition: "n. Grumpiness, sullenness, a bad mood."
}
];

//global variables
var currentQuestion = 0;
var correctAnswers = 0;
var counter = 0;
var totalQuestions = questions.length;
var correctText = "Correct!";
var wrongText = "That's incorrect...show definition?";

// on page load
$(document).ready (function() {

// on clicking begin
  $("#begin").click(function() {
  	// 	hide instructions
  	$("#instructions").fadeOut("fast");
  	$("#quiz").show("slow", startGame);
  	startGame();
  });
	
// starting new game function
 function startGame() {
	  var currentQuestion = 0;
		var correctAnswers = 0;
		var counter = 0;
	  getQuestion();
 };

 function getQuestion() {
 	$("#currentQ").text(questions[currentQuestion].q);
 	$("#choice0").text(questions[currentQuestion].choices[0]);
 	$("#choice1").text(questions[currentQuestion].choices[1]);
 	$("#choice2").text(questions[currentQuestion].choices[2]);
 	$("#choice3").text(questions[currentQuestion].choices[3]);
 };
// 	show 1st question
// 	show answer choices
// 	show question #

// 	user chooses answer
// 		if right answer
// 			hide answer choices
// 			show "correct"
// 			show definition
// 			show next button

// 		if wrong answer
// 			hide answer choices
// 			show "wrong"
// 			option to show definition?
// 			show next button

// 		keep user from submitting with no choices

// 	next question:
// 		increase question # count
// 		repeat above

// 	after final question
// 		show user final score
// 		"play again" option

}); // end document ready function