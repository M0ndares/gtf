// Makes possible the comparison of answers, puts images and counts rounds 
var round = 1; 
var answers = ["Japan", "Mexico", "China", "Canada", "Argentina", "India", "Venezuela", "Uruguay", "Greece", "Puerto Rico", "Singapore", "Honduras", "Portugal", "Norway", "El Salvador", "Jamaica", "New Zealand", "Philippines", "Ireland", "Belize", "Bangladesh", "Denmark", "Slovenia", "Barbados", "Finland", "Mozambique", "Iran", "Morocco", "Angola", "Dominican Republic", "Montenegro", "Tunisia", "Yemen", "Albania", "Latvia", "Libya", "Luxembourg", "Moldova", "Botswana", "Algeria", "Belarus", "Estonia", "Mongolia", "North Macedonia", "Oman", "Uzbekistan", "Somalia", "Rwanda", "Turkmenistan", "Seychelles"]; 
var images = ["../audio_and_video/mexico.png", "../audio_and_video/china.png", "../audio_and_video/canada.png", "../audio_and_video/argentina.png", "../audio_and_video/india.png", "../audio_and_video/venezuela.png", "../audio_and_video/uruguay.png", "../audio_and_video/greece.png", "../audio_and_video/puertoRico.png", "../audio_and_video/singapore.png", "../audio_and_video/honduras.png", "../audio_and_video/portugal.png", "../audio_and_video/norway.png", "../audio_and_video/elSalvador.png", "../audio_and_video/jamaica.png", "../audio_and_video/newZealand.png", "../audio_and_video/philippines.png", "../audio_and_video/ireland.png", "../audio_and_video/belize.png", "../audio_and_video/bangladesh.png", "../audio_and_video/denmark.png", "../audio_and_video/slovenia.png", "../audio_and_video/barbados.png", "../audio_and_video/finland.png", "../audio_and_video/mozambique.png", "../audio_and_video/iran.png", "../audio_and_video/morocco.png", "../audio_and_video/angola.png", "../audio_and_video/dominicanRepublic.png", "../audio_and_video/montenegro.png", "../audio_and_video/tunisia.png", "../audio_and_video/yemen.png", "../audio_and_video/albania.png", "../audio_and_video/latvia.png", "../audio_and_video/libya.png", "../audio_and_video/luxembourg.png", "../audio_and_video/moldova.png", "../audio_and_video/botswana.png", "../audio_and_video/algeria.png", "../audio_and_video/belarus.png", "../audio_and_video/estonia.png", "../audio_and_video/mongolia.png", "../audio_and_video/northMacedonia.png", "../audio_and_video/oman.png", "../audio_and_video/uzbekistan.png", "../audio_and_video/somalia.png", "../audio_and_video/rwanda.png", "../audio_and_video/turkmenistan.png", "../audio_and_video/seychelles.png"];
var isCorrect = false;
var onGame = true;
var feedbackElement = document.getElementById('feedback'); 
var gameFinished = document.getElementById('gameFinished');

function answerComparison() { 
    var displayElement = document.getElementById('displayElement'); 
    var answerElement = document.getElementById('answerElement'); 
    var countryImage = document.getElementById('countryImage');
    if (answerElement && feedbackElement && onGame === true) { 
        if (answerElement.value.toLowerCase() === answers[round - 1].toLowerCase()) { 
            displayElement.innerText = `Correct answers: ${round}`;
            feedbackElement.innerText = "Correct!"; 
            isCorrect = true;
            countryImage.src = images[round-1];
            answerElement.value = "";
            round++; 
            if (round <= answers.length) { 
                answerElement.value = "";
            } else { 
                feedbackElement.innerText = "Congratulations! You've completed all rounds."; 
                gameFinished.style.display = "block";
                onGame = false;
            } 
        } else { 
            feedbackElement.innerText = "Wrong answer, try again!";
        }
    }
}

// Limits the time for each round to 10 seconds
var timer = 10;
var countdownInterval;
var tryAgain = document.getElementById('tryAgain');

function countdown() {
    var countdownElement = document.getElementById('timeDisplay');
    if (countdownElement && round<50) {
        countdownElement.innerText = timer;
        timer--; 
        if (timer < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerText = "Time's up!";
            onGame = false;
            tryAgain.style.display = "block";
            feedbackElement.innerText = `The correct answer was ${answers[round-1]}`
        } 
        if (isCorrect === true) {
            timer = 10;
            clearInterval(countdownInterval); 
            countdownInterval = setInterval(countdown, 1000);
            isCorrect = false;
        }
    }
}
countdownInterval = setInterval(countdown, 1000);


// Counts the total time of the game
var seconds = 0;
var minutes = 0;
var timeInterval;
function totalTime() {
    var timeElement = document.getElementById('time');
    if (timeElement && onGame === true) {
        timeElement.innerText = seconds;
        seconds++; 
        if (seconds > 59) {
            minutes++;
            seconds = 0;
            timeElement.innerText = `${minutes}:${seconds}`;
        } 
        var formattedMinutes = minutes < 10 ? '0' + minutes : minutes; 
        var formattedSeconds = seconds < 10 ? '0' + seconds : seconds; 
        timeElement.innerText = `${formattedMinutes}:${formattedSeconds}`;
    }
}
timeInterval = setInterval(totalTime, 1000);


function goToCharts() { 
    window.location.href = "bestScores.html"; 
}

// Displays a chart with the best scores
function bestScores() {
    var name = document.getElementById('nickname');
    var currentDate =new Date();
    var dateElement = document.getElementById('date');
    var time = document.getElementById('time'); 
    if (name && date && time && onGame===false) {
        dateElement.innerText = currentDate.toLocaleDateString();
    }
}