// Create a constructor for creating Rectangles.
// it should take two parameters: the sides of the rectangle
// Every rectangle should have a method called getArea() that returns its area
// Every rectangle should have a method called getCircumference() that returns its circumference

'use strict';

function Rectangle(vertical, horizontal) {
  this.vertical = vertical;
  this.horizontal = horizontal;
}

Rectangle.prototype.getArea = function() {
  return this.vertical * this.horizontal;
}

Rectangle.prototype.getCircumference = function() {
  return this.vertical * 2 + this.horizontal * 2;
}

let box = new Rectangle(12, 34);
