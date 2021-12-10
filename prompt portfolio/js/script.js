/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let sketch = function (p) {
  let numCircles = 5;
  let circles = [];

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    for (let i = 0; i < numCircles; i++) {
      let circle = p.createCircles();
      circles.push(circle);
    }
  };

  p.createCircles = function () {
    let mySize = p.random((p.height / 5) * 2, (p.width / 5) * 2);
    let alphaValue = 30;
    let fillOptions = [
      p.color(255, 99, 214, alphaValue),
      p.color(0, 12, 255, alphaValue),
      p.color(255, 247, 0, alphaValue),
      p.color(88, 255, 99, alphaValue),
      p.color(255, 72, 30, alphaValue),
    ];
    let mySpeed = p.random(-0.8, 0.8);
    let circle = {
      size: mySize,
      x: p.random(0, p.width),
      y: p.random(0, p.height),
      fill: p.random(fillOptions),

      changeDir: 0.005,
      speed: 0.8,
      vx: mySpeed,
      vy: mySpeed,
    };
    return circle;
  };

  p.draw = function () {
    p.background(255);
    for (let i = 0; i < circles.length; i++) {
      let circle = circles[i];

      p.push();

      let r = p.random(0, 1);
      if (r < circle.changeDir) {
        circle.vx = p.random(-circle.speed, circle.speed);
        circle.vy = p.random(-circle.speed, circle.speed);
      }

      circle.x += circle.vx;
      circle.y += circle.vy;

      circle.x = p.constrain(circle.x, -10, p.width + 10);
      circle.y = p.constrain(circle.y, -10, p.height + 10);

      p.fill(circle.fill);
      p.noStroke();
      p.ellipse(circle.x, circle.y, circle.size);

      p.pop();
    }
  };

  p.bigCircle = function () {
    let circle = p.createCircles();
    p.fill(circle.fill);
    p.noStroke();
    ellipse((p.width / 5) * 3, p.height / 2, (p.width / 5) * 3);
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

let myp5 = new p5(sketch, `myBackground`);
