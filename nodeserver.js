const express = require('express');
const app = express();
const { createCanvas } = require('canvas');

app.get('/get-ip', (req, res) => {
    const ip = req.header('x-forwarded-for') || req.connection.remoteAddress;

    const canvas = createCanvas(300, 50);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = '24px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText(ip, 10, 10);

    const imgBuffer = canvas.toBuffer('image/png');
    res.set("Content-Type", "image/png");
    res.send(imgBuffer);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
