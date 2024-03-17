let canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext("2d");

let circleNum = 300;

let colorArray = [
    '#2B3A42',
    '#3F5765',
    '#BDD4DE',
    '#EFEFEF',
    '#FF530D'
];

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
});

function Circle(x, y, dx, dy, r) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function () {
        context.beginPath();
        context.arc(this.x, this.y, this.r, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
    }

    this.update = function () {
        if (this.x + this.r > canvas.width || this.x - this.r < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.r > canvas.height || this.y - this.r < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

function init() {
    circleArray = [];

    for (let i = 0; i < circleNum; i++) {
        let r = Math.random() * 3 + 7;
        let x = Math.random() * (canvas.width - r * 2) + r;
        let y = Math.random() * (canvas.height - r * 2) + r;
        let dx = (Math.random() - 0.5) * 3;
        let dy = (Math.random() - 0.5) * 3;

        circleArray.push(new Circle(x, y, dx, dy, r));
    }
}

let circleArray = [];

for (let i = 0; i < circleNum; i++) {
    let r = Math.random() * 3 + 8;
    let x = Math.random() * (canvas.width - r * 2) + r;
    let y = Math.random() * (canvas.height - r * 2) + r;
    let dx = (Math.random() - 0.5) * 5;
    let dy = (Math.random() - 0.5) * 5;

    circleArray.push(new Circle(x, y, dx, dy, r));
}
// console.log(circleArray);

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();