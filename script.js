const canvas1 = document.querySelector("canvas");
const canvas2 = canvas1.nextElementSibling;
const canvas3 = canvas2.nextElementSibling;
const canvas4 = canvas3.nextElementSibling;
const canvas5 = canvas4.nextElementSibling;
const canvas6 = canvas5.nextElementSibling;
const button = document.querySelector("button");
const para = button.nextElementSibling;
const dice1 = document.querySelector(".dice1");
const dice2 = dice1.nextElementSibling;
let scores = document.querySelector(".points");

let ctx1 = canvas1.getContext("2d");
let ctx2 = canvas2.getContext("2d");
let ctx3 = canvas3.getContext("2d");
let ctx4 = canvas4.getContext("2d");
let ctx5 = canvas5.getContext("2d");
let ctx6 = canvas6.getContext("2d");

function circle(ctx,x,y) {
    ctx.translate(x,y);
    ctx.beginPath();
    ctx.arc(100,100,19,0,2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
}

circle(ctx1,0,0);

circle(ctx2,-50,50);
circle(ctx2,+100,-100);

circle(ctx3,-50,50);
circle(ctx3,+100,-100);
circle(ctx3,-50,50);

circle(ctx4,-50,50);
circle(ctx4,+100,-100);
circle(ctx4,-100,0);
circle(ctx4,100,100);

circle(ctx5,0,0);
circle(ctx5,-50,50);
circle(ctx5,+100,-100);
circle(ctx5,-100,0);
circle(ctx5,100,100);

circle(ctx6,-50,50);
circle(ctx6,+100,-100);
circle(ctx6,-100,0);
circle(ctx6,100,100);
circle(ctx6,0,-50);
circle(ctx6,-100,0);

const cloneCanvas1 = canvas1.cloneNode(true);
const cloneCanvas2 = canvas2.cloneNode(true);
const cloneCanvas3 = canvas3.cloneNode(true);
const cloneCanvas4 = canvas4.cloneNode(true);
const cloneCanvas5 = canvas5.cloneNode(true);
const cloneCanvas6 = canvas6.cloneNode(true);

let copyctx1 = cloneCanvas1.getContext("2d");
let copyctx2 = cloneCanvas2.getContext("2d");
let copyctx3 = cloneCanvas3.getContext("2d");
let copyctx4 = cloneCanvas4.getContext("2d");
let copyctx5 = cloneCanvas5.getContext("2d");
let copyctx6 = cloneCanvas6.getContext("2d");

copyctx1.drawImage(canvas1,0,0);
copyctx2.drawImage(canvas2,0,0);
copyctx3.drawImage(canvas3,0,0);
copyctx4.drawImage(canvas4,0,0);
copyctx5.drawImage(canvas5,0,0);
copyctx6.drawImage(canvas6,0,0);

let dices = [canvas1, canvas2, canvas3,canvas4, canvas5, canvas6];
let copyDices = [cloneCanvas1,cloneCanvas2,cloneCanvas3,cloneCanvas4,cloneCanvas5,cloneCanvas6];

let i = 5 ,j = 5, playerNumber1 = 0, playerNumber2 = 0;
dice1.appendChild(dices[i]);
dice2.appendChild(copyDices[j]);
dices[i].style.display = "inline";
copyDices[j].style.display = "inline";

button.addEventListener("click", function (){
    button.style.boxShadow = "5px 5px 15px rgb(89, 83, 255)";
    
    setTimeout(() => {
        button.style.boxShadow = "";
    }, 120);
    dice1.removeChild(dices[i]);
    dice2.removeChild(copyDices[j]);
    dices[i].style.display = "none";
    copyDices[j].style.display = "none";
    i = Math.floor(Math.random()*6);
    j = Math.floor(Math.random()*6);
    dices[i].style.display = "inline";
    copyDices[j].style.display = "inline";

    dice1.appendChild(dices[i]);
    dice2.appendChild(copyDices[j]);

    if (i == j) {
        para.innerHTML = "It's Draw";
    }else if (i < j) {
        playerNumber2++;
        scores.innerHTML = `Player 1 : <span>${playerNumber1}</span> Player 2 : <span>${playerNumber2}</span>`;
        para.innerHTML = "Player 2 is winner.";
    }else{
        playerNumber1++;
        scores.innerHTML = `Player 1 : <span>${playerNumber1}</span> Player 2 : <span>${playerNumber2}</span>`;
        para.innerHTML = "Player 1 is winner."
    }
});


