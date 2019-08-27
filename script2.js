function calculateArea(figure, ...parameters) {
    let area;
    switch (figure) {
        case 'square':
            area = parameters[0] * parameters[0];
            break;
        case 'circle':
            area = Math.PI * parameters[0] * parameters[0];
            break;
        case 'rectangle':
            area = parameters[0] * parameters[1];
            break;
        default:
            break;
    }
    return {
        area: area,
        figure: figure,
        input: parameters
    };
}

console.log(calculateArea('square', 5));
console.log(calculateArea('circle', 2.5));
console.log(calculateArea('rectangle', 2.5, 5));
console.log(calculateArea('triangle', 2.5, 5));
