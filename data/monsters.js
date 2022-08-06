// -=-------- image variables ---------
// -- Emby
const embyImage = new Image();
embyImage.src = "images/embySprite.png";
// --Draggle
const draggleImage = new Image();
draggleImage.src = "images/draggleSprite.png";
// -------------- monsters array ---------------
const monsters = {
    Emby: {
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
        name: "Emby",
        attacks: [attacks.Tackle, attacks.Fireball]
    },
    Draggle: {
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
        name: "Draggle",
        attacks: [attacks.Tackle]
    }
}
