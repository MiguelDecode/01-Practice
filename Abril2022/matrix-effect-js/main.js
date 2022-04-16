const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');

canvas.width = document.body.offsetWidth;

const w = canvas.width;
const h = canvas.height;

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

const cols = Math.floor(w / 20) + 1;
const posicion_y = Array(cols).fill(0);

function matrix () {} setInterval(matrix, 50);

function matrix () {
    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = '#0f0';
    ctx.font = '15pt monospace';

    posicion_y.forEach((y,ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) {
            posicion_y[ind] = 0;
        } else posicion_y[ind] = y + 20;
    })
}
