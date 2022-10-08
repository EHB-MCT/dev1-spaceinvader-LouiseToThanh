"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawLine();

function drawLine(){
    
    //Black rectangle
    context.beginPath();
    context.lineWidth=2;
    context.rect(20,20,300,300);
    context.fillStyle = "black";
    context.fill();

    //Invader 
    context.beginPath();
    context.lineWidth=2;
    context.rect(45,45,50,50);
    context.fillStyle = "lightgreen";
    context.fill ();

    context.beginPath();
    context.lineWidth=2;
    context.rect(45,95,50,50);
    context.fillStyle = "lightgreen";
    context.fill ();

    context.beginPath();
    context.lineWidth=2;
    context.rect(45,195,50,50);
    context.fillStyle = "lightgreen";
    context.fill ();

    context.beginPath();
    context.lineWidth=2;
    context.rect(45,245,50,50);
    context.fillStyle = "lightgreen";
    context.fill ();

    context.beginPath();
    context.lineWidth=2;
    context.rect(95,145,50,50);
    context.fillStyle = "lightgreen";
    context.fill ();

    context.beginPath();
    context.lineWidth=2;
    context.rect(145,95,50,50);
    context.fillStyle = "lightgreen";
    context.fill ();

    context.beginPath();
    context.lineWidth=2;
    context.rect(145,235,50,50);
    context.fillStyle = "lightgreen";
    context.fill ();

    context.beginPath();
    context.lineWidth=2;
    context.rect(195,145,50,50);
    context.fillStyle = "lightgreen";
    context.fill ();

    context.beginPath();
    context.lineWidth=2;
    context.rect(245,45,50,50);
    context.fillStyle = "lightgreen";
    context.fill ();

    context.beginPath();
    context.lineWidth=2;
    context.rect(245,95,50,50);
    context.fillStyle = "lightgreen";
    context.fill ();

    context.beginPath();
    context.lineWidth=2;
    context.rect(245,195,50,50);
    context.fillStyle = "lightgreen";
    context.fill ();

    context.beginPath();
    context.lineWidth=2;
    context.rect(245,245,50,50);
    context.fillStyle = "lightgreen";
    context.fill ();

}