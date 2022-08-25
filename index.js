// ----------------- MAIN ANIMATE FUNCTION / GAME CODE --------------------
// ----- define canvas variable and context ------
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
// console.log(gsap);
// console.log(instancesData);

// ----- define canvas height and width ------
canvas.width = 960;
canvas.height = 640;

// -------------- data parsing for boundary -------------------------
// ----- collisions/barrier tiles ------
const collisionsMapMain = [];
//parse JSON file to produce arrays of the array for collisions
for (let i = 0; i < collisions.length; i += 20){
   collisionsMapMain.push(collisions.slice(i, 20 + i))
}

// ----- instance/warp tiles  ------
const instancesMapMain = [];
//parse JSON file to produce arrays of the array for battleZones
for (let i = 0; i < instancesData.length; i += 20){
    instancesMapMain.push(instancesData.slice(i, 20 + i))
}
let onWarpTile = false;
let justWarped = false;
// ----- battleZsone tiles ------
const battleZonesMapMain = [];
//parse JSON file to produce arrays of the array for battleZones
for (let i = 0; i < battleZonesData.length; i += 20){
    battleZonesMapMain.push(battleZonesData.slice(i, 20 + i))
}

// -------------- collision boundary code -------------------------
// define empty boundaries arrays for each type needed
const boundariesMain = [];
const instanceZonesMain = [];
const battleZonesMain = [];

// define the offset of images within the map
const offsetMain = {
    x: -275,
    y: -350
}

// ----- check collisions array and create the matching boundaries ------
collisionsMapMain.forEach((row, i) => {
    row.forEach((symbol, j) => {
        // check json map file for correct num val.
        if (symbol === 2475)
            boundariesMain.push(
                // create new boundary class object 
                new Boundary({
                    position: {
                        x: j * Boundary.width + offsetMain.x,
                        y: i * Boundary.height + offsetMain.y
                    },
                    color: "rgba(255, 0, 0, 0.7)",
                    isWarp: false,
                    isWall: true,
                    isBZ: false
                })
            );

    });
});

// ----- check instance zones array and create the matching boundaries ------
instancesMapMain.forEach((row, i) => {
    row.forEach((symbol, j) => {
        // check json map file for correct num val.
        if (symbol === 2476)
            instanceZonesMain.push(
                // create new boundary class object 
                new Boundary({
                    position: {
                        x: j * Boundary.width + offsetMain.x,
                        y: i * Boundary.height + offsetMain.y
                    },
                    color: "rgba(255, 255, 255, 0.7)",
                    isWarp: true,
                    isWall: false,
                    isBZ: false
                })
            );

    });
});

// ----- check battlezones array and create the matching boundaries ------
battleZonesMapMain.forEach((row, i) => {
    row.forEach((symbol, j) => {
        // check json map file for correct num val.
        if (symbol === 2477)
            battleZonesMain.push(
                // create new boundary class object 
                new Boundary({
                    position: {
                        x: j * Boundary.width + offsetMain.x,
                        y: i * Boundary.height + offsetMain.y
                    },
                    color: "rgba(255, 255, 0, 0.7)",
                    isWarp: false,
                    isWall: false,
                    isBZ: true
                })
            );

    });
});

// -------------- main map sprite code -------------------------
// ----- define sprite images ------
//  main background map
const mainMap = new Image();
mainMap.src = "images/maps/map.png";

// main map foreground objects (walk-behind)
const mainMapForeground = new Image();
mainMapForeground.src = "images/maps/foregroundObjects.png";

// main player/character
const playerImage = new Image();
playerImage.src = "images/char3.png";

// test npc 
const NPCOneImage = new Image();
NPCOneImage.src = "images/testNPC.png";

// ----- create sprite class objects ------
// ----- character/player sprites ------
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
    animate: true,
    scale: 1
})

// test NPC
const npcOne = new Sprite({
    position: {
        x: (canvas.width / 2 - 384 / 8) - 375,
        y: (canvas.height / 2 - 192 / 4) - 120
    },
    image: NPCOneImage,
    frames: {
        col: 8,
        row: 4,
        hold: 10
    },
    animate: false,
    scale: 1
})

// ----- main map sprites ------
// background
const backgroundMain = new Sprite({
    position: {
        x: offsetMain.x, 
        y: offsetMain.y
    },
    image: mainMap,
    frames: {
        col: 4,
        row: 1,
        hold: 30
    },
    animate: true,
    scale: 1
})

// foreground
const foregroundMain = new Sprite({
    position: {
        x: offsetMain.x, 
        y: offsetMain.y
    },
    image: mainMapForeground,
    scale: 1
})

// -------------- main map movement and collision controller code -------------------------
// ----- create keys object to track specific key presses ------
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

// ----- create moveables array which contains the items which should move when the player moves ------
const moveablesMain = [backgroundMain, ...boundariesMain, foregroundMain, ...instanceZonesMain, ...battleZonesMain, npcOne]
// ----- create the rectangle in which a collision will occur ------
function rectanglularCollision({rectangle1, rectangle2}) {
    return (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x && 
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y
    )
}

// ----- battle object to control status (e.g. in or out of battle) ------
const battle = {
    initiated: false 
}

// -------------- main map animate function  -------------------------
function animateMain() {
    const animationIdMain = window.requestAnimationFrame(animateMain);
    // draw game map
    backgroundMain.draw();
    // draw collision boundaries
    boundariesMain.forEach((boundary) => {
        boundary.draw()
    });
    // draw instance tile boundaries
    instanceZonesMain.forEach((instanceZone) => {
        instanceZone.draw()

    });
    
    // draw battlezone boundaries
    battleZonesMain.forEach((battleZone) => {
        battleZone.draw()
    });
    // draw NPC characters
    npcOne.draw();
    // draw player character
    player.draw();
    // draw foreground ** note drawn after player to ensure player can wlak behind those images
    foregroundMain.draw();

    // ----- movement tracking ------
    // define inital moving variable to true
    let moving = true;
    // set player animate property to false (no animation by default)
    player.animate = false;

    // set warp tile status 
    // let onWarpTile = false;

    // ----- stopping movement ------
    // console.log(animationId)
    if (battle.initiated) return

    // ----- checking for collisions in the battle zone tiles whilst moving  ------
    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
        // ----- loop through the battleZones array------
        for (let i = 0; i < battleZonesMain.length; i++){
            // define new variable 
            const battleZone = battleZonesMain[i]
            // calculation to check if player is overlapping with the battleZone boundary
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
                
            // ----- check if the player is inside the battle zone ------
            if (
                rectanglularCollision({
                    rectangle1: player, 
                    rectangle2: battleZone
                }) &&
                // if the val is set lower (< 1), the event will trigger less frequently.
                overlappingArea > (player.width * player.height) / 2
                && Math.random() < 0.01
            ) {
                console.log("battle activated")
                // -----  if the player is verfied as inside the boundary then do the following: ------
                // deactivate current animation loop
                window.cancelAnimationFrame(animationIdMain)
                // stop the map audio 
                audio.map.stop()
                // play the battle map audio
                audio.initBattle.play()
                audio.battle.play()
                // change battle initiated status to true
                battle.initiated = true

                // -----  the following code controls the animation frames before entering the battle map: ------
                // -----  GSAP library animation settings ------
                // initial black flash
                gsap.to("#battleFlash", {
                    opacity: 1,
                    // flash three times
                    repeat: 3,
                    // end on black screen
                    yoyo: true,
                    duration: 0.4,
                    // show battle screen at the end of animation
                    onComplete() {
                        gsap.to("#battleFlash", {
                            opacity: 1,
                            duration: 0.4, 
                            onComplete() {
                                // -----  activate new animation loop only when animation is complete ------
                                // run init battle function
                                initBattle();
                                // then run the animate battle function
                                animateBattle();
                                // remove black screen once aniation had loaded
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
    // ----- checking for collisions in the instance zone tiles whilst moving  ------
    // ----- loop through the instances array------
    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
        let warpTileIndex = ""
        // loop through array
        for (let i = 0; i < instanceZonesMain.length; i++){
            // define new variable 
            const instanceZone = instanceZonesMain[i]
            
            // calculation to check if player is overlapping with the instance boundary
            const overlappingArea = (
                Math.min(player.position.x + player.width, instanceZone.position.x + instanceZone.width) - Math.max(player.position.x, instanceZone.position.x)) * (Math.min(player.position.y + player.height, instanceZone.position.y + instanceZone.height) - Math.max(player.position.y, instanceZone.position.y)
            )
            // const test = instanceZonesMain.map((tile, index)=> {
            //     if(tile.position === player.position) {
            //         console.log(`current tile index is ${index} and pos-x is ${tile.position.x} and pos-y is ${tile.position.y}`)
            //         tileIndex.push(index)
            //         console.log(tileIndex)
            //         onWarpTile = true
            //     }
                
            // })
            // ----- check if the player is inside the instance ------
            if (rectanglularCollision({rectangle1: player, rectangle2: instanceZone}) &&
                // if the val is set lower (1 max), the event will trigger less frequently.
                overlappingArea > (player.width * player.height) / 2 && justWarped === false ) {
                console.log("stanidng on warp tile")
                
                // grab index for the speciifc warp tile on the map
                instanceZonesMain.map((tile, index)=> {
                    if(instanceZone.position === tile.position) {
                        warpTileIndex = 2
                        console.log(`current tile index is ${index} and WTI is ${warpTileIndex}.`)
                    }
                })
                onWarpTile = true
            } else if(rectanglularCollision({rectangle1: player, rectangle2: instanceZone}) &&
                // if the val is set lower (1 max), the event will trigger less frequently.
                overlappingArea > (player.width * player.height) / 2 && onWarpTile === true && justWarped === true){
                    instanceZonesMain.map((tile, index)=> {
                        if(instanceZone.position === tile.position) {
                            warpTileIndex = 2
                            console.log(`current tile index is ${index} and WTI is ${warpTileIndex}.`)
                        } 
                    })
            } 
            // -----  if the player is verfied as inside the boundary then do the following: ------
            // deactivate current animation loop
            if(onWarpTile === true && warpTileIndex === 2) {
                console.log("warp tile activated")
                justWarped = true;
                window.cancelAnimationFrame(animationIdMain)
                console.log("cancelled animation")
                // warp tile sound
                audio.warpTile.play()
                // stop the map audio 
                audio.map.stop()
                // -----  the following code controls the animation frames before entering the new map: ------
                // -----  GSAP library animation settings ------
                // initial black flash
                gsap.to("#battleFlash", {
                    opacity: 1, 
                    // flash three times
                    repeat: 2,
                    // end on black screen
                    yoyo: true,
                    duration: 0.4,
                    // show battle screen at the end of animation
                    onComplete() {
                        gsap.to("#battleFlash", {
                            opacity: 1,
                            duration: 0.4, 
                            onComplete() {
                                // -----  activate new animation loop only when animation is complete ------
                                // run init new map function
                                // initBattle();
                                onWarpTile = false;
                                console.log(`onWarp tile is ${onWarpTile}`)
                                // then run the animate battle function
                                animateCave();
                                // play new audio
                                audio.cave.play()

                                // remove black screen once aniation had loaded
                                gsap.to("#battleFlash", {
                                    opacity: 0,
                                    duration: 0.4
                                })
                                setTimeout(() => {
                                    justWarped = false;
                                    console.log(`warp tile deactivated`)
                                }, 3000);
                            }
                        })
                    }
                })
                break
            }
        }
    }
    // ----- W, A, S, D movement code with collisions  ------ 
    // ----- w / up key controller ------ 
    if (keys.w.pressed && lastKey === "w") {
        // set animation frame for player sprite object
        player.frames.rowVal = 3
        player.animate = true
        //boundary collisions
        for (let i = 0; i < boundariesMain.length; i++){
            const boundary = boundariesMain[i]
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
                // set moving to false
                moving = false 
                break
            }
        }
        // stop movement 
        if(moving)
            moveablesMain.forEach((movable) => {
                movable.position.y += 3
        })
    // ----- a / left key controller ------ 
    } else if (keys.a.pressed && lastKey === "a") {
        // set animation frame for player sprite object
        player.frames.rowVal = 1
        player.animate = true
        for (let i = 0; i < boundariesMain.length; i++){
            const boundary = boundariesMain[i]
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
                // set moving to false
                moving = false 
                break
            }
        }
        // stop movement 
        if(moving)
        moveablesMain.forEach((movable) => {
            movable.position.x += 3
        })
        // ----- s / down key controller ------ 
    } else if (keys.s.pressed && lastKey === "s") {
        // set animation frame for player sprite object
        player.frames.rowVal = 0
        player.animate = true
        for (let i = 0; i < boundariesMain.length; i++){
            const boundary = boundariesMain[i]
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
                // set moving to false
                moving = false 
                break
            }
        }
        // stop movement 
        if(moving)
        moveablesMain.forEach((movable) => {
            movable.position.y -= 3
        })
        // ----- d key controller ------ 
    } else if (keys.d.pressed && lastKey === "d") {
        // set animation frame for player sprite object
        player.frames.rowVal = 2
        player.animate = true
        for (let i = 0; i < boundariesMain.length; i++){
            const boundary = boundariesMain[i]
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
                // set moving to false
                moving = false 
                break
            }
        }
        // stop movement 
        if(moving)
        moveablesMain.forEach((movable) => {
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
    }
});

// -------------------- all player skill bar utility ------------------------------------
// ----- skill button and eventlistener tracking object ------
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
    },
    skillTab: {
        open: false
    }
}
// ----- menu click function ------
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
    if(e.key === "z" && menuToggle.skillTab.open === false) {
        document.querySelector("#charSkills").style.display = "grid";
        menuToggle.skillTab.open = true
    } else if (e.key === "z" && menuToggle.skillTab.open === true ) {
        document.querySelector("#charSkills").style.display = "none";
        menuToggle.skillTab.open = false
    }
})

// grab and assign sprite image
const punchImage = new Image()
punchImage.src = "./images/fireball.png"
// create the new sprite
const punch = new Sprite({
    position: {
        x: player.position.x,
        y: player.position.y
    },
    image: punchImage,
    frames: {
        col: 4,
        row: 1,
        hold: 10
    },
    animate: true,
    scale: 1
    
})
punch.draw()