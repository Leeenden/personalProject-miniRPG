// -------------- second map sprite code -------------------------
// -------------- data parsing for boundary -------------------------
// ----- collisions/barrier tiles ------
const collisionsMapCaveLower = [];
//parse JSON file to produce arrays of the array for collisions
for (let i = 0; i < caveCollisionsLower.length; i += 20){
   collisionsMapCaveLower.push(caveCollisionsLower.slice(i, 20 + i))
}

// ----- instance/warp tiles  ------
const instancesMapCaveLower = [];
//parse JSON file to produce arrays of the array for battleZones
for (let i = 0; i < caveInstancesLower.length; i += 20){
    instancesMapCaveLower.push(caveInstancesLower.slice(i, 20 + i))
}

// // ----- battleZsone tiles ------
// const battleZonesMapCave = [];
// //parse JSON file to produce arrays of the array for battleZones
// for (let i = 0; i < battleZonesData.length; i += 20){
//     battleZonesMapCave.push(battleZonesData.slice(i, 20 + i))
// }

// -------------- collision boundary code -------------------------
// define empty boundaries arrays for each type needed
const boundariesCaveLower = [];
const instanceZonesCaveLower = [];
// const battleZonesCaveLower = [];

// define the offset of images within the map
let offsetCaveLower = {
    x: 125,
    y: -235
}

// ----- check collisions array and create the matching boundaries ------
collisionsMapCaveLower.forEach((row, i) => {
    row.forEach((symbol, j) => {
        // check json map file for correct num val.
        if (symbol === 2475)
            boundariesCaveLower.push(
                // create new boundary class object 
                new Boundary({
                    position: {
                        x: j * Boundary.width + offsetCaveLower.x,
                        y: i * Boundary.height + offsetCaveLower.y
                    },
                    color: "rgba(255, 0, 0, 0.7)"
                })
            );

    });
});

// ----- check instance zones array and create the matching boundaries ------
instancesMapCaveLower.forEach((row, i) => {
    row.forEach((symbol, j) => {
        // check json map file for correct num val.
        if (symbol === 2476)
            instanceZonesCaveLower.push(
                // create new boundary class object 
                new Boundary({
                    position: {
                        x: j * Boundary.width + offsetCaveLower.x,
                        y: i * Boundary.height + offsetCaveLower.y
                    },
                    color: "rgba(255, 255, 255, 0.7)"
                })
            );

    });
});

// ----- check battlezones array and create the matching boundaries ------
// battleZonesMapMain.forEach((row, i) => {
//     row.forEach((symbol, j) => {
//         // check json map file for correct num val.
//         if (symbol === 2477)
//             battleZonesMain.push(
//                 // create new boundary class object 
//                 new Boundary({
//                     position: {
//                         x: j * Boundary.width + offset.x,
//                         y: i * Boundary.height + offset.y
//                     },
//                     color: "rgba(255, 255, 0, 0.7)"
//                 })
//             );

//     });
// });

// ----- define sprite images ------
//  main background map
const caveMapLower = new Image();
caveMapLower.src = "images/maps/practiceLowerCave.png";

// main map foreground objects (walk-behind)
const caveMapLowerForeground = new Image();
caveMapLowerForeground.src = "images/maps/practiceLowerCaveForeground.png";

// ----- main map sprites ------
// background
const backgroundCaveLower = new Sprite({
    position: {
        x: offsetCaveLower.x, 
        y: offsetCaveLower.y
    },
    image: caveMapLower,
    frames: {
        col: 1,
        row: 1,
        hold: 30
    },
    animate: false,
    scale: 1
})

// foreground
const foregroundCaveLower = new Sprite({
    position: {
        x: offsetCaveLower.x, 
        y: offsetCaveLower.y
    },
    image: caveMapLowerForeground,
    scale: 1
})

// ----- create moveables array which contains the items which should move when the player moves ------
const moveablesCaveLower = [backgroundCaveLower, ...boundariesCaveLower, foregroundCaveLower, ...instanceZonesCaveLower]

// -------------- main map animate function  -------------------------
function animateCaveLower() {
    const animationIdCaveLower = window.requestAnimationFrame(animateCaveLower);
    // draw game map
    backgroundCaveLower.draw();
    // draw collision boundaries
    boundariesCaveLower.forEach((boundary) => {
        boundary.draw()
    });
    // draw instance tile boundaries
    instanceZonesCaveLower.forEach((instanceZone) => {
        instanceZone.draw()
    });
    // draw battlezone boundaries
    // battleZonesCave.forEach((battleZone) => {
    //     battleZone.draw()
    // });
    
    // draw player character
    player.draw();
    // draw foreground ** note drawn after player to ensure player can wlak behind those images
    foregroundCaveLower.draw();

    // ----- movement tracking ------
    // define inital moving variable to true
    let moving = true;
    // set player animate property to false (no animation by default)
    player.animate = false;
    // ----- stopping movement ------
    // console.log(animationId)
    // if (battle.initiated) return

    // ----- checking for collisions in the battle zone tiles whilst moving  ------
    // if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
    //     // ----- loop through the battleZones array------
    //     for (let i = 0; i < battleZonesCave.length; i++){
    //         // define new variable 
    //         const battleZone = battleZonesCave[i]
    //         // calculation to check if player is overlapping with the battleZone boundary
    //         const overlappingArea = 
    //             (Math.min(
    //                 player.position.x + player.width, 
    //                 battleZone.position.x + battleZone.width
    //             ) - 
    //                 Math.max(player.position.x, battleZone.position.x)) * 
    //             (Math.min(
    //                 player.position.y + player.height, 
    //                 battleZone.position.y + battleZone.height
    //             ) - Math.max(player.position.y, battleZone.position.y))
                
    //         // ----- check if the player is inside the battle zone ------
    //         if (
    //             rectanglularCollision({
    //                 rectangle1: player, 
    //                 rectangle2: battleZone
    //             }) &&
    //             // if the val is set lower (< 1), the event will trigger less frequently.
    //             overlappingArea > (player.width * player.height) / 2
    //             && Math.random() < 0.01
    //         ) {
    //             console.log("battle activated")
    //             // -----  if the player is verfied as inside the boundary then do the following: ------
    //             // deactivate current animation loop
    //             window.cancelAnimationFrame(animationIdCave)
    //             // stop the map audio 
    //             audio.map.stop()
    //             // play the battle map audio
    //             audio.initBattle.play()
    //             audio.battle.play()
    //             // change battle initiated status to true
    //             battle.initiated = true

    //             // -----  the following code controls the animation frames before entering the battle map: ------
    //             // -----  GSAP library animation settings ------
    //             // initial black flash
    //             gsap.to("#battleFlash", {
    //                 opacity: 1,
    //                 // flash three times
    //                 repeat: 3,
    //                 // end on black screen
    //                 yoyo: true,
    //                 duration: 0.4,
    //                 // show battle screen at the end of animation
    //                 onComplete() {
    //                     gsap.to("#battleFlash", {
    //                         opacity: 1,
    //                         duration: 0.4, 
    //                         onComplete() {
    //                             // -----  activate new animation loop only when animation is complete ------
    //                             // run init battle function
    //                             initBattle();
    //                             // then run the animate battle function
    //                             animateBattle();
    //                             // remove black screen once aniation had loaded
    //                             gsap.to("#battleFlash", {
    //                                 opacity: 0,
    //                                 duration: 0.4
    //                             })
    //                         }
    //                     })
    //                 }
    //             })
    //             break
    //         } 
    //     }
    // }
    // ----- checking for collisions in the instance zone tiles whilst moving  ------
    // ----- loop through the instances array ------
    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
        // empty warp index array
        let warpTileIndex = []
        // loop through array
        for (let i = 0; i < instanceZonesCaveLower.length; i++){
            // define new variable 
            const instanceZone = instanceZonesCaveLower[i]
            
            // calculation to check if player is overlapping with the instance boundary
            const overlappingArea = 
                (Math.min(
                    player.position.x + player.width, 
                    instanceZone.position.x + instanceZone.width
                ) - 
                    Math.max(player.position.x, instanceZone.position.x)) * 
                (Math.min(
                    player.position.y + player.height, 
                    instanceZone.position.y + instanceZone.height
                ) - Math.max(player.position.y, instanceZone.position.y))
            
            // ----- check if the player is inside the instance zone ------
            if (rectanglularCollision({rectangle1: player, rectangle2: instanceZone}) &&
                // if the val is set lower (1 max), the event will trigger less frequently.
                overlappingArea > (player.width * player.height) / 2 && justWarped === false ) {
                console.log("on tile, ready to warp")
                instanceZonesCaveLower.map((tile, index)=> {
                    if(instanceZone.position === tile.position) {
                        warpTileIndex = index
                        console.log(`current tile index is ${index} and WTI is ${warpTileIndex}.`)
                    }
                })
                onWarpTile = true
            } else if(rectanglularCollision({rectangle1: player, rectangle2: instanceZone}) &&
                // if the val is set lower (1 max), the event will trigger less frequently.
                overlappingArea > (player.width * player.height) / 2 && onWarpTile === true && justWarped === true){ 
                    instanceZonesCaveLower.map((tile, index)=> {
                        if(instanceZone.position === tile.position) {
                            warpTileIndex = index
                            console.log(`current tile index is ${index} and WTI is ${warpTileIndex}.`)
                        }
                    })    
            } 
            // -----  if the player is verfied as inside the boundary then do the following: ------
            // if on the correct tile and warp statsu has been verfied
            if(onWarpTile === true && justWarped === false) {
                console.log("warp tile activated")
                justWarped = true;
                window.cancelAnimationFrame(animationIdCaveLower)
                console.log("cancelled animation")
                // warp tile sound
                audio.warpTile.play()
                // stop the map audio 
                audio.cave.stop()
                // -----  the following code controls the animation frames before entering the new map: ------
                // -----  GSAP library animation settings ------
                // initial black flash
                gsap.to("#battleFlash", {
                    opacity: 1, 
                    duration: 0.7,
                    // show battle screen at the end of animation
                    onComplete() {
                        onWarpTile = false;
                        console.log(`onWarp tile is ${onWarpTile}`)
                        if(warpTileIndex === 1) {
                            // -----  activate new animation loop only when animation is complete ------
                            // run init new map function
                            // initBattle();
                            
                            // then run the animate battle function
                            animateMain();
                            // play new audio
                            audio.map.play()
                            
                        } else if (warpTileIndex === 0) {
                            // then run the animate function
                            animateCave();
                            // play new audio
                            audio.cave.play()
                            // remove black screen once aniation had loaded
                        }
                        gsap.to("#battleFlash", {
                            opacity: 0,
                            duration: 0.7
                        })
                        setTimeout(() => {
                            justWarped = false;
                            console.log(`warp tile deactivated`)
                        }, 3000);
                    }

                })
                break
            }
        }
    }
    // ----- W, A, S, D movement code  ------ 
    // ----- w / up key controller ------ 
    if (keys.w.pressed && lastKey === "w") {
        // set animation frame for player sprite object
        player.frames.rowVal = 3
        player.animate = true
        //boundary collisions
        for (let i = 0; i < boundariesCaveLower.length; i++){
            const boundary = boundariesCaveLower[i]
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
            moveablesCaveLower.forEach((movable) => {
                movable.position.y += 3
        })
    // ----- a / left key controller ------ 
    } else if (keys.a.pressed && lastKey === "a") {
        // set animation frame for player sprite object
        player.frames.rowVal = 1
        player.animate = true
        for (let i = 0; i < boundariesCaveLower.length; i++){
            const boundary = boundariesCaveLower[i]
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
        moveablesCaveLower.forEach((movable) => {
            movable.position.x += 3
        })
        // ----- s / down key controller ------ 
    } else if (keys.s.pressed && lastKey === "s") {
        // set animation frame for player sprite object
        player.frames.rowVal = 0
        player.animate = true
        for (let i = 0; i < boundariesCaveLower.length; i++){
            const boundary = boundariesCaveLower[i]
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
        moveablesCaveLower.forEach((movable) => {
            movable.position.y -= 3
        })
        // ----- d key controller ------ 
    } else if (keys.d.pressed && lastKey === "d") {
        // set animation frame for player sprite object
        player.frames.rowVal = 2
        player.animate = true
        for (let i = 0; i < boundariesCaveLower.length; i++){
            const boundary = boundariesCaveLower[i]
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
        moveablesCaveLower.forEach((movable) => {
            movable.position.x -= 3
        })
    }
}