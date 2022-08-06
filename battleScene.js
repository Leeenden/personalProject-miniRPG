// declare battle image 
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

// --------- monster sprites ---------------
const draggleImage = new Image();
draggleImage.src = "images/draggleSprite.png";
const draggle = new Sprite({
    position: {
        x: 710,
        y: 175
    },
    image: draggleImage,
    frames: {
        col: 4,
        row: 1,
        hold: 30
    },
    animate: true,
    isEnemy:  true,
    name: "Draggle"
    
})

const embyImage = new Image();
embyImage.src = "images/embySprite.png";
const emby = new Sprite({
    position: {
        x: 225,
        y: 375
    },
    image: embyImage,
    frames: {
        col: 4,
        row: 1,
        hold: 30
    },
    animate: true,
    name: "Emby"
    
})

// animate battle sequence 

const renderedSprites = [draggle, emby]
function animateBattle() {
    window.requestAnimationFrame(animateBattle);
    battleBackground.draw();

    renderedSprites.forEach((sprite) => {
        sprite.draw()
    })
}

// should be off 
animateBattle();

// ------ event listeners for attack buttons -------
document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (e) => {
        const selectedAttack = attacks[e.currentTarget.innerHTML]
        emby.attack({ 
            attack: selectedAttack,
            recipient: draggle,
            renderedSprites
        })
    })
});