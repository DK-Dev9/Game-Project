let timer = 60;
let score = 0;
let hit;
let clutter = document.querySelector("#bottom")



createBubble()

function createBubble() {
    
    clutter.innerHTML = ''
    for (let i = 0; i < 171; i++) {
        hit = Math.floor(Math.random() * 10)
        clutter.innerHTML += `<div class="bubble">${hit}</div>`
        
    }
}

function runTimer() {
  let inttime = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.getElementById("timerval").textContent = timer;
    } else {
      clearInterval(inttime);
        clutter.innerHTML = `<h1>Game Over with ${score} score</h1>`
    }
  }, 1000);
}
runTimer();

function getNewHit() {
  document.querySelector("#hitval").textContent = Math.floor(
    Math.random() * 10);
}
getNewHit();

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}


document.querySelector('#bottom').addEventListener('click', (dets)=>{
    if(document.querySelector("#hitval").textContent == dets.target.textContent){
        increaseScore()
        createBubble()
        getNewHit()
    }
})
