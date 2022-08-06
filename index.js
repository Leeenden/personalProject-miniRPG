// canvas DOM and context
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
// console.log(gsap);
// console.log(instancesData);

// canvas height and width
canvas.width = 960;
canvas.height = 640;

const collisionsMap = [];
//parse JSON file to produce arrays of the array for collisions
for (let i = 0; i < collisions.length; i += 20){
   collisionsMap.push(collisions.slice(i, 20 + i))
}

const instancesMap = [];
//parse JSON file to produce arrays of the array for battleZones
for (let i = 0; i < instancesData.length; i += 20){
    instancesMap.push(instancesData.slice(i, 20 + i))
}
// console.log(instancesMap)

const battleZonesMap = [];
//parse JSON file to produce arrays of the array for battleZones
for (let i = 0; i < battleZonesData.length; i += 20){
    battleZonesMap.push(battleZonesData.slice(i, 20 + i))
}

// booundaries array for pushing boundary  
const boundaries = [];
const offset = {
    x: -275,
    y: -350
}

collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 2475)
            boundaries.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            );

    });
});

const instanceZones = [];

instancesMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 2476)
            instanceZones.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            );

    });
});

const battleZones = [];

battleZonesMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 2477)
            battleZones.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            );

    });
});

// define canvas images
//map
const image = new Image();
image.src = "images/map.png";

const foregroundImage = new Image();
foregroundImage.src = "images/foregroundObjects.png"
// player
const playerImage = new Image();
playerImage.src = "images/char.png";


// creating class objects
// player
const player = new Sprite({
    position: {
        x: canvas.width / 2 - 128 / 4,
        y: canvas.height / 2 - 160 / 5 
    },
    image: playerImage,
    frames: {
        col: 4,
        row: 5,
        hold: 10
    },
    animate: true
})
// background
const background = new Sprite({
    position: {
        x: offset.x, 
        y: offset.y
    },
    image: image,
    frames: {
        col: 4,
        row: 1,
        hold: 30
    },
    animate: true
})
// foreground
const foreground = new Sprite({
    position: {
        x: offset.x, 
        y: offset.y
    },
    image: foregroundImage
})

// keys object
const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

// moveables 
const moveables = [background, ...boundaries, foreground, ...instanceZones, ...battleZones]

function rectanglularCollision({rectangle1, rectangle2}) {
    return (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x && 
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y
    )
}

// battle initiations
const battle = {
    initiated: false 
}

// animate function 
function animate() {
    const animationId = window.requestAnimationFrame(animate);
    //draw game map
    background.draw();
    boundaries.forEach((boundary) => {
        boundary.draw()
        // collision detection
        
    });
    instanceZones.forEach((instanceZone) => {
        instanceZone.draw()
        // collision detection
        
    });
    battleZones.forEach((battleZone) => {
        battleZone.draw()
        // collision detection
        
    });
    player.draw();
    foreground.draw();

    // movment tracking
    let moving = true;
    player.animate = false;

    // stopping movement on battle
    // console.log(animationId)
    if (battle.initiated) return

    // battlezone collisions detection / battle activation
    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
        // loop through array
        for (let i = 0; i < battleZones.length; i++){
            const battleZone = battleZones[i]
            const overlappingArea = 
                (Math.min(
                    player.position.x + player.width, 
                    battleZone.position.x + battleZone.width
                ) - 
                    Math.max(player.position.x, battleZone.position.x)) * 
                (Math.min(
                    player.position.y + player.height, 
                    battleZone.position.y + battleZone.height
                ) - Math.max(player.position.y, battleZone.position.y))
            if (
                rectanglularCollision({
                    rectangle1: player, 
                    rectangle2: battleZone
                }) &&
                overlappingArea > (player.width * player.height) / 2
                && Math.random() < 0.01
            ) {
                console.log("battle activated")

                // deactivate current animation loop
                window.cancelAnimationFrame(animationId)
                battle.initiated = true

                // gsap libaray animation settings
                gsap.to("#battleFlash", {
                    opacity: 1, 
                    repeat: 3,
                    yoyo: true,
                    duration: 0.4,
                    // show battle screen at the end of animation
                    onComplete() {
                        gsap.to("#battleFlash", {
                            opacity: 1,
                            duration: 0.4, 
                            onComplete() {
                                // activate new animation loop only when animation is complete
                                animateBattle();
                                gsap.to("#battleFlash", {
                                    opacity: 0,
                                    duration: 0.4
                                })
                            }
                        })

                        
                    }
                })
                break
            }
        }
    }

    // w key function
    if (keys.w.pressed && lastKey === "w") {
        player.frames.rowVal = 3
        player.animate = true
        //boundary collisions
        for (let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if (
                rectanglularCollision({
                    rectangle1: player, 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y + 3
                        }
                    }
                })
            ) {
                console.log("colliding")
                moving = false 
                break
            }
        }
        // stop movement 
        if(moving)
            moveables.forEach((movable) => {
                movable.position.y += 3
        })

    } else if (keys.a.pressed && lastKey === "a") {
        player.frames.rowVal = 1
        player.animate = true
        for (let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if (
                rectanglularCollision({
                    rectangle1: player, 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x + 3,
                            y: boundary.position.y
                        }
                    }
                })
            ) {
                console.log("colliding")
                moving = false 
                break
            }
        }
        // stop movement 
        if(moving)
        moveables.forEach((movable) => {
            movable.position.x += 3
        })
    } else if (keys.s.pressed && lastKey === "s") {
        player.frames.rowVal = 0
        player.animate = true
        for (let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if (
                rectanglularCollision({
                    rectangle1: player, 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 3
                        }
                    }
                })
            ) {
                console.log("colliding")
                moving = false 
                break
            }
        }
        // stop movement 
        if(moving)
        moveables.forEach((movable) => {
            movable.position.y -= 3
        })
    } else if (keys.d.pressed && lastKey === "d") {
        player.frames.rowVal = 2
        player.animate = true
        for (let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if (
                rectanglularCollision({
                    rectangle1: player, 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x - 3,
                            y: boundary.position.y 
                        }
                    }
                })
            ) {
                console.log("colliding")
                moving = false 
                break
            }
        }
        // stop movement 
        if(moving)
        moveables.forEach((movable) => {
            movable.position.x -= 3
        })
    }
}
// calling animation functions
//  should be on
// animate();

// // declare battle image 
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
    isEnemy:  true
    
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
    animate: true
    
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

// key up event listeners
let lastKey= ""
window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "w": 
            keys.w.pressed = true
            lastKey = "w"
            break
        case "a": 
            keys.a.pressed = true
            lastKey = "a"
            break
        case "s": 
            keys.s.pressed = true
            lastKey = "s"
            break   
        case "d": 
            keys.d.pressed = true
            lastKey = "d"
            break
    }
    // console.log(keys)
});
// key up event listeners
window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "w": 
            keys.w.pressed = false
            break
        case "a": 
            keys.a.pressed = false
            break
        case "s": 
            keys.s.pressed = false
            break   
        case "d": 
            keys.d.pressed = false
            break
    }
    // console.log(keys)
});