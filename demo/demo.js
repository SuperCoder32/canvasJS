let vx = 0, vy = 0;
let x = canvas.width/2, y = canvas.height/2;

function update() {
    x += vx;
    y += vy;
}

context.strokeStyle = 'black';

function draw() {
    context.fillRect(x, y, 50, 50);

    for (let rect of rects) {
        let x = rect.x, y = rect.y;
        context.lineWidth = 10;
        context.strokeRect(x, y, 20, 20);
    }
}

function keydown(key) {
    switch(key) {
        case 'w':
            vy = -5;
            break;
        case 's':
            vy = +5;
            break;
        case 'a':
            vx = -5;
            break;
        case 'd':
            vx = +5;
            break;
    }
}

function keyup(key) {
    switch(key) {
        case 'w':
        case 's':
            vy = 0;
            break;
        case 'a':
        case 'd':
            vx = 0;
            break;
    }
}

let rects = [];
function mousedown() {
    rects.push({
        x: mouseX,
        y: mouseY
    });
}

init({
    fullScreen: true,
    updateDelay: 10,
    clear: true
});
