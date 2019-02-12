const canvas = document.getElementById('js-canvas');
const ctx = canvas.getContext('2d');

const getCursorPosition = (canvas, event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log("x: " + x + "y:" + y);
}

canvas.addEventListener('click', (event) => {
    getCursorPosition(canvas, event);
} )

ctx.fillStyle = '#fff'; 
ctx.strokeStyle = '#fff'; 

//HEAD
ctx.beginPath();
ctx.arc(200, 180, 60, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

//BODY
ctx.beginPath();
ctx.arc(200, 360, 120, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

//SCARF
ctx.fillStyle = 'purple'; 
ctx.fillRect(165, 230, 70, 20); 
ctx.fillRect(211, 232, 20, 90); 

// right arm 
ctx.lineWidth = 5;
ctx.strokeStyle = 'black';


ctx.beginPath();
ctx.moveTo(139, 296);
ctx.lineTo(38, 248);
ctx.stroke();

// left arm 
ctx.lineWidth = 5;
ctx.strokeStyle = 'black';


ctx.beginPath();
ctx.moveTo(260, 330);
ctx.lineTo(350, 236);
ctx.stroke();

// hat
ctx.fillStyle = 'orange';
ctx.fillRect(126, 130, 150, 30);
ctx.fillRect(146, 33, 110, 120);

// eye
ctx.beginPath();
ctx.arc(180, 174, 5, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(214, 174, 5, 0, 2 * Math.PI);
ctx.fill();

// nose
ctx.lineWidth = 1;
ctx.strokeStyle = 'yellow';
ctx.fillStyle = 'yellow';

ctx.beginPath();
ctx.moveTo(198, 186);
ctx.lineTo(130, 206);
ctx.lineTo(202, 207);
ctx.stroke();
ctx.fill();