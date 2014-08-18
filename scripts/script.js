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
	choices: ["On the bridge of your nose.", "On your feet.", "On your hands.", "That's personal!."],
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
var currentQuestion = 1;
var correctAnswers = 0;
var totalQuestions = questions.length;
var questionIndex = 0;
var correctText = "Correct!";
var wrongText = "That's incorrect";


// on clicking begin
  $("#begin").click(function() {
  	// 	hide instructions
  	$("#instructions").fadeOut("fast");
  	$("#quiz").show("slow", getQuestion);
  });
	
// starting new game function
 function startGame() {
	  // currentQuestion = 1;
		correctAnswers = 0;
	  getQuestion();
 };

 //get question and choices, show question #
 function getQuestion() {
 	// questionIndex++;
 	$("#currentQ").text(questions[questionIndex].q);
 	$("#choice0").text(questions[questionIndex].choices[0]);
 	$("#choice1").text(questions[questionIndex].choices[1]);
 	$("#choice2").text(questions[questionIndex].choices[2]);
 	$("#choice3").text(questions[questionIndex].choices[3]);
 	$("#count").text("Question " + currentQuestion + " of 6");
 };


//check Answer function
	function checkAnswer() {
		// console.log("answer checked");
		var radioValue = false;
		var userChoice = document.getElementsByName('radios');
		for (var i = 0; i < userChoice.length; i++) {
			if(userChoice[i].checked) {
				radioValue = userChoice[i].value;
			};
		};

		//check that they selected a choice
		if (radioValue === false) {
			alert("Please pick an answer");
		}
		// if right answer
		else if (radioValue == questions[questionIndex].correct) {
			// show "correct"
			$("#submitAnswer").text(correctText);
			// show definition
			$("#definition").show()
			$("#definition").text(questions[questionIndex].definition);
			correctAnswers++;

		} else {
			// if wrong answer show "wrong"
			$("#submitAnswer").text(wrongText);
		
		};
		// 	show next button

		$("#nextQ").show();	

		// after final question
		if (questionIndex == 7) {
			// show user final score
			$("#count").text("Congrats! You got " + correctAnswers + " out of 6 correct!");
			// "play again" option
			$("#playAgain").show();
			$("#nextQ").hide;
			};

		// $("#nextQ").click(function() {
		// 	nextQuestion();
		// });

	}; //end checkAnswer function

	$("#nextQ").click(function() {
			nextQuestion();
		});

	// 	click check answer
	$("#submitAnswer").click(function() {
			checkAnswer();
	});

	 //next question function:

function nextQuestion() {
	// hide next button
	$("#nextQ").hide();
	//show check answer option
	$("#submitAnswer").text("Check Answer");
	$("#definition").hide();
	currentQuestion++;
	questionIndex++;
	//get question function
	getQuestion();
}; //end next Question function

}); // end document ready function