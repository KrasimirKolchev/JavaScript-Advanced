(function () {
    let id = 0;

    return class Extensible {
        constructor() {
            this.id = id++;
        }

        extend(template) {
            for (const el in template) {
                if (typeof template[el] === "function") {
                    Extensible.prototype[el] = template[el];
                } else {
                    this[el] = template[el];
                }
            }
        }
    }
})();
