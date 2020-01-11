(function result () {
    return {
        add: (vector1, vector2) => {return [vector1[0] + vector2[0], vector1[1] + vector2[1]];},
        multiply: (vector, scalar) => {return [vector[0] * scalar, vector[1] * scalar]},
        length: (vector) => {return Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1])},
        dot: (vector1, vector2) => {return (vector1[0] * vector2[0]) + (vector1[1] * vector2[1])},
        cross: (vector1, vector2) => {return (vector1[0] * vector2[1]) - (vector1[1] * vector2[0])}
    }
})();