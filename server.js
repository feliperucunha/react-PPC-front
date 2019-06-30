const express = require('express');
const path = require('path');
const app = express();

app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000');
});

app.get('/',function(req, resp) {
    resp.sendFile('indexbulma.html', {root: path.join(__dirname, '/')});
});

app.get('/indexbulma.html',function(req, resp) {
    resp.sendFile('indexbulma.html', {root: path.join(__dirname, '/')});
});

app.get('/reqbulma.css',function(req, resp) {
    resp.sendFile('reqbulma.css', {root: path.join(__dirname, '/')});
});

app.get('/quembulma.html',function(req, resp) {
    resp.sendFile('quembulma.html', {root: path.join(__dirname, '/')});
});

app.get('/indexbulma.css',function(req, resp) {
    resp.sendFile('indexbulma.css', {root: path.join(__dirname, '/')});
});

app.get('/engcompbulma.html',function(req, resp) {
    resp.sendFile('engcompbulma.html', {root: path.join(__dirname, '/')});
});

app.get('/1sem.html',function(req, resp) {
    resp.sendFile('1sem.html', {root: path.join(__dirname, '/')});
});

app.get('/2sem.html',function(req, resp) {
    resp.sendFile('2sem.html', {root: path.join(__dirname, '/')});
});

app.get('/3sem.html',function(req, resp) {
    resp.sendFile('3sem.html', {root: path.join(__dirname, '/')});
});

app.get('/4sem.html',function(req, resp) {
    resp.sendFile('4sem.html', {root: path.join(__dirname, '/')});
});

app.get('/5sem.html',function(req, resp) {
    resp.sendFile('5sem.html', {root: path.join(__dirname, '/')});
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

app.get('/6sem.html',function(req, resp) {
    resp.sendFile('6sem.html', {root: path.join(__dirname, '/')});
});

app.get('/7sem.html',function(req, resp) {
    resp.sendFile('7sem.html', {root: path.join(__dirname, '/')});
});

app.get('/8sem.html',function(req, resp) {
    resp.sendFile('8sem.html', {root: path.join(__dirname, '/')});
});