var randomNumber1= Math.round((Math.random()*5));
var randomNumber2= Math.round((Math.random()*5));
var images = new Array ("images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png");

document.querySelector(".img1").setAttribute("src",images[randomNumber1]);
document.querySelector(".img2").setAttribute("src",images[randomNumber2]);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 Wins!";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player 2 Wins!";
}else if(randomNumber1=randomNumber2){
    document.querySelector("h1").textContent="Draw!";
}




