// ----------------- Quest class -----------------------------
class Quest {
    constructor(
        id = "",
        name = "",
        description = "",
        type = "",
        level = 1,
        reqs = {
            npc: {
                count: "",
                target: "",
            },
            items: {
                count: "",
                target: "",
            },
            mobs: {
                count: "",
                target: "",
            },
            boss: {
                count: "",
                target: ""

            }
        },
        status = "",
        completed = "",
        reward = ""
    ) {
        this.id = id,
        this.name = name,
        this.description = description,
        this.type = type,
        this.level = level,
        this.reqs = reqs,
        this.status = status,
        this.completed = completed,
        this.reward = reward
    }
    complete() {
        console.log(this.completed)
        this.completed = true;
        console.log("completed quest")
        console.log(this.completed)
    }
    init() {
        if(this.level === 1) {
            quests.forEach((questInfo) => {
                if(questInfo.level === this.level) {
                    warrior.allQuests.push(questInfo);
                };  
            })
        }
        console.log(warrior.allQuests)
    }
    new(){
        warrior.allQuests.forEach((questInfo) => {
            if(questInfo.completed === true) {
                console.log(questInfo.completed)
            };  
        })
    }
}

// define all quests available 
let quest1 
quest1 = new Quest(quests.One)

let quest2 
quest2 = new Quest(quests.Two)