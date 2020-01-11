class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    set diameter(value) {
        this.radius = value / 2;
    }
    get area() {
        return Number(Math.PI * Math.pow(this.radius, 2));
    }
}
