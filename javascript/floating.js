const welcome = document.querySelector('.welcome-comment');
const welcome2 = document.querySelector('.welcome-comment2');
// const portrait1 = document.querySelector('.portrait');
const code = document.querySelector('.code-comment');
const game = document.querySelector('.code-game-comment');
const art = document.querySelector('.art-comment');
const about = document.querySelector('.about-comment');
const about2 = document.querySelector('.about-comment2');
const about3 = document.querySelector('.about-comment3');


class Float {

    constructor(element) {
        this.x = 0;
        this.y = 0;
        this.element = element;
    }

    mouseFloat(x, y, deltaX, deltaY, intensity) {

        // when not visible stop movement
        const parentDiv = this.element.parentElement;
        const compStyle = window.getComputedStyle(parentDiv);
        if (compStyle.getPropertyValue('opacity') < 0.3) {
            return;
        }
        
        const boundXL = this.element.offsetLeft + 20;
        const boundYB = this.element.offsetTop + 20;

        const floatX = deltaX + this.element.offsetLeft;
        const floatY = deltaY + this.element.offsetTop;

        // inverse of closeness to element
        const proxX = (x - this.element.offsetLeft) / 7;
        const proxY = (y - this.element.offsetTop) / 7;

    
        if (Math.abs(floatX) < boundXL && Math.abs(floatY) < boundYB) {
                this.element.style.transform = 'translate(' + (deltaX/2 + proxX) * intensity + 'px,' + 
                (deltaY/2 + proxY) * intensity + 'px)';
                this.element.style.transition = '250ms ease-out'
        }
    }
} 

let prevX = null;
let prevY = null;

const floatWelcome =  new Float(welcome);
const floatWelcome2 =  new Float(welcome2);
// const floatPortrait =  new Float(portrait1);
const floatCode = new Float(code);
const floatGame = new Float(game);
const floatArt = new Float(art);
const floatAbout = new Float(about);
const floatAbout2 = new Float(about2);
const floatAbout3 = new Float(about3);

window.addEventListener('mousemove', function(event){
    var currX = event.clientX;
    var currY = event.clientY;

    if (prevX !== null && prevY !== null) {
        var deltaX = currX - prevX;
        var deltaY = currY - prevY;
    }
    
    // floatPortrait.mouseFloat(event.x, event.y, deltaX, deltaY, 0.3);
    floatWelcome2.mouseFloat(event.x, event.y, deltaX, deltaY, 1);
    floatWelcome.mouseFloat(event.x, event.y, deltaX, deltaY, 1);

    floatCode.mouseFloat(event.x, event.y, deltaX, deltaY, 1);
    floatGame.mouseFloat(event.x, event.y, deltaX, deltaY, 1);
    floatArt.mouseFloat(event.x, event.y, deltaX, deltaY, 1);
    floatAbout.mouseFloat(event.x, event.y, deltaX, deltaY, 1);
    floatAbout2.mouseFloat(event.x, event.y, deltaX, deltaY, 1);
    floatAbout3.mouseFloat(event.x, event.y, deltaX, deltaY, 0.3);

    prevX = currX;
    prevY = currY;
});




