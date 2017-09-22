/* Pseudo Code 

A basic Multiple Choice Trivia Game
 
Click to Start

Timer begins at 60 seconds and countdown

Player goes through all 10 questions
player can only guess one answer per question

Once completed, player submit's answers
HTML is updated with users score
Score includes: time spent, answers correct, and answers wrong */

// --------------------------------------------------------------- 

var questions = [{
    ques: "Which team did the Dallas Cowboys beat in Super Bowl XXX?",
    ans: ["Dolphins", "Broncos", "Steelers", "Bills"],
    name: "firstAirmax",
    correct: "Steelers",
    divClass: ".firstAirmax"
},
{
    ques: "His rookie season was in 1989 and his record as a starter was 1-15. This Hall of Famer wore number 8 for Dallas for a total of a dozen seasons.",
    ans: ["Tony Romo", "Roger Staubach", "Danny White", "Troy Aikman"],
    name: "swoosh",
    correct: "Troy Aikman",
    divClass: ".swoosh"
},
{
    ques: "The Dallas Cowboys do not play in Dallas, but in which Texas city?",
    ans: ["Houston", "El Paso", "San Antonio", "Arlington"],
    name: "colab",
    correct: "Arlington",
    divClass: ".colab"
},
{
    ques: "What year did the Dallas Cowboys join the NFL?",
    ans: ["1945", "1960", "1951", "1965"],
    name: "endorser",
    correct: "1960",
    divClass: ".endorser"
},
{
    ques: "What is the Cowboys logo on their helmets?",
    ans: ["Cowboy Hat", "Horse", "Star", "Gun"],
    name: "firstForce",
    correct: "Star",
    divClass: ".firstForce"
},
{
    ques: "Which of these Cowboys was not a holdout during training camp?",
    ans: ["Charles Haley", "Michael Irvin", "Mark Stepnoski", "Jay Novecek"],
    name: "airMaxDesigner",
    correct: "Charles Haley",
    divClass: ".airMaxDesigner"
},
{
    ques: "Which year was Bob Lilly's rookie season?",
    ans: ["1950", "1961", "1968", "1948"],
    name: "jordan",
    correct: "1961",
    divClass: ".jordan"
},
{
    ques: "The Cowboys won three Super Bowls in a four-year span during the early 1990s. Two of these three Super Bowl wins were against the same team. Who was this team?",
    ans: ["Pittsburgh Steelers", "Miami Dolphins", "Baltimore Colts", "Buffalo Bills"],
    name: "firstDesign",
    correct: "Buffalo Bills",
    divClass: ".firstDesign"
},
{
    ques: "In 2007, which Dallas Cowboy WR was inducted into the Pro Football Hall of Fame?",
    ans: ["Deion Sanders", "Michael Irvin", "Kevin Williams", "Emmit Smith"],
    name: "retailStore",
    correct: "Michael Irvin",
    divClass: ".retailStore"
},
{
    ques: "Who was the original head coach of the Cowboys?",
    ans: ["Tom Landry", "Jimmy Johnson", "Barry Switzer", "Jerry Jones"],
    name: "distribution",
    correct: "Tom Landry",
    divClass: ".distribution"
}
] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
// loops through the 10 questions 
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
// loops through answers for each radio button
for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}


// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);
    // display wrongAnswers
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    // alert("Times Up!");
    clearInterval(timer);
    return;
}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

// loop through correctArray & radioName to match html elements & answers
for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};

// once submit is clicked...
// tests
// stop timer
countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#answerScreen').show();
// display correctAnswers
$('#correctScreen').append(correctAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz