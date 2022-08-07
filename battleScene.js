// ---------- battle background image -------- 
const battleBackgroundImage = new Image();
battleBackgroundImage.src = "images/bg-forest1.png";
// battle sprite object
const battleBackground = new Sprite({
    position: {
        x: -150,
        y: -75
    },
    image: battleBackgroundImage
})

// --------- monster sprites creation ---------------
let draggle
let emby
let renderedSprites

// ---------- animate battle sequence --------------
let queue = []
// populate attacks dynamically


function initBattle() {
    document.querySelector("#battlescreenUI").style.display = "block";
    document.querySelector("#battleDialogueBox").style.display = "none";
    document.querySelector("#enemyhealthFull").style.width = "100%";
    document.querySelector("#playerhealthFull").style.width = "100%";
    document.querySelector("#attacksBox").replaceChildren() 

    draggle = new Monster(monsters.Draggle)
    emby = new Monster(monsters.Emby)
    renderedSprites = [draggle, emby]
    queue = []

    emby.attacks.forEach((attack) => {
        const button = document.createElement('button')
        button.innerHTML = attack.name
        document.querySelector("#attacksBox").append(button)
    })

    document.querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', (e) => {
            const selectedAttack = attacks[e.currentTarget.innerHTML]
            emby.attack({ 
                attack: selectedAttack,
                recipient: draggle,
                renderedSprites
            })
    
            if (draggle.health <= 0) {
                queue.push(() => {
                    draggle.faint()
                })
                queue.push(() => {
                    // fade to black
                    gsap.to("#battleFlash", {
                        opacity: 1, 
                        onComplete: () => {
                            cancelAnimationFrame(battleAnimationId)
                            animate()
                            document.querySelector("#battlescreenUI").style.display = "none"
                            gsap.to("#battleFlash", {
                                opacity: 0
                            })
                            battle.initiated = false
                            audio.map.play()
                        }
                    })
                })
            }
    
            // enemy attacks right here
            const randomAttack = draggle.attacks[Math.floor(Math.random() * draggle.attacks.length)]
    
            queue.push(() => {
                draggle.attack({ 
                    attack: randomAttack,
                    recipient: emby,
                    renderedSprites
                })
    
                if (emby.health <= 0) {
                    queue.push(() => {
                        emby.faint()
                    })
                    queue.push(() => {
                        // fade to black
                        gsap.to("#battleFlash", {
                            opacity: 1, 
                            onComplete: () => {
                                cancelAnimationFrame(battleAnimationId)
                                animate()
                                document.querySelector("#battlescreenUI").style.display = "none"
                                gsap.to("#battleFlash", {
                                    opacity: 0
                                })
                                battle.initiated = false
                                audio.map.play()
                            }
                        })
                    })

                }
            })
        })
        button.addEventListener("mouseenter", (e) => {
            const selectedAttack = attacks[e.currentTarget.innerHTML];
            document.querySelector("#attackDetails").innerHTML = selectedAttack.type;
            document.querySelector("#attackDetails").style.color = selectedAttack.color;
        })
    });
};

let battleAnimationId  
// animate battle function
function animateBattle() {
    battleAnimationId= window.requestAnimationFrame(animateBattle);
    battleBackground.draw();

    renderedSprites.forEach((sprite) => {
        sprite.draw()
    })
}

// should be off 
animate()
// initBattle()
// animateBattle();

// ------ event listeners for attack buttons -------


// event listener for dialogue box removal 
document.querySelector('#battleDialogueBox').addEventListener("click", (e) => {
    if(queue.length > 0){
        queue[0]()
        queue.shift()
    } else {
        e.currentTarget.style.display = "none";
    }
})