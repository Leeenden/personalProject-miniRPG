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
const draggle = new Monster(monsters.Draggle)
const emby = new Monster(monsters.Emby)

// ---------- animate battle sequence --------------
const renderedSprites = [draggle, emby]
// populate attacks dynamically
emby.attacks.forEach((attack) => {
    const button = document.createElement('button')
    button.innerHTML = attack.name
    document.querySelector("#attacksBox").append(button)
})

// animate battle function
function animateBattle() {
    window.requestAnimationFrame(animateBattle);
    battleBackground.draw();

    renderedSprites.forEach((sprite) => {
        sprite.draw()
    })
}

// should be off 
animateBattle();

const queue = []

// ------ event listeners for attack buttons -------
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

            return
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
            }
        })
    })
    button.addEventListener("mouseenter", (e) => {
        const selectedAttack = attacks[e.currentTarget.innerHTML];
        document.querySelector("#attackDetails").innerHTML = selectedAttack.type;
        document.querySelector("#attackDetails").style.color = selectedAttack.color;
    })
});

// event listener for dialogue box removal 
document.querySelector('#battleDialogueBox').addEventListener("click", (e) => {
    if(queue.length > 0){
        queue[0]()
        queue.shift()
    } else {
        e.currentTarget.style.display = "none";
    }
})