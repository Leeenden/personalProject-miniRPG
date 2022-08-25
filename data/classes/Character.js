// -----------------Character class -----------------------------
class Character {
    constructor({
        stats,
        isPlayer,
        isNPC,
        allQuests = [],
        activeQuests = []
    }
    ) {
        this.stats = stats
        this.activeHealth = this.stats.Health
        this.activeStamina = this.stats.Stamina
        this.activeMana = this.stats.Mana
        this.isPlayer = isPlayer
        this.isNPC = isNPC
        this.allQuests = allQuests
        this.activeQuests = activeQuests
        // pre-define starting stats
        this.level = 1
        this.requiredExp = 6
        this.currentExp = 0
        
        this.talentpoint = 0
        this.talents = []
        this.skillChoices = []
        
    }
    init(){
        this.displayStats()
        initQuestline()
        this.displayQuests()
        this.gainExp(2)
    }
    displayQuests() {
        this.allQuests.map((quest, index)=>{
            const qLog = document.createElement('div');
            qLog.classList.add("questItem");
            qLog.innerHTML = ` Q${quest.id}: "${quest.name}" Rewards: ${quest.reward} Status:${quest.status} Completed: ${quest.completed}.`
            console.log("working...")
            console.log(qLog.innerHTML)
            document.querySelector("#questLog").append(qLog);
            if(quest.status === "Inactive") {
                qLog.style.backgroundColor = "Grey"
            } else if(quest.status === "Active") {
                qLog.style.backgroundColor = "Green"
            }
        })
        
        
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
        charHP.innerHTML = this.stats.Health
        if(this.stats.Health !== charHP.innerHTML) {
            charHP.innerHTML = this.stats.Health
        }
        // update active HP
        this.activeHealth = this.stats.Health
        //  stamina
        let charSP = document.querySelector("#charSP")
        charSP.innerHTML = this.stats.Stamina
        if(this.stats.Stamina !== charSP.innerHTML) {
            charSP.innerHTML = this.stats.Stamina
        }
        // update active SP
        this.activeStamina = this.stats.Stamina
        //  mana
        let charMP = document.querySelector("#charMP")
        charMP.innerHTML = this.stats.Mana
        if(this.stats.Mana !== charMP.innerHTML) {
            charMP.innerHTML = this.stats.Mana
        }
        // update active MP
        this.activeMana = this.stats.Mana
        //  attack
        let charATK = document.querySelector("#charATK")
        charATK.innerHTML = this.stats.Attack
        if(this.stats.Attack !== charATK.innerHTML) {
            charATK.innerHTML = this.stats.Attack
        }
        //  defence
        let charDEF = document.querySelector("#charDEF")
        charDEF.innerHTML = this.stats.Defense
        if(this.stats.Defense !== charDEF.innerHTML) {
            charDEF.innerHTML = this.stats.Defense
        }
        //  speed
        let charSPD = document.querySelector("#charSPD")
        charSPD.innerHTML = this.stats.Speed
        if(this.stats.Speed !== charSPD.innerHTML) {
            charSPD.innerHTML = this.stats.Speed
        }
    }
    displaySkills() {
        // first skill
        const skillOne = document.getElementById("skillFirst")
        skillOne.innerHTML = this.skillChoices[0].name;
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
            }, 1000);
        } else if (this.skillChoices.length === 1 && this.level === 3) {
            // just using punch for now, later if statement
            this.skillChoices.push(skills.Two)
            console.log(this.skillChoices[1].name)
            document.querySelector("#overworldDialogueBox").innerHTML = `You learned 1 new skill. You can now use ${this.skillChoices[1].name}`
            setTimeout(() => {
                levelupMessage.remove();
                document.getElementById("overworldDialogueBox").style.display = "none";
                this.displaySkills();
            }, 1000);
        } else if (this.skillChoices.length === 2 && this.level === 4) {
            // just using punch for now, later if statement
            this.skillChoices.push(skills.Three)
            console.log(this.skillChoices[2].name)
            document.querySelector("#overworldDialogueBox").innerHTML = `You learned 1 new skill. You can now use ${this.skillChoices[2].name}`
            setTimeout(() => {
                levelupMessage.remove();
                document.getElementById("overworldDialogueBox").style.display = "none";
                this.displaySkills();
            }, 1000);
        } else if (this.skillChoices.length === 3 && this.level === 5) {
            // just using punch for now, later if statement
            this.skillChoices.push(skills.Four)
            console.log(this.skillChoices[3].name)
            document.querySelector("#overworldDialogueBox").innerHTML = `You learned 1 new skill. You can now use ${this.skillChoices[3].name}`
            setTimeout(() => {
                levelupMessage.remove();
                document.getElementById("overworldDialogueBox").style.display = "none";
                this.displaySkills();
            }, 1000);
        } else if (this.skillChoices.length === 4 && this.level === 6) {
            // just using punch for now, later if statement
            this.skillChoices.push(skills.Five)
            console.log(this.skillChoices[4].name)
            document.querySelector("#overworldDialogueBox").innerHTML = `You learned 1 new skill. You can now use ${this.skillChoices[4].name}`
            setTimeout(() => {
                levelupMessage.remove();
                document.getElementById("overworldDialogueBox").style.display = "none";
                this.displaySkills();
            }, 1000);
        }
        
    }
    gainExp(questId){
        let expbar = "#playerExpbarChange" 
        let float = "#floatingTextEXP"
        const fltl = gsap.timeline()
        let gainedExp 
        let questReward = this.allQuests.map(({reward, id}) => {
            if(id === questId) gainedExp = `${reward}`
        })
        console.log(gainedExp)
        this.currentExp += gainedExp
        // create floating exp div 
        const expText = document.createElement("div");
        expText.innerHTML = `+ ${gainedExp} EXP`;
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
    loseHealth(){
        let healthbar = "#characterHealthbarChange" 
        let float = "#floatingTextloseHP"
        const fltl = gsap.timeline()
        let damage = 10
        this.activeHealth -= damage
        // console.log(`${this.activeHealth} active HP`)
        // console.log(`${this.stats.Health} total`)
        // create floating exp div 
        const minusHPText = document.createElement("div");
        minusHPText.innerHTML = `- ${damage} HP`;
        document.getElementById("floatingTextloseHP").appendChild(minusHPText);
        fltl.to(float, {
            bottom: 100 + "px",
            yoyo: false,
            duration: 0.3,
            onComplete: () => {
                fltl.to(float, {
                    duration: 0.3,
                    display: "none",
                    onComplete: () => {
                        minusHPText.remove();
                        fltl.to(float, {
                            bottom: 0 + "px",
                            display: "flex"
                        })
                    }
                })
            }
        })
        // animate health bar
        gsap.to(healthbar, {
            width: (this.stats.Health - (this.stats.Health - this.activeHealth)) / 6 + "%" 
        })
        if(this.activeHealth <= 0){
            console.log("you died")
        }
    }
    loseStamina(){
        let staminabar = "#characterStaminabarChange" 
        let floati = "#floatingTextloseSP"
        const fltl = gsap.timeline()
        console.log(this.activeStamina)
        let moveCost = 10
        this.activeStamina -= moveCost
        // console.log(this.activeStamina)
        // console.log(this.stats.Stamina)
        // create floating exp div 
        const minusSPText = document.createElement("div");
        minusSPText.innerHTML = `- ${moveCost} SP`;
        document.getElementById("floatingTextloseSP").appendChild(minusSPText);
        fltl.to(floati, {
            bottom: 110 + "px",
            yoyo: false,
            duration: 0.4,
            onComplete: () => {
                fltl.to(floati, {
                    duration: 0.4,
                    display: "none",
                    onComplete: () => {
                        minusSPText.remove();
                        fltl.to(floati, {
                            bottom: 0 + "px",
                            display: "flex"
                        })
                    }
                })
            }
        })
        // animate health bar
        gsap.to(staminabar, {
            width: (this.stats.Stamina - (this.stats.Stamina - this.activeStamina)) / 6 + "%" 
        })
        if(this.activeStamina <= 0){
            console.log("You are out of stamina.")
        }
        
    }
    loseMana(){
        let manabar = "#characterManabarChange" 
        let floats = "#floatingTextloseMP"
        const fltl = gsap.timeline()
        console.log(this.activeMana)
        let moveCost = 10
        this.activeMana -= moveCost
        // console.log(this.activeMana)
        // console.log(this.stats.Mana)
        // create floating exp div 
        const minusMPText = document.createElement("div");
        minusMPText.innerHTML = `- ${moveCost} MP`;
        document.getElementById("floatingTextloseMP").appendChild(minusMPText);
        fltl.to(floats, {
            bottom: 110 + "px",
            yoyo: false,
            duration: 0.4,
            onComplete: () => {
                fltl.to(floats, {
                    duration: 0.4,
                    display: "none",
                    onComplete: () => {
                        minusMPText.remove();
                        fltl.to(floats, {
                            bottom: 0 + "px",
                            display: "flex"
                        })
                    }
                })
            }
        })
        // animate health bar
        gsap.to(manabar, {
            width: (this.stats.Mana - (this.stats.Mana - this.activeMana)) / 6 + "%" 
        })
        if(this.activeStamina <= 0){
            console.log("You are out of stamina.")
        }
    }
    levelUp(){
        let expbar = "#playerExpbarChange"
        let floaty = "#floatingTextLvlup"
        const fltl = gsap.timeline()
        
        this.currentExp = 0
        this.level += 1;
        this.talentpoint += 1;
        this.stats.Health += 3;
        this.stats.Stamina += 3;
        this.stats.Mana += 3;
        this.stats.Attack += 3;
        this.stats.Defense += 3;
        this.stats.Speed += 3;
        this.displayStats();
        // update
        setTimeout(() => {
            // create floating exp div 
            const levelupText = document.createElement("div");
            levelupText.innerHTML = "Level UP!";
            audio.levelup.play()
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
    }
    usePunch() {
        
        console.log(punch)
        
        // gsap.to(punch.position, {
        //     x: this.position.x,
        //     y: player.position.y,
        // })
        // punch.draw()
        this.skillChoices[0].effect
        audio.punch.play()
        this.loseHealth()
        this.loseStamina()
        this.loseMana()
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
};
// define all characters 
//  define warrior (player) class 
let warrior 
warrior= new Character(characters.Player);

let npc1 
npc1 = new Character(characters.NPC1);