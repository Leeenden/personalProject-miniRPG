// -------------------- all talent cards ------------------------------------
// ----- talent card 1  ------
// //name
const tc1name = document.querySelector("#tc1");
tc1name.innerHTML = talents.One.name;
// unlock level
const tc1level = document.querySelector("#talentUnlockLevel1")
tc1level.innerHTML = talents.One.level;
//description
const tc1desc = document.querySelector("#talentDetails1")
tc1desc.innerHTML = talents.One.description;
// ----- talent card 2  ------
// //name
const tc2name = document.querySelector("#tc2");
tc2name.innerHTML = talents.Two.name;
// unlock level
const tc2level = document.querySelector("#talentUnlockLevel2")
tc2level.innerHTML = talents.Two.level;
//description
const tc2desc = document.querySelector("#talentDetails2")
tc2desc.innerHTML = talents.Two.description;
// ----- talent card 3  ------
// //name
const tc3name = document.querySelector("#tc3");
tc3name.innerHTML = talents.Three.name;
// unlock level
const tc3level = document.querySelector("#talentUnlockLevel3")
tc3level.innerHTML = talents.Three.level;
//description
const tc3desc = document.querySelector("#talentDetails3")
tc3desc.innerHTML = talents.Three.description;
// ----- talent card 4  ------
// //name
const tc4name = document.querySelector("#tc4");
tc4name.innerHTML = talents.Four.name;
// unlock level
const tc4level = document.querySelector("#talentUnlockLevel4")
tc4level.innerHTML = talents.Four.level;
//description
const tc4desc = document.querySelector("#talentDetails4")
tc4desc.innerHTML = talents.Four.description;
// ----- talent card 5  ------
// //name
const tc5name = document.querySelector("#tc5");
tc5name.innerHTML = talents.Five.name;
// unlock level
const tc5level = document.querySelector("#talentUnlockLevel5")
tc5level.innerHTML = talents.Five.level;
//description
const tc5desc = document.querySelector("#talentDetails5")
tc5desc.innerHTML = talents.Five.description;
// ----- talent card 2  ------
// //name
const tc6name = document.querySelector("#tc6");
tc6name.innerHTML = talents.Six.name;
// unlock level
const tc6level = document.querySelector("#talentUnlockLevel6")
tc6level.innerHTML = talents.Six.level;
//description
const tc6desc = document.querySelector("#talentDetails6")
tc6desc.innerHTML = talents.Six.description;

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

// -------------------- all player skill bar utility ------------------------------------
// ----- skill button and eventlistener tracking object ------
let useSkillBtns = {
    One: {
        clicked: false,
        pressed: false
    },
    Two: {
        clicked: false,
    },
    Three: {
        clicked: false,
        pressed: false
    },
    Four: {
        clicked: false,
    },
    Five: {
        clicked: false,
        pressed: false
    },
}
// ----- skill button variables ------
const punchBtn = document.getElementById("skillFirst");
const swingBtn = document.getElementById("skillSecond");
const stabBtn = document.getElementById("skillThird");
const shoutBtn = document.getElementById("skillFourth");
const roarBtn = document.getElementById("skillFifth");
// ----- skill button click functions ------
punchBtn.addEventListener("click", (e) => {
    if(e.type === "click" && useSkillBtns.One.clicked === false) {
        console.log("click skill one")
        useSkillBtns.One.clicked = true
        console.log(useSkillBtns.One.clicked)
        warrior.usePunch();
        useSkillBtns.One.clicked = false
        console.log(useSkillBtns.One.clicked)
    } 
})
swingBtn.addEventListener("click", (e) => {
    if(e.type === "click" && useSkillBtns.Two.clicked === false) {
        console.log("click skill two")
        useSkillBtns.Two.clicked = true
        console.log(useSkillBtns.Two.clicked)
        warrior.useSwing();
        useSkillBtns.Two.clicked = false
        console.log(useSkillBtns.Two.clicked)
    } 
})
stabBtn.addEventListener("click", (e) => {
    if(e.type === "click" && useSkillBtns.Three.clicked === false) {
        console.log("click skill three")
        useSkillBtns.Three.clicked = true
        console.log(useSkillBtns.Three.clicked)
        warrior.useStab();
        useSkillBtns.Three.clicked = false
        console.log(useSkillBtns.Three.clicked)
    } 
})
shoutBtn.addEventListener("click", (e) => {
    if(e.type === "click" && useSkillBtns.Four.clicked === false) {
        console.log("click skill four")
        useSkillBtns.Four.clicked = true
        console.log(useSkillBtns.Four.clicked)
        warrior.useShout();
        useSkillBtns.Four.clicked = false
        console.log(useSkillBtns.Four.clicked)
    } 
})
roarBtn.addEventListener("click", (e) => {
    if(e.type === "click" && useSkillBtns.Five.clicked === false) {
        console.log("click skill Five")
        useSkillBtns.Five.clicked = true
        console.log(useSkillBtns.Five.clicked)
        warrior.useRoar();
        useSkillBtns.Five.clicked = false
        console.log(useSkillBtns.Five.clicked)
    } 
})
// ----- skill button keypress functions ------
addEventListener("keypress", (e) => {
    if(e.key === "1" && useSkillBtns.One.pressed === false) {
        console.log("pressed skill one")
        useSkillBtns.One.pressed = true
        console.log(useSkillBtns.One.pressed)
        warrior.usePunch();
        useSkillBtns.One.pressed = false
        console.log(useSkillBtns.One.pressed)
    } else if(e.key === "2" && useSkillBtns.Two.pressed === false) {
        console.log("pressed skill two")
        useSkillBtns.Two.pressed = true
        console.log(useSkillBtns.Two.pressed)
        warrior.useSwing();
        useSkillBtns.Two.pressed = false
        console.log(useSkillBtns.Two.pressed)
    } else if(e.key === "3" && useSkillBtns.Three.pressed === false) {
        console.log("pressed skill three")
        useSkillBtns.Three.pressed = true
        console.log(useSkillBtns.Three.pressed)
        warrior.useStab();
        useSkillBtns.Three.pressed = false
        console.log(useSkillBtns.Three.pressed)
    } else if(e.key === "4" && useSkillBtns.Four.pressed === false) {
        console.log("pressed skill four")
        useSkillBtns.Four.pressed = true
        console.log(useSkillBtns.Four.pressed)
        warrior.useShout();
        useSkillBtns.Four.pressed = false
        console.log(useSkillBtns.Four.pressed)
    } else if(e.key === "5" && useSkillBtns.Five.pressed === false) {
        console.log("pressed skill five")
        useSkillBtns.Five.pressed = true
        console.log(useSkillBtns.Five.pressed)
        warrior.useRoar();
        useSkillBtns.Five.pressed = false
        console.log(useSkillBtns.Five.pressed)
    }
})
// ----- initiate game mechanics function ------
let clicked = false
addEventListener("click", () => {
    if(!clicked) {
        audio.map.play()
        clicked = true
        warrior.init() 
        
    }
})

// start quest line
const initQuestline = () => {
    quests.map((quest, index) => {
        warrior.allQuests.push(quest)
    })
    console.log(warrior.allQuests)
}

// run game 
animateMain()

