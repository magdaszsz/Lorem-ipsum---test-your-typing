const userInput = document.querySelector("textarea");
const loremDiv = document.querySelector(".lorem");
const loremCon = document.querySelector('.lorem__container')
const end = document.querySelector(".ending-btn");
const stats = document.querySelector(".stats");
const time = document.querySelector(".stats__time");
const numOfMistakes = document.querySelector(".stats__number");
const rate = document.querySelector(".stats__rate");
const intro = document.querySelector('.introduction__container');
let mist = 0;
let count = 0;
let spans = [];
let startingTime;
let endingTime;
let elapsedTime;


const texts = [
  {
    short:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur deserunt non in, recusandae ad nulla officia laudantium harum minima adipisci corrupti dolore exercitationem doloribus aliquam. Minima alias rem enim soluta?",
  },
  {
    medium:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam praesentium suscipit a dolorum voluptatum minima repudiandae aliquam enim sit? Quod, similique dolor. Similique, modi quas animi deserunt magnam vel tenetur, eligendi atque quidem minus, sit autem dolorum omnis sapiente cumque provident et molestiae repellat. Assumenda possimus, est dolorum corrupti quis officiis nesciunt voluptatum aspernatur aut quos aliquid vero praesentium sed repellat commodi voluptatem modi! Ad itaque ea alias non aliquid ipsa asperiores voluptates beatae! Alias vero ab sunt inventore odit, at asperiores libero harum illo veritatis! Soluta recusandae possimus praesentium voluptatem illo natus, sunt nisi veritatis eligendi itaque voluptatibus molestias?",
  },
  {
    long:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta doloribus recusandae perspiciatis, ut, maxime consequuntur iste amet doloremque quo reprehenderit rem cupiditate? Deleniti corporis, adipisci error non ea nobis libero eius. Nemo magnam, quis dolore corporis excepturi saepe tempora est minus doloribus sequi dolores voluptate, provident iusto amet atque et, cumque neque incidunt. Porro dicta accusamus earum tempore, harum odit provident perspiciatis numquam! Molestiae incidunt, quidem aspernatur quasi eligendi impedit minus neque illum excepturi suscipit quas tenetur, animi ad commodi sunt. Quia cum repellendus est beatae! Aspernatur fugit laboriosam totam veritatis quibusdam maiores! Libero tempora tenetur animi quo molestiae accusantium corporis sint eligendi modi eaque assumenda voluptates sit, ab facere nihil labore incidunt dolor porro odit unde architecto aliquam facilis fugit. Possimus debitis neque aperiam incidunt aliquam ducimus. Veniam deleniti accusantium doloribus non sed quibusdam voluptatibus eveniet perspiciatis fugiat illo, animi cumque ratione repellat expedita distinctio sunt dolorem natus ea?",
  },
];

const output = document.querySelector(".output");
const lorem = texts[1].medium.split("");
//console.log(lorem) to jest prawidłowy tekst
for (let el of lorem) {
  const span = document.createElement("span");
  span.classList.add("letter");
  span.innerText = el;
  loremDiv.appendChild(span);
  spans = document.querySelectorAll(".letter");
}

userInput.addEventListener("input", function () {
  userInput.classList.remove('error')
  if(count === 0){
    startingTime = performance.now();
  }
  let userLetters = userInput.value.split("");
  if (userLetters[count] === spans[count].innerText) {
    spans[count].style.color = "green";
  } else {
    spans[count].style.color = "red";
    mist++;
  }
  count++;
  mistakes.textContent = mist;

});

userInput.addEventListener("keydown", preventBackspace);

function preventBackspace(e) {
  if (e.key == "Backspace") {
    e.preventDefault();
  }
}

function endGame(e) {
  if(count > 0) {
  e.preventDefault();
  //measureTime();
  showStats();
  userInput.value = "";
  userInput.style.display = "none";
  end.style.display = "none";
  stats.style.display = "block";
  setTimeout(function () {
    stats.classList.add("show");
  }, 400);
} else {
  userInput.classList.add('error')
}
}

function showStats() {
  numOfMistakes.innerText = mist;
  time.innerText =((performance.now() - startingTime) / 1000).toFixed(1);
  console.log(performance.now())
}

function measureTime() {
  elapsedTime = (startingTime - endingTime) / 1000;
  //return elapsedTime;
}

end.addEventListener("click", endGame);

const introBtns = document.querySelectorAll('.introduction__btns > button');

introBtns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    const loremLength = e.target.getAttribute('id');
    startGame(loremLength);
    
  })
})

function startGame(length) {
  intro.style.display = "none";
  loremCon.style.display = "block";
  setInterval(function() {
    loremCon.style.opacity = 1;
  }, 400)
}