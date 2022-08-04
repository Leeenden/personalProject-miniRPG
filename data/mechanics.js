// const r1c1 = document.getElementById("r1c1");
// const r1c2 = document.getElementById("r1c2");
// const r1c3 = document.getElementById("r1c3");
// const r2c1 = document.getElementById("r2c1");
// const r2c2 = document.getElementById("r2c2");
// const r2c3 = document.getElementById("r2c3");
// const r3c1 = document.getElementById("r3c1");
// const r3c2 = document.getElementById("r3c2");
// const r3c3 = document.getElementById("r3c3");

// const screen = document.getElementById("screen");
// const screenBottom = document.getElementById("screenBottom");
// const screenMiddle = document.getElementById("screenMiddle");
// const screenCenter = document.getElementById("screenCenter");
// const leftScreen = document.getElementById("screenLeft");
// const screenRight = document.getElementById("screenRight");
// const screenRightMenu = document.getElementById("screenRightMenu");

// // document.addEventListener("keypress", (e) => {
//     if (e.key === "m" || e.key === "M") {
//         leftScreen.style.width = "60%"
//         screenRightMenu.style.display ="";
// 	};
// });
// document.addEventListener("keyup", (e) => {
// 	leftScreen.style.width = "100%";
//     screenRightMenu.style.display ="none";
	
// });

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

// class Character {
//     constructor(Health, Stamina, Mana, Attack, Defense, Speed){
//         this.Health = Health,
//         this.Stamina = Stamina,
//         this.Mana = Mana,
//         this.Attack = Attack,
//         this.Defense = Defense,
//         this.Speed = Speed,

//         // pre-define starting stats
//         this.level = 1,
//         this.requiredExp = 10,
//         this.currentExp = 0,
        
//         this.talentpoint = 0,
//         this.moves = {
//             basicATK: 10,
//             strongATK: 25
//         },
//         this.abilities = {}
        
//     }
//     gainExp(){
//         setInterval(() => {
//             this.currentExp += 1;
//             console.log(`${this.currentExp} EXP`);
//             this.levelUp();
//         }, 1000);
//     }
//     levelUp(){
//         if(this.currentExp === this.requiredExp){
//             this.level += 1;
//             this.talentpoint += 1;
//             console.log("LEVEL UP");
//             console.log(`You are now level-${this.level}`);
//             console.log(`You earned 1 Talent point. You now have ${this.talentpoint}`);
//             this.requiredExp += this.level*5;
//             this.currentExp = 0;
//         }
//     }
    
//     markOfTheSavage(){
//         this.Attack +=10;
//     }
//     markOfTheTitan(){
//         this.Defense +=10;
//     }
//     markOfTheRogue(){
//         this.Speed +=10;
//     }
//     useTalentPointChoice1(){
//         console.log("You used a talent point");
//         this.talentpoint -= 1;
//         console.log("You chose mark of the Savage");
//         this.markOfTheSavage();
//     }
//     useTalentPointChoice2(){
//         console.log("You used a talent point");
//         this.talentpoint -= 1;
//         console.log("You chose mark of the titan");
//         this.markOfTheTitan();
//     }
//     useTalentPointChoice3(){
//         console.log("You used a talent point");
//         this.talentpoint -= 1;
//         console.log("You chose mark of the rogue");
//         this.markOfTheRogue();
//     }
//     useTalentPointChoice4(){
//         let shamansBlessing = setInterval(()=>{
//             this.Health += 5;
//             console.log(`You gained 5 Health, you have ${this.Health} Health`);
//         }, 5000);

//         console.log("You used a talent point");
//         this.talentpoint -= 1;
//         console.log("You chose Blessing of the Shaman");
//         console.log("Passive ability activated.")
//         this.abilities.passive = {name: "shamansBlessing", action: shamansBlessing };
//     }
//     useTalentPointChoice5(){
//         let wizardsBlessing = setInterval(()=>{
//             this.Mana += 5;
//             console.log(`You gained 5 Mana. You have ${this.Mana} Mana`);
//         }, 5000)
//         console.log("You used a talent point");
//         this.talentpoint -= 1;
//         console.log("You chose Blessing of the Wizard");
//         console.log("Passive ability activated.")
        
//         this.abilities.passive = {name: "wizardsBlessing", action: wizardsBlessing };
//     }
//     useTalentPointChoice6(){
//         let warriorsBlessing = setInterval(()=>{
//             this.Stamina += 5;
//             console.log(`You gained 5 Stamina. You have ${this.Stamina} Stamina`);
//         }, 5000)
//         console.log("You used a talent point");
//         this.talentpoint -= 1;
//         console.log("You chose Blessing of the Warrior");
//         console.log("Passive ability activated.")
        
//         this.abilities.passive = {name: "warriorsBlessing", action: warriorsBlessing };
//     }
//     // choices 7-9
//     //
//     elixirOfHealthTalent(){
//         this.Health += 25;
//         console.log(this.Health);
//         setTimeout(() => {
//             console.log("Cool-down ended");
//         }, 20000);
//     } 
//     useTalentPointChoice7(){
//         this.talentpoint -= 1;
//         this.abilities.active = {name: "Elixir of Health", action: this.elixirOfHealthTalent};
//         console.log(` ${this.abilities.active.name} added to activie abilities`);
//     }
//     elixirOfManaTalent(){
//         this.Mana += 25;
//         console.log(this.Health);
//         setTimeout(() => {
            
//         }, 20000);
//     } 
//     useTalentPointChoice8(){
//         this.talentpoint -= 1;
//         this.abilities.active = {name: "Elixir of Mana ", action: this.elixirOfManaTalent};
//         console.log(` ${this.abilities.active.name} added to activie abilities`);
//     }
//     elixirOfValorTalent(){
//         this.Stamina += 25;
//         console.log(this.Stamina);
//         setTimeout(() => {
            
//         }, 20000);
//     } 
//     useTalentPointChoice8(){
//         this.talentpoint -= 1;
//         this.abilities.active = {name: "Elixir of Valor ", action: this.elixirOfValorTalent};
//         console.log(` ${this.abilities.active.name} added to activie abilities`);
//     }

//     shamonicBloodRitualTalent(){
//         this.Health += 50;
//         this.Defense += 25;
//         console.log(this.Health);
//         console.log(this.Defense);
//             setTimeout(() => {
//                 this.Defence -= 25;
//                 console.log("Defence returned to normal");
//                 console.log(this.Defence);
//             }, 10000);
//     }
//     useTalentPointChoice10(){
//         this.talentpoint -= 1;
//         this.abilities.active = {name: "Shamonic Blood Ritual", action: this.shamonicBloodRitualTalent};
//     }
//     darkWizardTransformationTalent(){
//         this.Mana += 50;
//         this.Attack += 25;
//         console.log(this.Mana);
//         console.log(this.Attack);
//             setTimeout(() => {
//                 this.Attack -= 25;
//                 console.log("Attack returned to normal");
//                 console.log(this.Attack);
//             }, 10000);
//     }  
//     useTalentPointChoice11(){
//         this.talentpoint -= 1;
//         this.abilities.active = {name: "DarkWizardTransformation", action: this.darkWizardTransformationTalent};
//     }
//     beserkerMetamorphasisTalent(){
//         this.Stamina += 50;
//         this.Speed += 25;
//         console.log(this.Stamina);
//         console.log(this.Speed);
//             setTimeout(() => {
//                 this.Speed -= 25;
//                 console.log("Speed returned to normal");
//                 console.log(this.Speed);
//             }, 10000);
//     }
//     useTalentPointChoice12(){
//         this.talentpoint -= 1;
//         this.abilities.active = {name: "BeserkerMetamorphasis", action: this.beserkerMetamorphasisTalent};
//     }   
// };

// let shaman = new Character(50, 6, 5, 5, 7, 6);
// let wizard = new Character(50, 5, 6, 7, 5, 6);
// let warrior = new Character(50, 6, 5, 7, 5, 6);
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
// // =======================================================
// const activeTest = document.getElementById("active-test");
// activeTest.addEventListener("click", function(){
//     warrior.elixirOfHealthTalent();
//     console.log(`Stats = HP: ${warrior.Health}, MP: ${warrior.Mana}, SP: ${warrior.Stamina}`);
// })
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