const express = require('express');
const path = require('path');
const app = express();

app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000');
});

app.get('/',function(req, resp) {
    resp.sendFile('index.html', {root: path.join(__dirname, '/')});
});

app.get('/index.html',function(req, resp) {
    resp.sendFile('index.html', {root: path.join(__dirname, '/')});
});

app.get('/style.css',function(req, resp) {
    resp.sendFile('style.css', {root: path.join(__dirname, '/')});
});

app.get('/req.html',function(req, resp) {
    resp.sendFile('req.html', {root: path.join(__dirname, '/')});
});

app.get('/quem.html',function(req, resp) {
    resp.sendFile('quem.html', {root: path.join(__dirname, '/')});
});

app.get('/engcomp.html',function(req, resp) {
    resp.sendFile('engcomp.html', {root: path.join(__dirname, '/')});
});

app.get('/cursos.html',function(req, resp) {
    resp.sendFile('cursos.html', {root: path.join(__dirname, '/')});
});

app.get('/cursos.css',function(req, resp) {
    resp.sendFile('cursos.css', {root: path.join(__dirname, '/')});
});

app.get('/engcomp.css',function(req, resp) {
    resp.sendFile('engcomp.css', {root: path.join(__dirname, '/')});
});

app.get('/quem.css',function(req, resp) {
    resp.sendFile('quem.css', {root: path.join(__dirname, '/')});
});

app.get('/req.css',function(req, resp) {
    resp.sendFile('req.css', {root: path.join(__dirname, '/')});
});

app.get('/felipe.png',function(req, resp) {
    resp.sendFile('felipe.png', {root: path.join(__dirname, '/')});
});

app.get('/jamile.jpeg',function(req, resp) {
    resp.sendFile('jamile.jpeg', {root: path.join(__dirname, '/')});
});

app.get('/marcos.jpeg',function(req, resp) {
    resp.sendFile('marcos.jpeg', {root: path.join(__dirname, '/')});
});

app.get('/ulrich.jpeg',function(req, resp) {
    resp.sendFile('ulrich.jpeg', {root: path.join(__dirname, '/')});
});

app.get('/wallpaper.jpg',function(req, resp) {
    resp.sendFile('wallpaper.jpg', {root: path.join(__dirname, '/')});
});
