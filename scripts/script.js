// on page load
$(document).ready (function() {



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
var totalQuestions = questions.length;
var correctText = "Correct!";
var wrongText = "That's incorrect...show definition?";


// on clicking begin
  $("#begin").click(function() {
  	// 	hide instructions
  	$("#instructions").fadeOut("fast");
  	$("#quiz").show("slow", startGame);
  });
	
// starting new game function
 function startGame() {
	  var currentQuestion = 0;
		var correctAnswers = 0;
	  getQuestion();
 };

 //get question and choices, show question #
 function getQuestion() {
 	currentQuestion++;
 	$("#currentQ").text(questions[currentQuestion].q);
 	$("#choice0").text(questions[currentQuestion].choices[0]);
 	$("#choice1").text(questions[currentQuestion].choices[1]);
 	$("#choice2").text(questions[currentQuestion].choices[2]);
 	$("#choice3").text(questions[currentQuestion].choices[3]);
 	$("#count").text("Question " + currentQuestion + " of 6");
 };

//check Answer function
	function checkAnswer() {
		console.log("answer checked");
		var radioValue = false;
		var userChoice = document.getElementsByName('radios');
		for (var i = 0; i < userChoice.length; i++) {
			if(userChoice[i].checked) {
				radioValue = userChoice[i].value;
			}
		}

		//check that they selected a choice
		if (radioValue === false) {
			alert("Please pick an answer");
		}
		// if right answer
		else if (radioValue == questions[0].correct) {
			// show "correct"
			$("#submitAnswer").text(correctText);
			// show definition
			$("#definition").text(questions[0].definition);
			//show next button
		} else {
			// if wrong answer show "wrong"
			$("#submitAnswer").text(wrongText)
						// option to show definition?
						// $("#submitAnswer").click(function() {
						// 	$("#definition").text(questions[0].definition)
						// });
		};
		// 	show next button

		$("#nextQ").show();	
	
	}; //end checkAnswer function

	// 	click check answer
	$("#submitAnswer").click(function() {
			checkAnswer();
	});


// 	next question function:

function nextQuestion() {
	// hide next button
	$("#nextQ").hide();
	//show check answer option
	$("#submitAnswer").text("Check Answer");

	//get question function
	getQuestion();
}


// 	after final question
// 		show user final score
// 		"play again" option

}); // end document ready function