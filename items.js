// ######################## Animations- Pet 1 ########################

// ---------------------  constant variables Pet 1 --------------------------
// const canvasItem = document.querySelector(".canvasPet2");
// const contextItem = canvasItem.getContext("2d");
// const widthItem = canvasItem.width = 160;
// const heightItem = canvasItem.height = 96;
// const frameWidthItem = 16;
// const frameHeightItem = 16;
// const xPosItem = 32;
// const yPosItem = 64;
// const scaleItem = 1;
// const fpsItem = 10;
// const secondsToUpdateItem = 1 * fpsItem;
// let frameIndexItem = 0;
// let countItem = 0;

// let rowItem = 0;
// // --------------------- Placing the canvas elements  --------------------------
// canvasItem.style.marginTop = screenLeft.innerHeight / 2 - heightItem / 2 + "px";
// // --------------------- Image spritesheets ----------------------------------
// const goldKey = new Image();
// goldKey.src = "images/Key-Sheet.png";

// const goldCoin = new Image();
// goldCoin.src = "images/Coin-Sheet.png";
// // --------------------- State object Pet 1----------------------------------
// const StateItem = {
//     statesItem: {},
//     generateStatesItem: function(nameItem, startRowItem, startIndexItem, endIndexItem){
//         if (!this.statesItem[nameItem]) {
//             this.statesItem[nameItem] = {
//                 frameIndexItem: startIndexItem,
//                 rowItem: startRowItem,
//                 startIndexItem: startIndexItem,
//                 endIndexItem: endIndexItem
//             };
//         }
//     },
//     getStateItem: function(nameItem){
//         if (this.statesItem[nameItem]){
//             return this.statesItem[nameItem];
//         }
//     }
// };
// // ------------individual state generating for pet 1 --------------
// StateItem.generateStatesItem("item", 0, 0, 7);

// // --------------------- Animation Function - Pet 1 ----------------------------------
// function animateItem(statesItem){
//     contextItem.drawImage(
//         goldKey,
//         statesItem.frameIndexItem * frameWidthItem,
//         statesItem.rowItem * frameHeightItem,
//         frameWidthItem,
//         frameHeightItem,
//         xPosItem,
//         yPosItem,
//         frameWidthItem * scaleItem,
//         frameHeightItem * scaleItem,
//     );
//     countItem++;
//     if (countItem > secondsToUpdateItem) {
//         statesItem.frameIndexItem++;
//         countItem = 0;
//     }
//     if (statesItem.frameIndexItem > statesItem.endIndexItem){
//         statesItem.frameIndexItem = statesItem.startIndexItem;
//     }
// }
// function keyItem() {
//     contextItem.clearRect(0,0,widthItem,heightItem);
//     animateItem(StateItem.getStateItem("item"));
//     requestAnimationFrame(keyItem);
// };
// function animateItem(statesItem){
//     contextItem.drawImage(
//         goldCoin,
//         statesItem.frameIndexItem * frameWidthItem,
//         statesItem.rowItem * frameHeightItem,
//         frameWidthItem,
//         frameHeightItem,
//         xPosItem,
//         yPosItem,
//         frameWidthItem * scaleItem,
//         frameHeightItem * scaleItem,
//     );
//     countItem++;
//     if (countItem > secondsToUpdateItem) {
//         statesItem.frameIndexItem++;
//         countItem = 0;
//     }
//     if (statesItem.frameIndexItem > statesItem.endIndexItem){
//         statesItem.frameIndexItem = statesItem.startIndexItem;
//     }
// }
// function coinItem() {
//     contextItem.clearRect(0,0,widthItem,heightItem);
//     animateItem(StateItem.getStateItem("item"));
//     requestAnimationFrame(coinItem);
// };

// keyItem();
// coinItem();