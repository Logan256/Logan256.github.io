const floatingComments = document.querySelectorAll('.floating-comments');

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

const comments = Array.from(floatingComments);

function float1(event, deltaX, deltaY) {
    comments.forEach(element => {
        const float = new Float(element);
        float.mouseFloat(event.x, event.y, deltaX, deltaY, 1)
    });
}

let prevX = null;
let prevY = null;

window.addEventListener('mousemove', function(event){
    var currX = event.clientX;
    var currY = event.clientY;

    if (prevX !== null && prevY !== null) {
        var deltaX = currX - prevX;
        var deltaY = currY - prevY;
    }
    
    float1(event, deltaX, deltaX);

    prevX = currX;
    prevY = currY;
});




