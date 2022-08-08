// ----------- sprite class ------------
class Sprite {
    constructor({ 
        position, 
        image, 
        frames = {col: 1, row: 1, hold: 10}, 
        animate = false, 
        rotation = 0,
        scale = 1
    }) { 
        this.position = position
        this.image = new Image()
        this.frames = {...frames, colVal: 0, rowVal: 0, elapsed: 0}
        
        this.image.onload = () => {
            this.width = this.image.width / this.frames.col
            this.height = this.image.height / this.frames.row
        }
        this.image.src = image.src
        
        this.animate = animate
        this.opacity = 1
        this.rotation = rotation
        this.scale = scale
    }
    // draw (class method)
    draw() {
        c.save()
        c.translate(this.position.x + this.width / 2, this.position.y + this.height / 2)
        c.rotate(this.rotation)
        c.translate(-this.position.x - this.width / 2, -this.position.y - this.height / 2)
        c.globalAlpha = this.opacity
        c.drawImage(
            this.image,
            this.frames.colVal * this.width,
            this.frames.rowVal * this.height,
            this.image.width / this.frames.col,
            this.image.height / this.frames.row,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.col * this.scale,
            this.image.height / this.frames.row * this.scale
        )
        c.restore()

        if (!this.animate) return

        if (this.frames.col > 1){
            this.frames.elapsed++
        }
        if (this.frames.elapsed % this.frames.hold === 0) {
            if (this.frames.colVal < this.frames.col - 1) this.frames.colVal++
            else this.frames.colVal = 0
        }
    }
    
}
// ------------------ extending the parent Sprites for monsters ----------------
class Monster extends Sprite {
    constructor({
        position, 
        image, 
        frames = {col: 1, row: 1, hold: 10}, 
        animate = false, 
        rotation = 0,
        isEnemy = false,  
        name,
        attacks
    }) {
        super({
            position, 
            image, 
            frames, 
            animate, 
            rotation,
        })
        // change health to constructor later for variability
        this.health = 100
        this.isEnemy = isEnemy
        this.name = name
        this.attacks = attacks
    }
    // faint (class method)
    faint() {
        document.querySelector('#battleDialogueBox').innerHTML = this.name + " fainted!";
        gsap.to(this.position, {
            y: this.position.y + 20
        })
        gsap.to(this, {
            opacity: 0
        })
        audio.battle.stop()
        audio.victory.play()
    }
    // attack (class method)
    attack({attack, recipient, renderedSprites}) {
        document.querySelector('#battleDialogueBox').style.display ="block";
        document.querySelector('#battleDialogueBox').innerHTML = this.name + " used " + attack.name;
        // healthbar variables
        let healthbar = "#enemyhealthFull"
        if(this.isEnemy) healthbar = "#playerhealthFull"
        // rotation variables
        let rotation = 1
        if(this.isEnemy) rotation = -2.7
        // healthbar calc for all attacks
        recipient.health -= attack.damage

        // switch case for attack choices
        switch (attack.name) {
            // case fireball
            case "Fireball":
                audio.initFireball.play()
                // grab and assign sprite image
                const fireballImage = new Image()
                fireballImage.src = "./images/fireball.png"
                // create the new sprite
                const fireball = new Sprite({
                    position: {
                        x: this.position.x,
                        y: this.position.y
                    },
                    image: fireballImage,
                    frames: {
                        col: 4,
                        row: 1,
                        hold: 10
                    },
                    animate: true,
                    rotation
                    
                })
                // remove form dynamic sprite array
                renderedSprites.splice(1, 0, fireball)

                // moving fireball to enemy
                gsap.to(fireball.position, {
                    x: recipient.position.x,
                    y: recipient.position.y,
                    onComplete: () => {
                        // enemy gets hit
                        audio.fireballHit.play()
                        gsap.to(healthbar, {
                            width: recipient.health + "%"
                        })
                        // player action animation 
                        gsap.to(recipient.position, {
                            x: recipient.position.x + 10,
                            yoyo: true,
                            repeat: 5,
                            duration: 0.08
                        })
                        // enemy reaction animation
                        gsap.to(recipient, {
                            opacity: 0,
                            repeat: 5,
                            yoyo: true,
                            duration: 0.08
                            
                        })
                        renderedSprites.splice(1, 1)
                    }
                })

                break
            case "Mudthrow":
                audio.initFireball.play()
                // grab and assign sprite image
                const mudthrowImage = new Image()
                mudthrowImage.src = "./images/mudthrow.png"
                // create the new sprite
                const mudthrow = new Sprite({
                    position: {
                        x: this.position.x,
                        y: this.position.y
                    },
                    image: mudthrowImage,
                    frames: {
                        col: 6,
                        row: 1,
                        hold: 10
                    },
                    animate: true,
                    rotation
                    
                })
                // remove form dynamic sprite array
                renderedSprites.splice(1, 0, mudthrow)

                // moving fireball to enemy
                gsap.to(mudthrow.position, {
                    x: recipient.position.x,
                    y: recipient.position.y,
                    onComplete: () => {
                        // enemy gets hit
                        audio.fireballHit.play()
                        gsap.to(healthbar, {
                            width: recipient.health + "%"
                        })
                        // player action animation 
                        gsap.to(recipient.position, {
                            x: recipient.position.x + 10,
                            yoyo: true,
                            repeat: 5,
                            duration: 0.08
                        })
                        // enemy reaction animation
                        gsap.to(recipient, {
                            opacity: 0,
                            repeat: 5,
                            yoyo: true,
                            duration: 0.08
                            
                        })
                        renderedSprites.splice(1, 1)
                    }
                })

                break
            case "Gust":
                audio.initFireball.play()
                // grab and assign sprite image
                const gustImage = new Image()
                gustImage.src = "./images/gust.png"
                // create the new sprite
                const gust = new Sprite({
                    position: {
                        x: this.position.x,
                        y: this.position.y
                    },
                    image: gustImage,
                    frames: {
                        col: 6,
                        row: 1,
                        hold: 10
                    },
                    animate: true,
                    rotation
                    
                })
                // remove form dynamic sprite array
                renderedSprites.splice(1, 0, gust)

                // moving fireball to enemy
                gsap.to(gust.position, {
                    x: recipient.position.x,
                    y: recipient.position.y,
                    onComplete: () => {
                        // enemy gets hit
                        audio.fireballHit.play()
                        gsap.to(healthbar, {
                            width: recipient.health + "%"
                        })
                        // player action animation 
                        gsap.to(recipient.position, {
                            x: recipient.position.x + 10,
                            yoyo: true,
                            repeat: 5,
                            duration: 0.08
                        })
                        // enemy reaction animation
                        gsap.to(recipient, {
                            opacity: 0,
                            repeat: 5,
                            yoyo: true,
                            duration: 0.08
                            
                        })
                        renderedSprites.splice(1, 1)
                    }
                })

                break
            // tackle case
            case "Tackle":
                const tl = gsap.timeline()

                let movementDistance = 20
                if(this.isEnemy) movementDistance = -20

                tl.to(this.position, {
                    x: this.position.x - movementDistance
                }).to(this.position, {
                    x: this.position.x + movementDistance * 2,
                    duration: 0.1,
                    onComplete: () => {
                        // enemy gets hit
                        audio.tackleHit.play()
                        gsap.to(healthbar, {
                            width: recipient.health + "%"
                        })
                        // player action animation 
                        gsap.to(recipient.position, {
                            x: recipient.position.x + 10,
                            yoyo: true,
                            repeat: 5,
                            duration: 0.08
                        })
                        // enemy reaction animation
                        gsap.to(recipient, {
                            opacity: 0,
                            repeat: 5,
                            yoyo: true,
                            duration: 0.08
                            
                        })
                    }
                }).to(this.position, {
                    x: this.position.x 
                })

                break;
        }
    }
}
// extending the parent Sprites for items
// class OverworldItem extends Sprite {
//     constructor({
//         position, 
//         image, 
//         frames = {col: 1, row: 1, hold: 10}, 
//         animate = false, 
//         rotation = 0,
//         name,
//     }) {
//         super({
//             position, 
//             image, 
//             frames, 
//             animate, 
//             rotation,
//         })
//         // change health to constructor later for variability
//         this.health = 100
//         this.isEnemy = isEnemy
//         this.name = name
//         this.attacks = attacks
//     }
// }
// ----------------- booundaries class -----------------------------
class Boundary {
    // static property for zoomed in map image (16px actual x 4 zoom)
    static width = 64
    static height = 64
    constructor({position}) {
        this.position = position
        this.width = 64
        this.height = 64
    }
    // draw the block 
    draw() {
        c.fillStyle = "rgba(255, 0, 0, 0)"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
};

class Character {
        constructor(stats = {Health: 50, Stamina: 50, Mana: 50, Attack: 15, Defense: 15, Speed: 15}) 
        {
            this.stats = {...stats}
    
            // pre-define starting stats
            this.level = 1,
            this.requiredExp = 10,
            this.currentExp = 0,
            
            this.talentpoint = 0,
            this.talents = {}
            this.skills = {}
            
        }
        gainExp(){
            let expbar = "#playerExpbarChange" 
            
            setInterval(() => {
                this.currentExp += 1;
                dialogueBox.innerHTML = `${this.currentExp} EXP`;
                gsap.to(expbar, {
                    width: (this.currentExp / this.requiredExp) * 88  + "%" 
                })
                this.levelUp();
            }, 1000);
        }
        levelUp(){
            let expbar = "#playerExpbarChange" 
            if(this.currentExp === this.requiredExp){
                this.currentExp = 0
                this.level += 1;
                this.talentpoint += 1;
                setTimeout(() => {
                    gsap.to(expbar, {
                        width: this.currentExp  + "%" 
                    })
                }, 500);
                
                console.log("LEVEL UP");
                dialogueBox.innerHTML = "LEVEL UP"
                console.log(`You are now level-${this.level}`);
                dialogueBox.innerHTML = `You are now level-${this.level}`
                console.log(`You earned 1 Talent point. You now have ${this.talentpoint}`);
                dialogueBox.innerHTML = `You earned 1 Talent point. You now have ${this.talentpoint}`
                this.requiredExp += this.level * 5;
                
                // this.currentExp = 0;
                
            }
        }
        
        markOfTheSavage(){
            this.Attack +=10;
        }
        markOfTheTitan(){
            this.Defense +=10;
        }
        markOfTheRogue(){
            this.Speed +=10;
        }
        useTalentPointChoice1(){
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
    
let warrior = new Character(stats={Health: 50, Stamina: 50, Mana: 50, Attack: 15, Defense: 15, Speed: 15});
let shaman = new Character(stats={Health: 80, Stamina: 20, Mana: 30, Attack: 11, Defense: 16, Speed: 20});
console.log(warrior.stats)
console.log(shaman.stats.Health)
// warrior.gainExp()
