const talents = {
    One: {
        name: "Rapid strikes",
        description: "Attack rapidly for 3 seconds",
        type: "Attack",
        color: "black",
        level: 2,
        rank: "Novice",
        image: {
            src: "./images/talents/rapidStrikes.png"
        },
        effect (min, max) {
            min = 1 
            max = 3
            return Math.floor(Math.random() * (max - min + 1) + min)
        },
        effectType: "Active",
        cooldown: 30000,
    },
    Two: {
        name: "Razor Sharp",
        description: "Your sharp blades may cut enemies",
        type: "Attack",
        color: "black",
        level: 2,
        rank: "Novice",
        image: {
            src: "./images/talents/razorSharp.png"
        },
        effect (min, max) {
            min = 1 
            max = 3
            return Math.floor(Math.random() * (max - min + 1) + min)
        },
        effectType: "Active",
        cooldown: 300,
    },
    Three: {
        name: "Titan Grip",
        description: "Strong grip makes swinging faster.",
        type: "Attack",
        color: "black",
        level: 2,
        rank: "Novice",
        image: {
            src: "./images/talents/titanGrip.png"
        },
        effect (min, max) {
            min = 1 
            max = 3
            return Math.floor(Math.random() * (max - min + 1) + min)
        },
        effectType: "Active",
        cooldown: 300,
    },
    Four: {
        name: "Rend",
        description: "A hard slash of your blade",
        type: "Attack",
        color: "black",
        level: 2,
        rank: "Novice",
        image: {
            src: "./images/talents/rend.png"
        },
        effect (min, max) {
            min = 1 
            max = 3
            return Math.floor(Math.random() * (max - min + 1) + min)
        },
        effectType: "Active",
        cooldown: 300,
    },
    Five: {
        name: "Blur",
        description: "Move quickly to create a blur.",
        type: "Attack",
        color: "black",
        level: 2,
        rank: "Novice",
        image: {
            src: "./images/talents/blur.png"
        },
        effect (min, max) {
            min = 1 
            max = 3
            return Math.floor(Math.random() * (max - min + 1) + min)
        },
        effectType: "Passive",
        cooldown: 300,
    },
    Six: {
        name: "Gouge",
        description: "A deep stab of your blade.",
        type: "Attack",
        color: "black",
        level: 2,
        rank: "Novice",
        image: {
            src: "./images/talents/gouge.png"
        },
        effect (min, max) {
            min = 1 
            max = 3
            return Math.floor(Math.random() * (max - min + 1) + min)
        },
        effectType: "Passive",
        cooldown: 300,
    },
}