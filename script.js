const userInput = document.querySelector("input");
const loremDiv = document.querySelector(".lorem");
const mistakes = document.querySelector(".mistake-count");
const outLet = [];
let mist = 0;
let count = 0;
let spans = [];
mistakes.textContent = mist;

const texts = [
  {
    textLong:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat laborum illum sint reprehenderit dolor voluptas rerum veniam corporis voluptates vel earum corrupti ducimus quas, maxime, autem cumque? Fugit est nesciunt, odit quo, rem sapiente a maiores quia itaque laudantium facere voluptate accusamus ratione quas eius esse expedita veniam, voluptatem magni totam consequatur. Aliquid ab eum accusamus, delectus provident quis beatae officia ad omnis repudiandae fugiat temporibus iste deleniti exercitationem consectetur illum reiciendis esse veritatis! Quae aliquam animi veniam beatae, eius explicabo maiores facilis soluta voluptatum dolorum tempora consequatur, nulla culpa iure nostrum, eos placeat odit! Sunt ut nesciunt, veritatis, odit rem mollitia nobis error dolorem, quibusdam possimus saepe. Repudiandae deserunt enim nihil! Impedit, ipsa magnam deserunt a quis voluptatibus, vel maiores fugit, eos soluta sint odit illo delectus distinctio vero accusamus eaque tempore consequatur nihil beatae! Nihil, ratione officia possimus sequi minima dolorem odio sed! Labore repellendus, exercitationem corporis maiores atque cumque aliquam tempora libero necessitatibus consequuntur, assumenda inventore cupiditate porro earum delectus vel! Dignissimos consequuntur dolor sunt dolore, consectetur pariatur praesentium libero veniam nesciunt, distinctio illum. Eos placeat numquam non odit doloribus velit? Expedita sit mollitia minus quae fugit? Distinctio tempore possimus voluptates ex aliquid itaque, voluptate vero, consectetur ipsa dolorem perspiciatis rerum nisi nihil dolore placeat accusantium vel a? Repudiandae amet veritatis ipsum, ipsam cum reprehenderit ea, quo perferendis saepe voluptatem dolorum dicta accusantium nemo rem nam dolore ratione obcaecati, assumenda et vero ex optio nihil error? Debitis nostrum quas harum. Velit, sint! Porro possimus doloribus nulla, natus facere excepturi! Corrupti ipsa, sit veritatis placeat beatae aliquid eius numquam officiis fugit hic ab, minus assumenda esse dolor nam dolorem, ipsam quaerat est dolores quos repellendus adipisci sunt ullam. Excepturi libero illo saepe dolor officia hic! Deserunt mollitia eaque iusto omnis at, ratione explicabo exercitationem sint similique! Maxime alias, minima praesentium velit rem voluptates accusantium distinctio explicabo, facere itaque architecto cupiditate enim aspernatur nulla ad eaque quo? Possimus inventore dolor fuga, illo cumque vitae fugit doloribus exercitationem quaerat tenetur voluptatibus commodi rerum earum recusandae mollitia doloremque totam consectetur quibusdam consequatur tempora, veniam repellat eligendi natus architecto! Dolores laboriosam officia tenetur veniam magnam velit in inventore deserunt quos culpa nostrum voluptatibus excepturi aut id vero explicabo, asperiores consequuntur architecto at necessitatibus beatae rem? Accusantium necessitatibus quo repellat! Illo, repudiandae perferendis magnam tenetur suscipit ipsa cupiditate excepturi sequi quasi modi. Quibusdam dolores cum atque placeat alias accusamus ex architecto tempore?",
  },
  {
    textShort:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur deserunt non in, recusandae ad nulla officia laudantium harum minima adipisci corrupti dolore exercitationem doloribus aliquam. Minima alias rem enim soluta?",
  },
];


const output = document.querySelector(".output");
const lorem = texts[1].textShort.split("");
//console.log(lorem) to jest prawidłowy tekst
for (let el of lorem) {
  const span = document.createElement("span");
  span.innerText = el;
  loremDiv.appendChild(span);
  spans = document.querySelectorAll("span");
}

userInput.addEventListener("input", function () {
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
