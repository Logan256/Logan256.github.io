/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let particleWave1 = []
let particleWave2 = []

const numberOfParticles = 6000;

const gradient1 = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient1.addColorStop(0, 'whitesmoke');
gradient1.addColorStop(1, 'black');

class Particle {
    constructor() {

        this.x = Math.floor(Math.random() * canvas.width);

        // y distribution code
        this.gap = 30;
        this.randomBound = ((Math.random() * 2) ** 2) * this.gap
        if (Math.random() > 0.5) {
            this.randomBound = Math.abs(this.randomBound - (this.gap * 4)) - (this.gap * 4) - 10;
        }
        this.y = this.randomBound + canvas.height + 700;

        // y bending code
        this.round = -1 * (  Math.sqrt( (800 ** 2) - ( (this.x - 250) ** 2 ) )) - 300;

        if (this.x > canvas.width - 500) {
            this.x -= Math.random() * 200;
        }
        if (this.x < 200) {
            this.x += Math.random() * 200;
        }

        this.y += this.round / 2;


        this.flag = true;
        this.shake = Math.random() * 2 - 1;
        this.size = 1.5;
    }

    updateWave() {
        if (this.flag === true) {
            this.velocity = Math.random() * 2 - 1;
            this.y -= this.velocity + 2;
            this.x += this.shake;
        }

        const xCircle = -1 * Math.sqrt( ((850) ** 2) - (  (this.x - 400) ** 2  ) /1.5 ) + (880)

        if (this.y < xCircle) {
            this.y = canvas.height;
            if (Math.abs(this.x - canvas.width) > 0) {
                this.x = Math.random() * canvas.width;
            }
        }
    }

    draw() {
        ctx.fillStyle = gradient1;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }

    reset() {

        this.x = Math.floor(Math.random() * canvas.width);

        // y distribution code
        this.gap = 30;
        this.randomBound = ((Math.random() * 2) ** 2) * this.gap
        if (Math.random() > 0.5) {
            this.randomBound = Math.abs(this.randomBound - (this.gap * 4)) - (this.gap * 4) - 10;
        }
        this.y = this.randomBound + canvas.height + 700;

        // y bending code
        this.round = -1 * (  Math.sqrt( (800 ** 2) - ( (this.x - 250) ** 2 ) )) - 300;

        if (this.x > canvas.width - 300) {
            this.x -= Math.random() * 200;
        }
        if (this.x < 200) {
            this.x += Math.random() * 200;
        }

        this.y += this.round / 2;


        this.size = 1.5;
        this.flag = true;
    }
}

function init(arr) {
    for(let i = 0; i < numberOfParticles; i++) {
        arr.push(new Particle());
    }
}

function reset(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].reset();
    }
}

init(particleWave1);
init(particleWave2);

function animate(arr) {

    ctx.globalAlpha = 1;
    ctx.fillStyle = 'whitesmoke';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < arr.length; i++) {
        arr[i].updateWave();
        arr[i].draw();
    }
}

setInterval(function() {
    requestAnimationFrame( function() {
        animate(particleWave1)
    });
}, 33);

// setInterval(function() {
//     reset(particleWave1);
// }, 10000);

// setTimeout(function() {

//     setInterval(function() {

//         requestAnimationFrame( function() {
//             animate(particleWave2) );
        
//     }, 33)

// }, 2500)

// setTimeout(function() {

//     setInterval(function() {
//         reset(particleWave2);
//     }, 5000);

// }, 2500)