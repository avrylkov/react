export const DataProvider = {
    heroes: [
        {id: 100, name: "Станнис Баратеон", edit: false},
        {id: 200, name: "Джоффри Баратеон", edit: false},
        {id: 300, name: "Робб Старк", edit: false},
        {id: 400, name: "Тирион", edit: false}
    ],
    all: function() { return this.heroes},
    byId: function(id) {
        const isHeroe = p => p.id === id
        return this.heroes.find(isPlayer)
    }
}