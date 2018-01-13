export const DataProvider = {
    heroes: [
        {id: 100, name: "Станнис Баратеон", edit: false},
        {id: 200, name: "Джоффри Баратеон", edit: false},
        {id: 300, name: "Робб Старк", edit: false},
        {id: 400, name: "Тириона Ланнистера", edit: false},
        {id: 500, name: "Санса Старк", edit: true},
        {id: 600, name: "Джон Сноу", edit: true},
        {id: 700, name: "Серсея", edit: false}
    ],
    all: function () {
        return this.heroes
    },
    byId: function (id) {
        //const isHeroe = p => p.id == id;
        //return this.heroes.find(isHeroe);
        for (var i = 0; i < this.heroes.length; i++) {
            if (this.heroes[i].id == id) {
                return this.heroes[i];
            }
        }
        return null;
    },
    filterData: function (value) {
        const rows = [];
        this.all().forEach(function (item) {
            if (item.name.toUpperCase().indexOf(value.toUpperCase()) != -1) {
                rows.push(item);
            }
        });
        return rows;
    }


}