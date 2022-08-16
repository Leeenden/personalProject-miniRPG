// -----------------Character class -----------------------------
class Character {
    constructor(
        stats = {
            Health: 50, 
            Stamina: 50, 
            Mana: 50, 
            Attack: 15, 
            Defense: 15, 
            Speed: 15
        },
        isPlayer = false,
        isNPC = false,
        allQuests = [],
        activeQuests = []
    ) {
        this.stats = {...stats}
        this.isPlayer = isPlayer
        this.isNPC = isNPC
        this.allQuests = allQuests
        this.activeQuests = activeQuests
        // pre-define starting stats
        this.level = 1,
        this.requiredExp = 6,
        this.currentExp = 0,
        
        this.talentpoint = 0,
        this.talents = []
        this.skillChoices = []
        
    }
    init(){
        this.displayStats()
        this.displayQuests()
        this.gainExp()
    }
    displayQuests() {
        const qLog = document.createElement('div');
        qLog.classList.add("questItem");
        let questInfo = this.allQuests.map(({id, name, reward, status, completed})=>{
            qLog.innerHTML = `Q${id}: "${name}" Rewards: ${reward} Status:${status} Completed: ${completed}.`
        })
        if (questInfo.completed === true) {
            console.log("working...")
            document.querySelector("#questLog").append(qLog);
            
        } else {
            document.querySelector("#questLog").appendChild(qLog);
             
        }
    }
    displayStats() {
        //level
        let charLevel = document.querySelector("#charLevel")
        charLevel.innerHTML = this.level
        if(this.level !== charLevel.innerHTML) {
            charLevel.innerHTML = this.level
        }
        // healhLevel
        let charHP = document.querySelector("#charHP")
        charHP.innerHTML = this.stats.stats.Health
        if(this.stats.stats.Health !== charHP.innerHTML) {
            charHP.innerHTML = this.stats.stats.Health
        }
        //  stamina
        let charSP = document.querySelector("#charSP")
        charSP.innerHTML = this.stats.stats.Stamina
        if(this.stats.stats.Stamina !== charSP.innerHTML) {
            charSP.innerHTML = this.stats.stats.Stamina
        }
        //  mana
        let charMP = document.querySelector("#charMP")
        charMP.innerHTML = this.stats.stats.Mana
        if(this.stats.stats.Mana !== charMP.innerHTML) {
            charMP.innerHTML = this.stats.stats.Mana
        }
        //  attack
        let charATK = document.querySelector("#charATK")
        charATK.innerHTML = this.stats.stats.Attack
        if(this.stats.stats.Attack !== charATK.innerHTML) {
            charATK.innerHTML = this.stats.stats.Attack
        }
        //  defence
        let charDEF = document.querySelector("#charDEF")
        charDEF.innerHTML = this.stats.stats.Defense
        if(this.stats.stats.Defense !== charDEF.innerHTML) {
            charDEF.innerHTML = this.stats.stats.Defense
        }
        //  speed
        let charSPD = document.querySelector("#charSPD")
        charSPD.innerHTML = this.stats.stats.Speed
        if(this.stats.stats.Speed !== charSPD.innerHTML) {
            charSPD.innerHTML = this.stats.stats.Speed
        }
    }
    displaySkills() {
        // first skill
        const skillOne = document.getElementById("skillFirst")
        skillOne.innerHTML = this.skillChoices[0].name;
        console.log(this.skillChoices)
        if(skillOne.innerHTML !== this.skillChoices[0].name) {
            skillOne.innerHTML = this.skillChoices[0].name;
        } 
        //second skill
        const skillTwo = document.getElementById("skillSecond")
        skillTwo.innerHTML = this.skillChoices[1].name;
        if(skillTwo.innerHTML !== this.skillChoices[1].name) {
            skillTwo.innerHTML = this.skillChoices[1].name;
        } 
        // third skill
        const skillThree = document.getElementById("skillThird")
        skillThree.innerHTML = this.skillChoices[2].name;
        if(skillThree.innerHTML !== this.skillChoices[2].name) {
            skillThree.innerHTML = this.skillChoices[2].name;
        } 
        // fourth skill
        const skillFour = document.getElementById("skillFourth")
        skillFour.innerHTML = this.skillChoices[3].name;
        if(skillFour.innerHTML !== this.skillChoices[3].name) {
            skillFour.innerHTML = this.skillChoices[3].name;
        } 
        //fifth skill
        const skillFive = document.getElementById("skillFifth")
        skillFive.innerHTML = this.skillChoices[4].name;
        if(skillFive.innerHTML !== this.skillChoices[4].name) {
            skillFive.innerHTML = this.skillChoices[4].name;
        } 
    }
    learnSkills() {
        const levelupMessage = document.createElement("div");
        levelupMessage.innerHTML = `You gained a Talent point. You now have ${this.talentpoint} talent points.`;
        // check if levels match and if yes, show 
        
        if (this.skillChoices.length === 0 && this.level === 2) {
            // just using punch for now, later if statement
            this.skillChoices.push(skills.One)
            console.log(this.skillChoices[0].name)
            document.querySelector("#overworldDialogueBox").innerHTML = `You learned 1 new skill. You can now use ${this.skillChoices[0].name}`
            setTimeout(() => {
                levelupMessage.remove();
                document.getElementById("overworldDialogueBox").style.display = "none";
                this.displaySkills();
            }, 2500);
        } else if (this.skillChoices.length === 1 && this.level === 3) {
            // just using punch for now, later if statement
            this.skillChoices.push(skills.Two)
            console.log(this.skillChoices[1].name)
            document.querySelector("#overworldDialogueBox").innerHTML = `You learned 1 new skill. You can now use ${this.skillChoices[1].name}`
            setTimeout(() => {
                levelupMessage.remove();
                document.getElementById("overworldDialogueBox").style.display = "none";
                this.displaySkills();
            }, 2500);
        } else if (this.skillChoices.length === 2 && this.level === 4) {
            // just using punch for now, later if statement
            this.skillChoices.push(skills.Three)
            console.log(this.skillChoices[2].name)
            document.querySelector("#overworldDialogueBox").innerHTML = `You learned 1 new skill. You can now use ${this.skillChoices[2].name}`
            setTimeout(() => {
                levelupMessage.remove();
                document.getElementById("overworldDialogueBox").style.display = "none";
                this.displaySkills();
            }, 2500);
        } else if (this.skillChoices.length === 3 && this.level === 5) {
            // just using punch for now, later if statement
            this.skillChoices.push(skills.Four)
            console.log(this.skillChoices[3].name)
            document.querySelector("#overworldDialogueBox").innerHTML = `You learned 1 new skill. You can now use ${this.skillChoices[3].name}`
            setTimeout(() => {
                levelupMessage.remove();
                document.getElementById("overworldDialogueBox").style.display = "none";
                this.displaySkills();
            }, 2500);
        } else if (this.skillChoices.length === 4 && this.level === 6) {
            // just using punch for now, later if statement
            this.skillChoices.push(skills.Five)
            console.log(this.skillChoices[4].name)
            document.querySelector("#overworldDialogueBox").innerHTML = `You learned 1 new skill. You can now use ${this.skillChoices[4].name}`
            setTimeout(() => {
                levelupMessage.remove();
                document.getElementById("overworldDialogueBox").style.display = "none";
                this.displaySkills();
            }, 2500);
        }
        
    }
    gainExp(){
        let expbar = "#playerExpbarChange" 
        let float = "#floatingTextEXP"
        const fltl = gsap.timeline()
        this.currentExp += this.allQuests[0].reward;
        // create floating exp div 
        const expText = document.createElement("div");
        expText.innerHTML = `+ ${this.allQuests[0].reward} EXP`;
        document.getElementById("floatingTextEXP").appendChild(expText);
        fltl.to(float, {
            bottom: 125 + "px",
            yoyo: false,
            duration: 0.5,
            onComplete: () => {
                fltl.to(float, {
                    duration: 0.5,
                    display: "none",
                    onComplete: () => {
                        expText.remove();
                        fltl.to(float, {
                            bottom: 0 + "px",
                            display: "flex"
                        })
                    }
                })
            }
        })
        // animate top exp bar
        gsap.to(expbar, {
            width: (this.currentExp / this.requiredExp) * 88 + "%" 
        })
        // run level up function
        if(this.currentExp >= this.requiredExp){
        this.levelUp();
        }
    }
    levelUp(){
        let expbar = "#playerExpbarChange"
        let floaty = "#floatingTextLvlup"
        const fltl = gsap.timeline()
        
        this.currentExp = 0
        this.level += 1;
        this.talentpoint += 1;
        this.stats.stats.Health += 3;
        this.stats.stats.Stamina += 3;
        this.stats.stats.Mana += 3;
        this.stats.stats.Attack += 3;
        this.stats.stats.Defense += 3;
        this.stats.stats.Speed += 3;
        this.displayStats();
        // update
        setTimeout(() => {
            // create floating exp div 
            const levelupText = document.createElement("div");
            levelupText.innerHTML = "Level UP!";
            document.getElementById("floatingTextLvlup").appendChild(levelupText);
            fltl.to(floaty, {
                bottom: 125 + "px",
                yoyo: false,
                duration: 0.5,
                onComplete: () => {
                    fltl.to(floaty, {
                        duration: 1,
                        display: "none",
                        onComplete: () => {
                            levelupText.remove();
                            fltl.to(floaty, {
                                bottom: 0 + "px",
                                display: "block"
                            })
                        }
                    })
                }
            })
            gsap.to(expbar, {
                width: this.currentExp  + "%" 
            })
        }, 1000);
        // level-up message variables
        setTimeout(() => {
            const levelupMessage = document.createElement("div");
            levelupMessage.innerHTML = `You gained a Talent point. You now have ${this.talentpoint} talent points.`;
            // display box and inject the created div with the message
            document.getElementById("overworldDialogueBox").style.display = "block";
            document.getElementById("overworldDialogueBox").appendChild(levelupMessage);
            setTimeout(() => {
                levelupMessage.remove();
                document.getElementById("overworldDialogueBox").style.display = "none";
                
            }, 2500);
            // run skills code incase any skills can be learned that level
            this.learnSkills()
        }, 2000);
        
        // change the required exp for the next level
        this.requiredExp += this.level * 4;
        quest1.complete()
        
    }
    usePunch() {
        this.skillChoices[0].effect
        audio.punch.play()
    }
    useSwing(){
        this.skillChoices[1].effect
        audio.swing.play()
    }
    useStab(){
        this.skillChoices[2].effect
        audio.stab.play()
    }
    useShout(){
        this.skillChoices[3].effect
        audio.shout.play()
    }
    useRoar(){
        this.skillChoices[4].effect
        audio.roar.play()
    }
    markOfTheRogue() {
        this.Speed +=10;
    }
    useTalentPointChoice1() {
        console.log("You used a talent point");
        this.talentpoint -= 1;
        console.log("You chose mark of the Savage");
        this.markOfTheSavage();
    }
    useTalentPointChoice2(){
        console.log("You used a talent point");
        this.talentpoint -= 1;
        console.log("You chose mark of the titan");
        this.markOfTheTitan();
    }
    useTalentPointChoice3(){
        console.log("You used a talent point");
        this.talentpoint -= 1;
        console.log("You chose mark of the rogue");
        this.markOfTheRogue();
    }
    useTalentPointChoice4(){
        let shamansBlessing = setInterval(()=>{
            this.Health += 5;
            console.log(`You gained 5 Health, you have ${this.Health} Health`);
        }, 5000);

        console.log("You used a talent point");
        this.talentpoint -= 1;
        console.log("You chose Blessing of the Shaman");
        console.log("Passive ability activated.")
        this.abilities.passive = {name: "shamansBlessing", action: shamansBlessing };
    }
    useTalentPointChoice5(){
        let wizardsBlessing = setInterval(()=>{
            this.Mana += 5;
            console.log(`You gained 5 Mana. You have ${this.Mana} Mana`);
        }, 5000)
        console.log("You used a talent point");
        this.talentpoint -= 1;
        console.log("You chose Blessing of the Wizard");
        console.log("Passive ability activated.")
        
        this.abilities.passive = {name: "wizardsBlessing", action: wizardsBlessing };
    }
    useTalentPointChoice6(){
        let warriorsBlessing = setInterval(()=>{
            this.Stamina += 5;
            console.log(`You gained 5 Stamina. You have ${this.Stamina} Stamina`);
        }, 5000)
        console.log("You used a talent point");
        this.talentpoint -= 1;
        console.log("You chose Blessing of the Warrior");
        console.log("Passive ability activated.")
        
        this.abilities.passive = {name: "warriorsBlessing", action: warriorsBlessing };
    }
    // choices 7-9
    //
    elixirOfHealthTalent(){
        this.Health += 25;
        console.log(this.Health);
        setTimeout(() => {
            console.log("Cool-down ended");
        }, 20000);
    } 
    useTalentPointChoice7(){
        this.talentpoint -= 1;
        this.abilities.active = {name: "Elixir of Health", action: this.elixirOfHealthTalent};
        console.log(` ${this.abilities.active.name} added to activie abilities`);
    }
    elixirOfManaTalent(){
        this.Mana += 25;
        console.log(this.Health);
        setTimeout(() => {
            
        }, 20000);
    } 
    useTalentPointChoice8(){
        this.talentpoint -= 1;
        this.abilities.active = {name: "Elixir of Mana ", action: this.elixirOfManaTalent};
        console.log(` ${this.abilities.active.name} added to activie abilities`);
    }
    elixirOfValorTalent(){
        this.Stamina += 25;
        console.log(this.Stamina);
        setTimeout(() => {
            
        }, 20000);
    } 
    useTalentPointChoice8(){
        this.talentpoint -= 1;
        this.abilities.active = {name: "Elixir of Valor ", action: this.elixirOfValorTalent};
        console.log(` ${this.abilities.active.name} added to activie abilities`);
    }

    shamonicBloodRitualTalent(){
        this.Health += 50;
        this.Defense += 25;
        console.log(this.Health);
        console.log(this.Defense);
            setTimeout(() => {
                this.Defence -= 25;
                console.log("Defence returned to normal");
                console.log(this.Defence);
            }, 10000);
    }
    useTalentPointChoice10(){
        this.talentpoint -= 1;
        this.abilities.active = {name: "Shamonic Blood Ritual", action: this.shamonicBloodRitualTalent};
    }
    darkWizardTransformationTalent(){
        this.Mana += 50;
        this.Attack += 25;
        console.log(this.Mana);
        console.log(this.Attack);
            setTimeout(() => {
                this.Attack -= 25;
                console.log("Attack returned to normal");
                console.log(this.Attack);
            }, 10000);
    }  
    useTalentPointChoice11(){
        this.talentpoint -= 1;
        this.abilities.active = {name: "DarkWizardTransformation", action: this.darkWizardTransformationTalent};
    }
    beserkerMetamorphasisTalent(){
        this.Stamina += 50;
        this.Speed += 25;
        console.log(this.Stamina);
        console.log(this.Speed);
            setTimeout(() => {
                this.Speed -= 25;
                console.log("Speed returned to normal");
                console.log(this.Speed);
            }, 10000);
    }
    useTalentPointChoice12(){
        this.talentpoint -= 1;
        this.abilities.active = {name: "BeserkerMetamorphasis", action: this.beserkerMetamorphasisTalent};
    }   
};

// define all characters 
//  define warrior (player) class 
let warrior 
warrior= new Character(characters.Player);

let npc1 
npc1 = new Character(characters.NPC1);