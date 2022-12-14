let count = 0;
const gen = () => {
    let canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'canvas-main');

    canvas.width = document.getElementById('width').value;
    canvas.height = document.getElementById('height').value;

    let ctx = canvas.getContext('2d');

    for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
            ctx.fillRect(x, y, 1, 1);
        }
    }

    document.querySelector('#canvas-hld').remove();
    let hld = document.createElement('div');
    hld.setAttribute('id', 'canvas-hld');
    canvas.setAttribute('onclick', 'save()');
    document.body.appendChild(hld);
    document.querySelector('#canvas-hld').appendChild(canvas);

    count++;
    document.getElementById('count').innerHTML = `no. of generated canvas since last refresh: ${count} <br><br>`;
}

const save = () => {
    let canvasToPNG = document.getElementById('canvas-main');
    let img = canvasToPNG.toDataURL('image/png');

    document.write(`<img src="${img}"/>`);
}
