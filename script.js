let story = document.getElementById("story-text");
let gameContainer = document.getElementById("game-container");
let buttons = document.getElementById("button-container");

function scene1() {
	story.innerHTML = "All a sudden and mysterious magical storm strikes the kingdom, creating a rift that sends Peach into an unknown world—one that even the keenest minds of Toads and the wise Yoshi can't identify.";   

	buttons.innerHTML =  "<button onclick = 'scene2()' >Find her at the Realm of Forgotten Dreams</button><button onclick = 'scene3()'  >Fight browser</button>";	

	gameContainer.style.backgroundImage = "url('/res/5968b581-2a83-4580-b93d-05b8dd9584b1/IMG_0029.jpeg')";
 }   

function scene2() { 
	story.innerHTML = "The two worlds—Peach's and Mario's—begin to intersect as Mario nears the boundary of the Forgotten Realm.";   

	buttons.innerHTML = "<button onclick = 'scene3()'    >Stop the dark force from spreading</button><button onclick = 'gameOver()'  >Get into browser's cave </button>";  

	gameContainer.style.backgroundImage = "url('/res/5968b581-2a83-4580-b93d-05b8dd9584b1/IMG_0030.jpeg'   )";
} 

function scene3() { 
	story.innerHTML = "Browser is now in furious how to stop him?";   

	buttons.innerHTML = "<button onclick = 'win()'    >use peaches newfound power</button><button onclick = 'gameOver()'   >attack him</button>";   

	gameContainer.style.backgroundImage = "url('/res/5968b581-2a83-4580-b93d-05b8dd9584b1/IMG_0031.jpeg'   )";
}

function gameOver() {
	story.innerHTML = "You have been trapped in this world forever GAME OVER!";  

	buttons.innerHTML = "<button onclick = 'scene1()'    >Try again</button>";  

	gameContainer.style.backgroundImage = "url('/res/5968b581-2a83-4580-b93d-05b8dd9584b1/IMG_0033.jpeg'   )";
} 

function win() {
	story.innerHTML = "Two of you have defeated browser and got back to peaches castle YOU WIN!";   

	buttons.innerHTML="<button onclick = 'scene1()'    >Play again</button>";   

	gameContainer.style.backgroundImage = "url('/res/5968b581-2a83-4580-b93d-05b8dd9584b1/IMG_0035.jpeg'  )";
}
 