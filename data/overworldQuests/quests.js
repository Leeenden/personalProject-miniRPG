const quests = [
    One = {
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
        completed: false,
        reward: 2,
    },
    Two = {
        id: 2,
        name: "A small task",
        description: "Collect 1 item",
        type: "Gather",
        level: 2,
        reqs: {
            npc: {
                count: 1,
                target: "",
            },
            items: {
                count: 1,
                target: "mushroom",
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
        status: "Inactive",
        completed: false,
        reward: 6,
    },
    Three = {
        id: 3,
        name: "Fist fight!",
        description: "Use punch on warrior NPC",
        type: "Fight",
        level: 2,
        reqs: {
            npc: {
                count: 1,
                target: "",
            },
            items: {
                count: 1,
                target: "mushroom",
            },
            mobs: {
                count: 0,
                target: "",
            },
            boss: {
                count: 1,
                target: "NPC1"
            }
        },
        status: "Inactive",
        completed: false,
        reward: 10,
    },
]