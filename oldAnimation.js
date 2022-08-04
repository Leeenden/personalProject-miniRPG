// const widthSprite = 0;
// const heightSprite = 0;
// const frameWidthSprite = 32;
// const frameHeightSprite = 48;
// const xPosSprite =256;
// const yPosSprite = 128;
// const scaleSprite = 2;
// const fpsSprite = 10;
// const secondsToUpdateSprite = 1 * fpsSprite;
// let frameIndexSprite = 0;
// let countSprite = 0;

// let row = 0;
// --------------------- Image spritesheets ----------------------------------
// const Sprite = new Image();
// Sprite.src = "images/char.png";
// --------------------- State object Pet 1----------------------------------
// const StateSprite = {
//     statesSprite: {},
//     generateStatesSprite: function(nameSprite, startRow, startIndexSprite, endIndexSprite){
//         if (!this.statesSprite[nameSprite]) {
//             this.statesSprite[nameSprite] = {
//                 frameIndexSprite: startIndexSprite,
//                 row: startRow,
//                 startIndexSprite: startIndexSprite,
//                 endIndexSprite: endIndexSprite
//             };
//         }
//     },
//     getStateSprite: function(nameSprite){
//         if (this.statesSprite[nameSprite]){
//             return this.statesSprite[nameSprite];
//         }
//     }
// };

// ------------individual state generating for pet 1 --------------
// StateSprite.generateStatesSprite("idleDown", 0, 0, 3);
// StateSprite.generateStatesSprite("idleLeft", 1, 0, 3);
// StateSprite.generateStatesSprite("idleRight", 2, 0, 3);
// StateSprite.generateStatesSprite("idleUp", 3, 0, 3);

// --------------------- Animation Function - Pet 1 ----------------------------------
// function animateSprite(statesSprite){
//     c.drawImage(gameMap, -500 , -500);
//     c.drawImage(
//         Sprite,
//         statesSprite.frameIndexSprite * frameWidthSprite,
//         statesSprite.row * frameHeightSprite,
//         frameWidthSprite,
//         frameHeightSprite,
//         xPosSprite,
//         yPosSprite,
//         frameWidthSprite * scaleSprite,
//         frameHeightSprite * scaleSprite,
//     );
//     countSprite++;
//     if (countSprite > secondsToUpdateSprite) {
//         statesSprite.frameIndexSprite++;
//         countSprite = 0;
//     }
//     if (statesSprite.frameIndexSprite > statesSprite.endIndexSprite){
//         statesSprite.frameIndexSprite = statesSprite.startIndexSprite;
//     }
// }
// --------------------- Idle state Loop - Pet 1 ----------------------------------
// function down() {
//     c.clearRect(0,0,widthSprite,heightSprite);
//     animateSprite(StateSprite.getStateSprite("idleDown"));
//     requestAnimationFrame(down);
// };
// // --------------------- Sit state Loop - Pet 1  ----------------------------------
// function wLeft() {
//     c.clearRect(0, 0,widthSprite,heightSprite);
//     animateSprite(StateSprite.getStateSprite("walkLeft"));
//     requestAnimationFrame(wLeft);
// };
// // --------------------- Sit state Loop - Pet 1  ----------------------------------
// function wRight() {
//     c.clearRect(0,0,widthSprite,heightSprite);
//     animateSprite(StateSprite.getStateSprite("walkRight"));
//     requestAnimationFrame(wRight);
// };

// onload functionality
// gameMap.onload = () => {
//     // c.drawImage(gameMap, -500 , -500);
//     down();
// }

// --------------------- calling the ALL animaion functions ----------------------------------
// down();
// wLeft();
// wRight();
// sitSprite();
// sitPet2();
// sitPet3();
// lieDownSprite();
// lieDownPet2();
// lieDownPet3();


// const playAgain = document.getElementById("playAgain");
// playAgain.style.display = "none";

// playAgain.addEventListener('click', () => {
// 	window.location.reload()
// });