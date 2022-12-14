const skills = {
    One: {
        name: "Punch",
        description: "A feeble punch",
        type: "Attack",
        color: "black",
        level: 2,
        rank: "Novice",
        image: {
            src: "./images/skills/punchIcon.png"
        },
        effect (min, max) {
            min = 1 
            max = 3
            return Math.floor(Math.random() * (max - min + 1) + min)
        },
        effectType: "Active",
        cooldown: 300,
    },
    Two: {
        name: "Swing",
        description: "A weak sword swing.",
        type: "Attack",
        color: "black",
        level: 3,
        rank: "Novice",
        image: {
            src: "./images/skills/swing.png"
        },
        effect (min, max) {
            min = 3 
            max = 5
            return Math.floor(Math.random() * (max - min + 1) + min)
        },
        effectType: "Active",
        cooldown: 500,
    },
    Three: {
        name: "Stab",
        description: "A weak sword stab.",
        type: "Attack",
        color: "black",
        level: 3,
        rank: "Novice",
        image: {
            src: "./images/skills/stab.png"
        },
        damage: randomInt = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min)
        },
        effect: randomInt(4, 7),
        effectType: "Active",
        cooldown: 1000,
    },
    Four: {
        name: "Shout",
        description: "A loud shout to raise attack.",
        type: "CC",
        color: "black",
        level: 4,
        rank: "Novice",
        image: {
            src: "./images/skills/shout.png"
        },
        damage: fixedBuff = (min) => {
            return Math.floor(Math.random() * (min + 1) + min)
        },
        effect: fixedBuff(10),
        effectType: "Active",
        cooldown: 5000,
    },
    Five: {
        name: "Roar",
        description: "A loud scream to raise defense.",
        type: "CC",
        color: "black",
        level: 5,
        rank: "Novice",
        image: {
            src: "./images/skills/roar.png"
        },
        damage: fixedBuff = (min) => {
            return Math.floor(Math.random() * (min + 1) + min)
        },
        effect: fixedBuff(10),
        effectType: "Active",
        cooldown: 5000,
    },
    Six: {
        name: "Slice",
        description: "A quick sword slice.",
        type: "Attack",
        color: "black",
        level: 6,
        rank: "Novice",
        image: {
            src: "./images/skills/slice.png"
        },
        damage: randomInt = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min)
        },
        effect: randomInt(6, 7),
        effectType: "Active",
        cooldown: 5000,
    },
}