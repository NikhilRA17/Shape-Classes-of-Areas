
const main = document.getElementById('main');
const btn = document.getElementById('btn');
const clr = document.getElementById('clr');

// Shape Class
class Shape{
    constructor(length_radius,breadth){
        this.length_radius = length_radius;
        this.breadth = breadth;        
     }
     area(){
        console.log(`Area Inside Shape Class`);
    }
}

class Square extends Shape{
    constructor(length_radius){
        super(length_radius);
    }
    area(){
        // console.log(Math.pow(this.length_radius,2));
        return Math.pow(this.length_radius,2);
    }
}

class Rectangle extends Shape{
    constructor(length,breadth){
        super(length,breadth);
    }
    area(){
        // console.log(this.length_radius*this.breadth);
        return this.length_radius*this.breadth;
    }
}

class Circle extends Shape{
    constructor(radius){
        super(radius);
    }
    area(){
        // console.log(3.14*Math.pow(this.length_radius,2));
        return 3.14*Math.pow(this.length_radius,2);
    }
}

class Triangle extends Shape{
    constructor(base,height){
        super(base,height);
    }
    area(){
        // console.log(0.5*this.length_radius*this.breadth);
        return 0.5*this.length_radius*this.breadth
    }
}

const square = new Square(2);

const rectangle = new Rectangle(5,3);

const circle = new Circle(2);

const triangle = new Triangle(7,4);

const allShapes = [`Area of Square having ${square.length_radius}cm length is : ${square.area()}cm`,`Area of Rectangle having ${rectangle.length_radius}cm length & ${rectangle.breadth}cm breadth is : ${rectangle.area()}cm`,`Area of Circle having ${circle.length_radius}cm radius is : ${circle.area()}cm`,`Area of Triangle having ${triangle.length_radius}cm height & ${triangle.breadth}cm base is : ${triangle.area()}cm`];

console.log(allShapes);

console.log([square.area(),rectangle.area(),circle.area(),triangle.area()]);


btn.addEventListener('click',function(){

    main.innerHTML = `<div>Area of Square having ${square.length_radius}cm length is : ${square.area()}cm</div>
    <div>Area of Rectangle having ${rectangle.length_radius}cm length & ${rectangle.breadth}cm breadth is : ${rectangle.area()}cm</div>
    <div>Area of Circle having ${circle.length_radius}cm radius is : ${circle.area()}cm</div>
    <div>Area of Triangle having ${triangle.length_radius}cm height & ${triangle.breadth}cm base is : ${triangle.area()}cm</div>`


})

clr.addEventListener('click',function(){
    main.innerHTML = '';
})