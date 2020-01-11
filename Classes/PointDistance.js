class Point {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    getX() {return this.x};
    getY() {return this.y};

    static distance(p1, p2) {
        return Math.sqrt(Math.pow((p2.getX() - p1.getX()), 2) + Math.pow((p2.getY() - p1.getY()), 2));
    }
}
