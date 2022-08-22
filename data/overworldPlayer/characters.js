const characters = {
    Player: {
        stats: {
            Health: 100,
            Stamina: 100, 
            Mana: 100, 
            Attack: 15, 
            Defense: 15, 
            Speed: 15
        },
        isPlayer: true,
        isNPC: false,
        allQuests: [],
        activeQuests: []
    },
    NPC1: {
        stats: {
            Health: 500,
            Stamina: 500, 
            Mana: 500, 
            Attack: 150, 
            Defense: 150, 
            Speed: 150
        },
        isPlayer: false,
        isNPC: true,
        allQuests: [quests.One],
        activeQuests: [quests.One]
    }
}
