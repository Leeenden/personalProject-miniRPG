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
    init() {
        if(warrior.level === 1) {
            quests.forEach((questInfo) => {
                if(questInfo.id === this.level) {
                    warrior.allQuests.push(questInfo);
                };  
            })
        }
        console.log(warrior.allQuests)
    }
    next() {
        quests.forEach((questInfo) => {
            if(questInfo.id === 2) {
                warrior.allQuests.push(questInfo);
                console.log(warrior.allQuests);
                warrior.displayQuests()
            };  
        })
    }
    complete() {
        this.completed = true;
        this.active = "inactive"
        console.log("completed quest")
        this.next()
    }
    reward(){
        
    }
    
}

// define all quests available 
let quest1 
quest1 = new Quest(quests.One)

let quest2 
quest2 = new Quest(quests.Two)