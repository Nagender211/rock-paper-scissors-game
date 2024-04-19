let playerScoreEl=document.getElementById('playerScore');
let playerChoiceEl=document.getElementById('playerChoice');
let computerScoreEl=document.getElementById('computerScore');
let computerChoiceEl=document.getElementById('computerChoice');
let resultsTextEl=document.getElementById('resultText');
let allGameIcons=document.querySelectorAll('.far');

let playerRockEl=document.getElementById('playerRock');
let playerPaperEl=document.getElementById('playerPaper');
let playerScissorsEl=document.getElementById('playerScissors');
let playerLizardEl=document.getElementById('playerLizard');
let playerSpocksEl=document.getElementById('playerSpocks');


let computerRockEl=document.getElementById('computerRock');
let computerPaperEl=document.getElementById('computerPaper');
let computerScissorsEl=document.getElementById('computerScissors');
let computerLizardEl=document.getElementById('computerLizard');
let computerSpocksEl=document.getElementById('computerSpocks');

// console.log(allGameIcons);
let computerChoiceelement='';
let playerScoreNumber=0;
let computerScoreNumber=0;

function updateScore(playerChoice){
  console.log(playerChoice,computerChoiceelement);
  if(playerChoice===computerChoiceelement){
    resultsTextEl.textContent=' its a tie ';
  }else{
    let choice=choices[playerChoice];
    console.log(choice.defeats.indexOf(computerChoiceelement));
    if((choice.defeats.indexOf(computerChoiceelement))>-1){
      resultsTextEl.textContent='YOU WOW!';
      playerScoreNumber++;
      playerScoreEl.textContent=playerScoreNumber;

    }
    else{
      resultsTextEl.textContent='YOU LOSE!';
      computerScoreNumber++;
      computerScoreEl.textContent=computerScoreNumber;
    }
  }
  

}


function displayComputer(){
  // checkRrsults();

  // console.log(playerChoice);
  switch (computerChoiceelement){
    case 'rock':
      computerRockEl.classList.add('selected');
      computerChoiceEl.textContent='--rock';
      break;

      case 'paper':
        computerPaperEl.classList.add('selected');
        computerChoiceEl.textContent='--paper';
        break;


      case 'scissors':
        computerScissorsEl.classList.add('selected');
        computerChoiceEl.textContent='--scissors';
        break;

      case 'lizard':
        computerLizardEl.classList.add('selected');
        computerChoiceEl.textContent='--lizard';
        break;

      case 'spocks':
        computerSpocksEl.classList.add('selected');
        computerChoiceEl.textContent='--spocks';
        break;
      default:
        break;

}
}






function computerRandomChoices(){
  let computerRandomNumbureChoice=Math.random();
  // console.log(computerRandomNumbureChoice);
  if(computerRandomNumbureChoice<0.2){
    computerChoiceelement='rock';
  }else if(computerRandomNumbureChoice<0.4){
    computerChoiceelement='paper';
  }
  else if(computerRandomNumbureChoice<0.6){
    computerChoiceelement='scissors';
  }
  else if(computerRandomNumbureChoice<0.8){
    computerChoiceelement='lizard';
  }
  else{
    computerChoiceelement='spock';
  }
  console.log(computerChoiceelement);
 
}


function checkRrsults(playerChoice){
  reSelected();
  computerRandomChoices();
  displayComputer();
  updateScore(playerChoice);


}


// reselect the sectect the icons
function reSelected(){
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
    
  });
}
function resetAll(){
  playerScoreNumber=0;
  computerScoreNumber=0;
  playerScoreEl.textContent=playerScoreNumber;
  computerScoreEl.textContent=computerScoreNumber;
  playerChoiceEl.textContent='';
  computerChoiceelement.textContent='';
  resultsTextEl.textContent='';
  reSelected();



}


function select(playerChoice){
  checkRrsults(playerChoice);

  // console.log(playerChoice);
  switch (playerChoice){
    case 'rock':
      playerRockEl.classList.add('selected');
      playerChoiceEl.textContent='--rock';
      break;

      case 'paper':
        playerPaperEl.classList.add('selected');
        playerChoiceEl.textContent='--paper';
        break;


      case 'scissors':
        playerScissorsEl.classList.add('selected');
        playerChoiceEl.textContent='--scissors';
        break;

      case 'lizard':
        playerLizardEl.classList.add('selected');
        playerChoiceEl.textContent='--lizard';
        break;

      case 'spocks':
        playerSpocksEl.classList.add('selected');
        playerChoiceEl.textContent='--spocks';
        break;
      default:
        break;

}
}


const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};
resetAll();




var maxParticleCount = 150; //set max confetti count
var particleSpeed = 2; //set the particle animation speed
var startConfetti; //call to start confetti animation
var stopConfetti; //call to stop adding confetti
var toggleConfetti; //call to start or stop the confetti animation depending on whether it's already running
var removeConfetti; //call to stop the confetti animation and remove all confetti immediately

// {
startConfetti = startConfettiInner;
stopConfetti = stopConfettiInner;
toggleConfetti = toggleConfettiInner;
removeConfetti = removeConfettiInner;
var colors = ["DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"]
var streamingConfetti = false;
var animationTimer = null;
var particles = [];
var waveAngle = 0;

function resetParticle(particle, width, height) {
	particle.color = colors[(Math.random() * colors.length) | 0];
	particle.x = Math.random() * width;
	particle.y = Math.random() * height - height;
	particle.diameter = Math.random() * 10 + 5;
	particle.tilt = Math.random() * 10 - 10;
	particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
	particle.tiltAngle = 0;
	return particle;
}

function startConfettiInner() {
	var width = window.innerWidth;
	var height = window.innerHeight;
	window.requestAnimFrame = (function() {
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function (callback) {
				return window.setTimeout(callback, 16.6666667);
			};
	})();
	var canvas = document.getElementById("confetti-canvas");
	if (canvas === null) {
		canvas = document.createElement("canvas");
		canvas.setAttribute("id", "confetti-canvas");
		canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none");
		document.body.appendChild(canvas);
		canvas.width = width;
		canvas.height = height;
		window.addEventListener("resize", function() {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}, true);
	}
	var context = canvas.getContext("2d");
	while (particles.length < maxParticleCount)
		particles.push(resetParticle({}, width, height));
	streamingConfetti = true;
	if (animationTimer === null) {
		(function runAnimation() {
			context.clearRect(0, 0, window.innerWidth, window.innerHeight);
			if (particles.length === 0)
				animationTimer = null;
			else {
				updateParticles();
				drawParticles(context);
				animationTimer = requestAnimFrame(runAnimation);
			}
		})();
	}
}

function stopConfettiInner() {
	streamingConfetti = false;
}

function removeConfettiInner() {
	stopConfetti();
	particles = [];
}

function toggleConfettiInner() {
	if (streamingConfetti)
		stopConfettiInner();
	else
		startConfettiInner();
}

function drawParticles(context) {
	var particle;
	var x;
	for (var i = 0; i < particles.length; i++) {
		particle = particles[i];
		context.beginPath();
		context.lineWidth = particle.diameter;
		context.strokeStyle = particle.color;
		x = particle.x + particle.tilt;
		context.moveTo(x + particle.diameter / 2, particle.y);
		context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
		context.stroke();
	}
}

function updateParticles() {
	var width = window.innerWidth;
	var height = window.innerHeight;
	var particle;
	waveAngle += 0.01;
	for (var i = 0; i < particles.length; i++) {
		particle = particles[i];
		if (!streamingConfetti && particle.y < -15)
			particle.y = height + 100;
		else {
			particle.tiltAngle += particle.tiltAngleIncrement;
			particle.x += Math.sin(waveAngle);
			particle.y += (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
			particle.tilt = Math.sin(particle.tiltAngle) * 15;
		}
		if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
			if (streamingConfetti && particles.length <= maxParticleCount)
				resetParticle(particle, width, height);
			else {
				particles.splice(i, 1);
				i--;
			}
		}
	}
}


