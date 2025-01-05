let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; //playerx, player0

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [2, 4, 6],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "x";
      turn0 = true;
    }
    box.disabled = true;

    chekwinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showwinner = (winner) => {
  // msg.classList.remove("hide");

  msg.innerText = "congratulation, winner is " + winner;
  console.log(winner);
  // msg.classList.add("hide");

  msgcontainer.classList.remove("hide");
  disableBoxes();
};

const chekwinner = () => {
  for (let pattern of winpatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showwinner(pos1Val);
      }
    }
  }
};

newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
