

var questions = [question1, question2, question3, question4, question5, question6];
var correctAnswer;
var counter = 0;

//question objects
var question1 = {
	q: "What would a farmer do with his mangel-wurzel?",
	a: "Pull it behind his plow horse.",
	b: "Feed it to his animals.",
	c: "Wear it in inclement weather.",
	d: " Eat it with sauerkraut.",
	correct: "Feed it to his animals.",
	definition: "n. A variety of beet cultivated as food for livestock."
};

var question2 = {
	q: "What is a practitioner of labiomancy good at?",
	a: "Finding water with a divining rod.",
	b: "Chemistry.",
	c: "Storm chasing.",
	d: "Reading lips",
	correct: "Reading lips.",
	definition: "n. Divination or interpretation by means of the motions of the lips; specifically, lip-reading."
};

var question3 = {
	q: "When would you eat a mesonoxian feast?",
	a: "At sunset on the Vernal equinox.",
	b: "750 BC.",
	c: "At midnight.",
	d: " On your  fiesta de quinceañera",
	correct: "At midnight.",
	definition: "adj.	Pertaining to the hour of midnight."
};

var question4 = {
	q: "Your grandmother gave you spondulicks…what is it?",
	a: "Cash.",
	b: "A contagious disease.",
	c: "A delicious treat.",
	d: "Her homemade remedy for what ails you.",
	correct: "Cash.",
	definition: "n. Money."
};

var question5 = {
	q: "Where would you wear your winklepickers?",
	a: "On the bridge of your nose.",
	b: "On your feet.",
	c: "On your hands.",
	d: "On your ears.",
	correct: "On your feet.",
	definition: "n. A shoe with a long pointed toe, popular in the 1950s."
};

var question6 = {
	q: "Your friend has the mulligrubs…you should:",
	a: "Get her to a doctor.",
	b: "Suggest a shower.",
	c: "Get out of the way.",
	d: "Cheer her up.",
	correct: "Cheer her up.",
	definition: "n. Grumpiness, sullenness, a bad mood."
};

// on page load
$(document).ready (function() {
// 	show instructions


// on clicking begin
  $("#begin").click(function() {
  	$("#instructions").fadeOut("slow", startGame)
  	$("#question").text("Question \#" + (counter + 1) + ": " + question1.q);
  });
	
// starting new game function
 function startGame() {
  
 }
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