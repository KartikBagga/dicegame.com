var randomNumber1 = Math.floor(Math.random()* 6) + 1;

var randomDiceimage = "dice" + randomNumber1 + ".png";

var randomImagesource = "images/" + randomDiceimage;

var Image1 = document.querySelectorAll("img")[0];

Image1.setAttribute("src", randomImagesource);

// javascript code for dice2 starts down. ---->>>

var randomNumber2 = Math.floor(Math.random()* 6) + 1;

var randomImagesource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src" , randomImagesource2);

if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!!"

} 
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 2 Wins!!"
}
else{
    document.querySelector("h1").innerHTML="🙁Draw!!!"
}

