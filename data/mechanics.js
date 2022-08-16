// const r1c1 = document.getElementById("r1c1");
// const r1c2 = document.getElementById("r1c2");
// const r1c3 = document.getElementById("r1c3");
// const r2c1 = document.getElementById("r2c1");
// const r2c2 = document.getElementById("r2c2");
// const r2c3 = document.getElementById("r2c3");
// const r3c1 = document.getElementById("r3c1");
// const r3c2 = document.getElementById("r3c2");
// const r3c3 = document.getElementById("r3c3");

// -------------------- button timer (2.5s) ----------------
// function lockoutButton(button) {
// 	let oldValue = button.value;

// 	button.setAttribute('disabled', true);
// 	setTimeout(function(){
// 		button.value = oldValue;
// 		button.removeAttribute('disabled');
// 		button.style.borderColor = "white";
// 	}, 3000);
// };

// 
// ============================================
//  code testing
// ============================================

// r1c1.addEventListener("click", function(){
//     if(warrior.talentpoint >=1){
//         warrior.useTalentPointChoice1();
//         console.log(`Stats = ATK: ${warrior.Attack}, DEF: ${warrior.Defense}, SPD: ${warrior.Speed}`);
//     } else {
//         console.log(`You have ${warrior.talentpoint} talent points, you need 1 for this talent.`);
//     }
// }); 
// r1c2.addEventListener("click", function(){
//     if(warrior.talentpoint >=1){
//         warrior.useTalentPointChoice2();
//         console.log(`Stats = ATK: ${warrior.Attack}, DEF: ${warrior.Defense}, SPD: ${warrior.Speed}`);
//     } else {
//         console.log(`You have ${warrior.talentpoint} talent points, you need 1 for this talent.`);
//     }
// });
// r1c3.addEventListener("click", function(){
//     if(warrior.talentpoint >=1){
//         warrior.useTalentPointChoice3();
//         console.log(`Stats = ATK: ${warrior.Attack}, DEF: ${warrior.Defense}, SPD: ${warrior.Speed}`);
//     } else {
//         console.log(`You have ${warrior.talentpoint} talent points, you need 1 for this talent.`);
//     }
// });
// r2c1.addEventListener("click", function(){
//     if(warrior.talentpoint >=1){
//         warrior.useTalentPointChoice4();
//     } else {
//         console.log(`You have ${warrior.talentpoint} talent points, you need 1 TP for this talent.`);
//     }
// });
// r2c2.addEventListener("click", function(){
//     if(warrior.talentpoint >=1){
//         warrior.useTalentPointChoice5();
//     } else {
//         console.log(`You have ${warrior.talentpoint} talent points, you need 1 TP for this talent.`);
//     }
// });
// r2c3.addEventListener("click", function(){
//     if(warrior.talentpoint >=1){
//         warrior.useTalentPointChoice6();
//     } else {
//         console.log(`You have ${warrior.talentpoint} talent points, you need 1 TP for this talent.`);
//     }
// });
// // ======================================================

// r3c1.addEventListener("click", function(){
//     if(warrior.talentpoint >=1){
//         warrior.useTalentPointChoice7();
//         console.log(`Stats = HP: ${warrior.Health}, MP: ${warrior.Mana}, SP: ${warrior.Stamina}`);
//     } else {
//         console.log(`You have ${warrior.talentpoint} talent points, you need 1 TP for this talent.`);
//     }
// });
// r3c2.addEventListener("click", function(){
//     if(warrior.talentpoint >=1){
//         warrior.useTalentPointChoice8();
//         console.log(`Stats = HP: ${warrior.Health}, MP: ${warrior.Mana}, SP: ${warrior.Stamina}`);
//     } else {
//         console.log(`You have ${warrior.talentpoint} talent points, you need 1 TP for this talent.`);
//     }
// });
// r3c3.addEventListener("click", function(){
//     if(warrior.talentpoint >=1){
//         warrior.useTalentPointChoice8();
//         console.log(`Stats = HP: ${warrior.Health}, MP: ${warrior.Mana}, SP: ${warrior.Stamina}`);
//     } else {
//         console.log(`You have ${warrior.talentpoint} talent points, you need 1 TP for this talent.`);
//     }
// });

//===========================================
// use once talents tetsing
// =====================================

// console.log(warrior.Attack);
// warrior.useTalentPointChoice1();
// console.log(warrior.talentpoint);
// console.log(warrior.Attack);
// console.log(warrior.talentpoint);
// console.log(warrior.Stamina);
// console.log(warrior.Speed);
// warrior.useTalentPointChoice12();
// // console.log(warrior.talentpoint);
// console.log(warrior.abilities.active.name);
// warrior.beserkerMetamorphasisTalent();

//===========================================
// passive talent testing 
// =========================================
// warrior.useTalentPointChoice6();
// console.log(warrior.talentpoint);
// console.log(warrior.abilities.passive.name);

//===========================================
// passive talent testing 
// =========================================



// console.log(`You're level-${warrior.level}`);
// console.log(`You need ${warrior.requiredExp} EXP to level-up`);
// console.log(`You have ${warrior.currentExp} EXP`);
// console.log(`You have ${warrior.talentpoint} Talent Points`);
// console.log(`Stats = ATK: ${warrior.Attack}, DEF: ${warrior.Defense}, SPD: ${warrior.Speed}`);

// // warrior.useTalentPointChoice1();
// console.log(`Stats = ATK: ${warrior.Attack}, DEF: ${warrior.Defense}, SPD: ${warrior.Speed}`);


// warrior.gainExp();


// console.log(warrior.abilities.active.name);