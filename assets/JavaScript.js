// const btns = document.querySelectorAll(".btn");
// const msg = document.querySelector(".msg");
// const popUpContainer = document.querySelector(".popUpContainer");
// const resetBtn = document.querySelector(".resetBtn");
// const newGameBtn = document.querySelector(".newGameBtn");
// let turnO = true;

// const enabledBtns = ()=> {
//     btns.forEach((btn) => {
//         btn.disabled = false;
//         btn.innerText = "";
//     })
// }

// const resetGame = ()=> {
//     popUpContainer.classList.add("hide");
//     turnO = true;
//     enabledBtns();
// }

// resetBtn.addEventListener("click", resetGame);
// newGameBtn.addEventListener("click", resetGame);

// const disabledBtns = ()=> {
//     btns.forEach((btn) => {
//         btn.disabled = true;
//     });
// }

// const showWinner = (val1)=> {
//     msg.innerText = `Congratulations ! Winner is ${val1}`;
//     popUpContainer.classList.remove("hide");
//     disabledBtns();
// };

// const checkWinner = ()=> {
//     for(pattern of winPattern){
//         let val1 = btns[pattern[0]].innerText;
//         let val2 = btns[pattern[1]].innerText;
//         let val3 = btns[pattern[2]].innerText;

//         if(val1 != "" && val2!="" && val3!=""){
//             if(val1===val2 && val2===val3){
//                 showWinner(val1);
//             }
//         }
//     }
// };

// btns.forEach((btn) => {
//     btn.addEventListener("click", ()=> {
//         turnO ? (
//             btn.innerText = "O",
//             turnO = false
//         )
//         :
//         (
//             btn.innerText = "X",
//             turnO = true
//         )
//         btn.disabled = true;
//         checkWinner();
//     });
// });
// const winPattern = [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8]
// ];



let btns = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newGameBtn = document.querySelector("#new-btn");
let turnO = true;

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7], 
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        turnO ? (
            btn.innerText = "O",
            turnO = false
        )
        : 
        (
            btn.innerText = "X",
            turnO = true
        )

        btn.disabled = true;
        checkWinner();
    });
});

const resetGame = ()=> {
    turnO = true;
    enabledBtns();
    msgContainer.classList.add("hide");
}

const disabledBtns = () => {
    for(let btn of btns){
        btn.disabled = true;
    }
};

const enabledBtns = () => {
    for(let btn of btns){
        btn.disabled = false;
        btn.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBtns();
};

const checkWinner = () => {
    for(pattern of winPatterns){
        let val1 = btns[pattern[0]].innerText;
        let val2 = btns[pattern[1]].innerText;
        let val3 = btns[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                showWinner(val1);
            }
        }
        
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
