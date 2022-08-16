
// -------------------- all skill cards ------------------------------------
// ----- skill card 1  ------
// //name
const sc1name = document.querySelector("#sc1");
sc1name.innerHTML = skills.One.name;
// unlock level
const sc1level = document.querySelector("#skillUnlockLevel1")
sc1level.innerHTML = skills.One.level;
//description
const sc1desc = document.querySelector("#skillDetails1")
sc1desc.innerHTML = skills.One.description;

// ----- skill card 2  ------
//name
const sc2name = document.querySelector("#sc2");
sc2name.innerHTML = skills.Two.name;
// unlock level 
const sc2level = document.querySelector("#skillUnlockLevel2")
sc2level.innerHTML = skills.Two.level;
//description
const sc2desc = document.querySelector("#skillDetails2")
sc2desc.innerHTML = skills.Two.description;

// ----- skill card 3  ------
//name
const skillCard3 = document.querySelector("#sc3");
skillCard3.innerHTML = skills.Three.name;
// unlock level 
const sc3level = document.querySelector("#skillUnlockLevel3")
sc3level.innerHTML = skills.Three.level;
//description
const sc3desc = document.querySelector("#skillDetails3")
sc3desc.innerHTML = skills.Three.description;

// ----- skill card 4  ------
//name
const skillCard4 = document.querySelector("#sc4");
skillCard4.innerHTML = skills.Four.name;
// unlock level 
const sc4level = document.querySelector("#skillUnlockLevel4")
sc4level.innerHTML = skills.Four.level;
//description
const sc4desc = document.querySelector("#skillDetails4")
sc4desc.innerHTML = skills.Four.description;

// ----- skill card 5  ------
//name
const skillCard5 = document.querySelector("#sc5");
skillCard5.innerHTML = skills.Five.name;
// unlock level 
const sc5level = document.querySelector("#skillUnlockLevel5")
sc5level.innerHTML = skills.Five.level
//description
const sc5desc = document.querySelector("#skillDetails5")
sc5desc.innerHTML = skills.Five.description;

// ----- skill card 6  ------
//name
const skillCard6 = document.querySelector("#sc6");
skillCard6.innerHTML = skills.Six.name;
// unlock level 
const sc6level = document.querySelector("#skillUnlockLevel6")
sc6level.innerHTML = skills.Six.level
//description
const sc6desc = document.querySelector("#skillDetails6")
sc6desc.innerHTML = skills.Six.description;

// skill action buttons
const punchBtn = document.getElementById("skillFirst");
punchBtn.addEventListener("click", function(){
    warrior.usePunch();
})
const swingBtn = document.getElementById("skillSecond");
swingBtn.addEventListener("click", function(){
    warrior.useSwing();
})
const stabBtn = document.getElementById("skillThird");
stabBtn.addEventListener("click", function(){
    warrior.useStab();
})
const shoutBtn = document.getElementById("skillFourth");
shoutBtn.addEventListener("click", function(){
    warrior.useShout();
})
const roarBtn = document.getElementById("skillFifth");
roarBtn.addEventListener("click", function(){
    warrior.useRoar();
})
// initiate game
let clicked = false
addEventListener("click", () => {
    if(!clicked) {
        audio.map.play()
        clicked = true
        quest1.init()
        warrior.init()
    }
})

