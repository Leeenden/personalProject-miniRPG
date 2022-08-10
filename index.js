// canvas DOM and context
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
// console.log(gsap);
// console.log(instancesData);

// canvas height and width
canvas.width = 960;
canvas.height = 640;

// -------------- data parsing for boundary -------------------------
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

// -------------- collision boundary code -------------------------
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

// -------------- instance tiles boundary code -------------------------
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

// -------------- battle zone boundary code -------------------------
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

// ------------- canvas images -----------------------
//map
const image = new Image();
image.src = "images/map.png";
// foreground objects (walk behind tiles)
const foregroundImage = new Image();
foregroundImage.src = "images/foregroundObjects.png"
// player
const playerImage = new Image();
playerImage.src = "images/char3.png";


// ------------ player sprite creation -----------------
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
    animate: true,
    scale: 1
})
// ----------------- background sprite creation --------------------
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
    animate: true,
    scale: 1
})
// ----------------- foreground sprite creation --------------------
const foreground = new Sprite({
    position: {
        x: offset.x, 
        y: offset.y
    },
    image: foregroundImage,
    scale: 1
})

// ----------------- object - key tracker --------------------
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
    },
    // m: {
    //     pressed: false
    // }
}

// ----------------- moveable sprites array (when walking) --------------------
const moveables = [background, ...boundaries, foreground, ...instanceZones, ...battleZones]

function rectanglularCollision({rectangle1, rectangle2}) {
    return (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x && 
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y
    )
}

// ----------------- initiate battle status object --------------------
const battle = {
    initiated: false 
}

// ----------------- MAIN ANIMATE FUNCTION / GAME CODE --------------------
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
                // stop audio 
                audio.map.stop()
                // play new audio
                audio.initBattle.play()
                audio.battle.play()

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
                                initBattle();
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
    // ---------------------- W, A, S, D movement code ----------------------- 
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

// ----------------- key down event listener code --------------------
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
        // case "m": 
        //     keys.m.pressed = true
        //     // lastKey = "d"
        //     break
    }
});
// ----------------- key up event listener code --------------------
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
        // case "m": 
        //     keys.m.pressed = false
        //     // lastKey = "d"
        //     break
    }
});

// ----------------- music / howler initiationevent listener --------------------
let clicked = false
addEventListener("click", () => {
    if(!clicked) {
        audio.map.play()
        clicked = true
    }
})
// inventory menu event listeners

let menuToggle = {
    inventory: {
        open: false
    },
    quests: {
        open: false
    },
    char: {
        open: false
    },
    skills: {
        open: false
    },
    talents: {
        open: false
    }
}

addEventListener("keypress", (e) => {
       
    if(e.key === "i" && menuToggle.inventory.open === false) {
        document.querySelector("#characterInventory").style.display = "block";
        menuToggle.inventory.open = true
        console.log(menuToggle.inventory.open)
    } else if (e.key === "i" && menuToggle.inventory.open === true ) {
        document.querySelector("#characterInventory").style.display = "none";
        menuToggle.inventory.open = false
        console.log(menuToggle.inventory.open)
    }
    if(e.key === "n" && menuToggle.talents.open === false) {
        document.querySelector("#talentsMenu").style.display = "block";
        menuToggle.talents.open = true
    } else if (e.key === "n" && menuToggle.talents.open === true ) {
        document.querySelector("#talentsMenu").style.display = "none";
        menuToggle.talents.open = false
    }
    if(e.key === "b" && menuToggle.skills.open === false) {
        document.querySelector("#skillsMenu").style.display = "block";
        menuToggle.skills.open = true
    } else if (e.key === "b" && menuToggle.skills.open === true ) {
        document.querySelector("#skillsMenu").style.display = "none";
        menuToggle.skills.open = false
    }
    if(e.key === "c" && menuToggle.char.open === false) {
        document.querySelector("#characterDetails").style.display = "block";
        menuToggle.char.open = true
    } else if (e.key === "c" && menuToggle.char.open === true ) {
        document.querySelector("#characterDetails").style.display = "none";
        menuToggle.char.open = false
    }
    if(e.key === "v" && menuToggle.quests.open === false) {
        document.querySelector("#questMenu").style.display = "block";
        menuToggle.quests.open = true
    } else if (e.key === "v" && menuToggle.quests.open === true ) {
        document.querySelector("#questMenu").style.display = "none";
        menuToggle.quests.open = false
    }
})

// testing mechnaics code 

warrior.gainExp();
// console.log(warrior.skills.Swing.effect)
console.log(warrior.stats.Attack) 
console.log(warrior.skills)
console.log(warrior.stats.Attack)

// function to animate the charatcer box

// let size = Math.random() * 80;
// document.querySelector("#floatingText").style.width = 20 + size+"px";
// document.querySelector("#floatingText").style.height = 20 + size+"px";

// let transformValue = Math.random() * 100;
// document.querySelector("#floatingText").style.transform = "linear("+ transformValue +"px)";
// document.querySelector("#characterDialogueBox").appendChild(document.querySelector("#floatingText"));

// setTimeout(function(){
//     document.querySelector("#floatingText").remove();
// }, 100)