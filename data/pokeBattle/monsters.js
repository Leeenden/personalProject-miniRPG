// -------------- monsters array ---------------
const monsters = {
    Emby: {
        position: {
        x: 225,
        y: 375
        },
        image: {
            src: "./images/sprites/embySprite.png"
        },
        frames: {
            col: 4,
            row: 1,
            hold: 30
        },
        animate: true,
        name: "Emby",
        attacks: [attacks.Tackle, attacks.Fireball, attacks.Mudthrow, attacks.Gust]
    },
    Draggle: {
        position: {
            x: 710,
            y: 175
        },
        image: {
            src: "./images/sprites/draggleSprite.png"
        },
        frames: {
            col: 4,
            row: 1,
            hold: 30
        },
        animate: true,
        isEnemy:  true,
        name: "Draggle",
        attacks: [attacks.Tackle, attacks.Fireball]
    }
}
