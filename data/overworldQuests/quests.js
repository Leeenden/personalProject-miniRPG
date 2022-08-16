const quests = {
    One: {
        id: 1,
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
        reward: 10
        ,
    },
}