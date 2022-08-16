const quests = {
    One: {
        name: "The beginning",
        description: "Speak to the NPC",
        type: "Talk",
        level: 1,
        reqs: {
            npc: {
                count: 1,
                target: "",
            },
            items: {
                count: 0,
                target: "",
            },
            mobs: {
                count: 0,
                target: "",
            },
            boss: {
                count: 0,
                target: ""

            }
        },
        status: "Active",
        completed: true,
        reward (min, max) {
            min = 1 
            max = 3
            return Math.floor(Math.random() * (max - min + 1) + min)
        },
    },
}