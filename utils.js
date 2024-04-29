export function randomColor() {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
    return colors[Math.floor(Math.random() * colors.length)];
}

export function randomShape() {
    const shapes = ['circle', 'square', 'triangle', 'oval', 'rectangle'];
    return shapes[Math.floor(Math.random() * shapes.length)];
}
