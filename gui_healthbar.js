// --------------------- hungerBar class-----------------------------------
// class HealthBar {
//     constructor(x, y, w, h, maxHealth, color){
//         this.x = x;
//         this.y = y;
//         this.w = w;
//         this.h = h;
//         this.maxHealth = maxHealth;
//         this.maxWidth = w;
//         this.health = maxHealth;
//         this.color = color;
//     }

//     show(context) {
//         context.lineWidth = 3;
//         context.strokeStyle = "white";
//         context.fillStyle = this.color;
//         context.fillRect(this.x, this.y, this.w, this.h);
//         context.strokeRect(this.x, this.y, this.maxWidth, this.h);

//     }
//     updateHunger(val){
//         if(val >= 0){
//             this.health = val;
//             this.w = (this.health / this.maxHealth * this.maxWidth);
//         }
//     }
// 	updateHappiness(val){
//         if(val >= 0){
//             this.health = val;
//             this.w = (this.health / this.maxHealth * this.maxWidth);
//         }
//     }
// 	updateThirst(val){
//         if(val >= 0){
//             this.health = val;
//             this.w = (this.health / this.maxHealth * this.maxWidth);
//         }
//     }
// };

// // --------------------- hungerBar canvas -----------------------------------
// const canvas1 = document.querySelector(".canvas1");
// const context1 = canvas1.getContext("2d");
// const width1 = canvas1.width = 200;
// const height1 = canvas1.height = 35;

// canvas1.style.marginTop = screenTop.innerHeight / 2 - height1 / 2 + "px";

// let hunger = 100;
// const healthBarWidth1 = 200;
// const healthBarHeight1 = 30;
// const x1 = width1 / 2 - healthBarWidth1 / 2;
// const y1 = height1 / 2 - healthBarHeight1 / 2;

// // --------------------- hapinessBar canvas -----------------------------------
// const canvas2 = document.querySelector(".canvas2");
// const context2 = canvas2.getContext("2d");
// const width2 = canvas2.width = 200;
// const height2 = canvas2.height = 35;

// canvas2.style.marginTop = screenTop.innerHeight / 2 - height2 / 2 + "px";

// let happiness = 100;
// const healthBarWidth2 = 200;
// const healthBarHeight2 = 30;
// const x2 = width2 / 2 - healthBarWidth2 / 2;
// const y2 = height2 / 2 - healthBarHeight2 / 2;

// // --------------------- thirstBar canvas -----------------------------------
// const canvas3 = document.querySelector(".canvas3");
// const context3 = canvas3.getContext("2d");
// const width3 = canvas3.width = 200;
// const height3 = canvas3.height = 35;

// canvas3.style.marginTop = screenTop.innerHeight / 2 - height3 / 2 + "px";

// let thirst = 100;
// const healthBarWidth3 = 200;
// const healthBarHeight3 = 30;
// const x3 = width3 / 2 - healthBarWidth3 / 2;
// const y3 = height3 / 2 - healthBarHeight3 / 2;

// // --------------------- hunger, thirst and happiness objects -----------------------------------
// const hungerBar = new HealthBar(x1, y1, healthBarWidth1, healthBarHeight1, hunger, "green");
// const happinessBar = new HealthBar(x2, y2, healthBarWidth2, healthBarHeight2, happiness, "red");
// const thirstBar = new HealthBar(x3, y3, healthBarWidth3, healthBarHeight3, thirst, "blue");

// // --------------------- All bars animations -----------------------------------
// const frameHunger = function() {
// 	context1.clearRect(0, 0, width1, height1);
// 	hungerBar.show(context1);
// 	requestAnimationFrame(frameHunger);
// }
// const frameHappiness = function() {
// 	context2.clearRect(0, 0, width2, height2);
// 	happinessBar.show(context2);
// 	requestAnimationFrame(frameHappiness);
// }
// const frameThirst = function() {
// 	context3.clearRect(0, 0, width3, height3);
// 	thirstBar.show(context3);
// 	requestAnimationFrame(frameThirst);
// }
// // -------------- death mechanism functions-------------------
// let hungerDeath = 0;
// let happinessDeath = 0;
// let thirstDeath = 0;

// // -------------- Timer mechanism functions---------------------
// function callHungerTimer() {
// 	const hungerTimer = setInterval(function(){
// 		if(hunger <= 0){
// 			hungerDeath = 1;
// 			hunger = 0;
// 			hungerBar.updateHunger(hunger);
// 			statusBanner.textContent = "oh no! It's starving to death!";
// 			if (hungerDeath && thirstDeath && happinessDeath === 1){
// 				statusBanner.textContent = "oh no!! It looks like you pet has died.";
// 				canvas1.style.display = "none";
// 				canvas2.style.display = "none";
// 				canvas3.style.display = "none";
// 				foodPet.style.display = "none";
// 				drinkPet.style.display = "none";
// 				playPet.style.display = "none";
// 				playAgain.style.display = "";
// 			} else{
// 				canvas1.style.display = "";
// 				canvas2.style.display = "";
// 				canvas3.style.display = "";
// 			}
// 			clearInterval(hungerTimer);
// 			return;
// 		} else {
// 			hungerBar.updateHunger(hunger);
// 		}
// 		hunger -= 5;
// 	}, 3000);
// };



// // ------------------------ hiding all timers until pet selections ---------
// function callHappinessTimer() {
// 	const happinessTimer = setInterval(function(){
// 		if(happiness <= 0){
// 			happinessDeath = 1;
// 			happiness = 0;
// 			happinessBar.updateHappiness(happiness);
// 			statusBanner.textContent = "oh no! It's slowly dying of unhappiness!";
// 			if (hungerDeath && thirstDeath && happinessDeath === 1){
// 				statusBanner.textContent = "oh no!! It looks like you pet has died.";
// 				canvas1.style.display = "none";
// 				canvas2.style.display = "none";
// 				canvas3.style.display = "none";
// 				foodPet.style.display = "none";
// 				drinkPet.style.display = "none";
// 				playPet.style.display = "none";
// 				playAgain.style.display = "";
// 			} else{
// 				canvas1.style.display = "";
// 				canvas2.style.display = "";
// 				canvas3.style.display = "";
// 			}
// 			clearInterval(hungerTimer);
// 			return;
// 		} else {
// 			happinessBar.updateHappiness(happiness);
// 		}
// 		happiness -= 5;
// 	}, 5000);
// };

// function callThirstTimer() {

//     const thirstTimer = setInterval(function(){
// 		if(thirst <= 0){
// 			thirstDeath = 1;
// 			thirst = 0;
// 			thirstBar.updateThirst(thirst);
// 			statusBanner.textContent = "oh no! It dying of thirst!";
// 			if (hungerDeath && thirstDeath && happinessDeath === 1){
// 				statusBanner.textContent = "oh no!! It looks like you pet has died.";
// 				canvas1.style.display = "none";
// 				canvas2.style.display = "none";
// 				canvas3.style.display = "none";
// 				foodPet.style.display = "none";
// 				drinkPet.style.display = "none";
// 				playPet.style.display = "none";
// 				playAgain.style.display = "";
// 			} else{
// 				canvas1.style.display = "";
// 				canvas2.style.display = "";
// 				canvas3.style.display = "";
// 			}
// 			clearInterval(hungerTimer);
// 			return;	
// 		} else {
// 			thirstBar.updateThirst(thirst);
// 		}
// 		thirst -= 5;
// 	}, 3000);
// };

// // --------------------- roll dice buttons / feed dirnk / play buttons -----------------------------------

// const foodPet = document.getElementById("foodPet");
// const drinkPet = document.getElementById("drinkPet");
// const playPet = document.getElementById("playPet");
// const statusBanner = document.getElementById("status");


// foodPet.addEventListener('click', function(){
// 	let currentRoll = Math.ceil(Math.random() * 6);

// 	if (currentRoll == 1) {
// 		lossAudio.play();
// 		statusBanner.textContent = "oh no! the food seemed off and it threw it back up! -10 Hunger!";

// 		hunger -= 10;

// 	} else if (currentRoll == 2) {
// 		statusBanner.textContent = "Just some dry pet food! +5 Hunger";

// 		hunger += 5;

// 	} else if (currentRoll == 3) {
// 		statusBanner.textContent = "Vegetables, Yuck! +- 0 Hunger";

// 	} else if (currentRoll == 4) {
// 		statusBanner.textContent = "Wet pet food! +10 Hunger";

// 		hunger += 10;

// 	} else if (currentRoll == 5) {
// 		statusBanner.textContent = "Whatever you fed it, It didn't like that! -5 Hunger";

// 		hunger -= 5;

// 	} else if (currentRoll == 6) {
// 		statusBanner.textContent = "It's favourite, Fresh Fish! +20 Hunger";

// 		hunger += 20;
// 	}
// 	hungerBar.updateHunger(hunger);
// 	lockoutButton(foodPet);
// });

// drinkPet.addEventListener('click', function(){
// 	let currentRoll = Math.ceil(Math.random() * 6);

// 	if (currentRoll == 1) {
// 		lossAudio.play();
// 		statusBanner.textContent = "Oh no! It looks like the milk had fermented and turned alcoholic! -15 Thirst";

// 		thirst -= 10;
		
// 	} else if (currentRoll == 2) {
// 		statusBanner.textContent = "You gave them a small bowl of milk! +5 thirst";

// 		thirst += 5;

// 	} else if (currentRoll == 3) {
// 		statusBanner.textContent = "They had a little sip! +5 Thirst";

// 		thirst += 5;
		
// 	} else if (currentRoll == 4) {
// 		statusBanner.textContent = "You poured a bowl of tuna juice! +10 Thirst";

// 		thirst += 10;

// 	} else if (currentRoll == 5) {
// 		statusBanner.textContent = "You were out of dirnks to give! -0 Thirst";

// 		thirst += 0;

// 	} else if (currentRoll == 6) {
// 		statusBanner.textContent = "You poured a bowl of cold fresh water! +20 Thirst";

// 		thirst += 20;

// 	}
// 	thirstBar.updateThirst(thirst);
// 	lockoutButton(drinkPet);
// });

// playPet.addEventListener('click', function(){
// 	let currentRoll = Math.ceil(Math.random() * 6);
	
// 	if (currentRoll == 1) {
// 		lossAudio.play();
// 		statusBanner.textContent = "A dog chased you!! -15 Happiness";

// 		happiness -= 15;

// 	} else if (currentRoll == 2) {
// 		statusBanner.textContent = "Fetch! +5 Happiness";

// 		happiness += 5;

// 	} else if (currentRoll == 3) {
// 		statusBanner.textContent = "They didn't want to play! +-0 Happiness";

// 		happiness += 0;
		
// 	} else if (currentRoll == 4) {
// 		statusBanner.textContent = "They went for a nap on your lap! +15 Happiness";
// 		if(myChoice ===1){
// 			lieDownPet1();
// 		} else if (myChoice == 2){
// 			lieDownPet2();
// 		} else if (myChoice == 3){
// 			lieDownPet2();
// 		}

// 		happiness += 10;

// 	} else if (currentRoll == 5) {
// 		statusBanner.textContent = "Caught a bird, but you tell them off! -5 Happiness";

// 		happiness += 5;

// 	} else if (currentRoll == 6) {
// 		statusBanner.textContent = "Sat and Groomed themself! +10 Happiness";
// 		if(myChoice ===1){
// 			sitPet1();
// 		} else if (myChoice == 2){
// 			sitPet2();
// 		} else if (myChoice == 3){
// 			sitPet2();
// 		}
// 		happiness -= 5;
// 	}
// 	happinessBar.updateHappiness(happiness);
// 	lockoutButton(playPet);
// });
// --------------------- death/game over sequence running --------------------------------

// --------------------- healthbar functiuons running -------------------------------