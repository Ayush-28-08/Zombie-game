// Iteration 1: Declare variables required for this game
const gameBody = document.getElementById("game-body");
var seconds = document.getElementById("timer").textContent;
const img = [
  "zombie-1.png",
  "zombie-2.png",
  "zombie-4.png",
  "zombie-5.png",
  "zombie-6.png",
];
var zombieid=0
// Iteration 1.2: Add shotgun sound
const expAudio = new Audio("./assets/shotgun.wav");


// Iteration 1.3: Add background sound
const backgroundSound = new Audio("./assets/bgm.mp3");


// Iteration 1.4: Add lives
const maxlives = 4;
var lives = 4;

// Iteration 2: Write a function to make a zombie

function makeZombie() {
  randomImage = img[getRandomInt(0, img.length)];
  gameBody.innerHTML += `<img src="./assets/${randomImage}" class="zombie-image" id="zombie${zombieid}">`;
  let zombie = document.getElementById("zombie" + zombieid);
  zombie.style.transform = `translateX(${getRandomInt(20, 80)}vw)`;
  zombie.style.animationDuration = `${getRandomInt(3, 6)}s`;
  zombie.onclick = () => {
    zombieDestruct(zombie);
  };
}

// Iteration 3: Write a function to check if the player missed a zombie

function checkCollision(zombie) {
  if (zombie.getBoundingClientRect().top <= 0) {
    lives--;
    return true;
  }
  return false;
}

// Iteration 4: Write a function to destroy a zombie when it is shot or missed

function zombieDestruct(zombie) {
  zombie.style.display = "none";
  zombieid++;
  makeZombie();
}

// Iteration 5: Creating timer

var timer = setInterval(function () {
  seconds--;
  document.getElementById("timer").textContent = seconds;
  let zombie = document.getElementById("zombie" + zombieid);
  if (checkCollision(zombie) == true) {
    zombieDestruct(zombie);
    if (lives == 0) {
    
      location.href = "./game-over.html";
    }
  }
  if (seconds == 0) {
    
    location.href = "./win.html";
  }
}, 1000);

// Iteration 6: Write a code to start the game by calling the first zombie

makeZombie(zombieid);

// Iteration 7: Write the helper function to get random integer

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
