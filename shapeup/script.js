const container = document.getElementById('drawDiv'),
    squareButton = document.getElementById('squareButton'),
    rectangleButton = document.getElementById('rectangleButton'),
    circleButton = document.getElementById('circleButton'),
    triangleButton = document.getElementById('triangleButton'),
    randomButton = document.getElementById('randomButton'),
    shapeName = document.getElementById('displayShapeNameInfo'),
    shapeWidth = document.getElementById('displayWidthInfo'),
    shapeHeight = document.getElementById('displayHeightInfo'),
    shapeRadius = document.getElementById('displayRadiusInfo'),
    shapeArea = document.getElementById('displayAreaInfo'),
    shapePerimeter = document.getElementById('displayPerimeterInfo');

squareButton.addEventListener('click', () => new Square(document.getElementById('squareSideLength').value));
rectangleButton.addEventListener('click', () => new Rectangle(document.getElementById('rectangleWidth').value, document.getElementById('rectangleHeight').value));
circleButton.addEventListener('click', () => new Circle(document.getElementById('circleRadius').value));
triangleButton.addEventListener('click', () => new Triangle(document.getElementById('triangleHeight').value));
randomButton.addEventListener('click', () => genRandomShape());

class Shape {
    constructor() {
        this.shape = document.createElement('div');
        this.shape.addEventListener('click', () => this.describe());
        this.shape.addEventListener('dblclick', () => container.removeChild(this.shape));
    }

    addShapeToDOM() {
        container.appendChild(this.shape);
    }

    describe() {
        shapeName.innerText = `Shape Name: ${this.shape.name}`;
        shapeWidth.innerText = `Width: ${this.shape.width}`;
        shapeHeight.innerText = `Height: ${this.shape.height}`;
        shapeRadius.innerText = `Radius: ${this.shape.radius}`;
        shapeArea.innerText = `Area: ${this.shape.area}`;
        shapePerimeter.innerText = `Perimeter: ${this.shape.perimeter}`;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        this.shape.name = 'Rectangle';
        this.doMath();
        this.drawShape();
        if (this.height === this.width) {
            alert('that is a square...');
        } else {
            this.addShapeToDOM();
        }
    }

    drawShape() {
        this.shape.classList.add('rectangle');
        this.shape.style.height = `${this.height}px`;
        this.shape.style.width = `${this.width}px`;
        this.shape.style.top = `${Math.floor(Math.random() * (600 - this.height))}px`;
        this.shape.style.left = `${Math.floor(Math.random() * (600 - this.height))}px`;
    }

    doMath() {
        this.shape.height = this.height;
        this.shape.width = this.width;
        this.shape.radius = 'N/A';
        this.shape.area = this.width * this.height;
        this.shape.perimeter = this.width + this.height * 2;
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super();
        this.sideLength = sideLength;
        this.shape.name = 'Square';
        this.doMath();
        this.drawShape();
        this.addShapeToDOM();
    }

    drawShape() {
        this.shape.classList.add('square');
        this.shape.style.height = `${this.sideLength}px`;
        this.shape.style.width = `${this.sideLength}px`;
        this.shape.style.top = `${Math.floor(Math.random() * (600 - this.sideLength))}px`;
        this.shape.style.left = `${Math.floor(Math.random() * (600 - this.sideLength))}px`;
    }

    doMath() {
        this.shape.width = this.sideLength;
        this.shape.height = this.sideLength;
        this.shape.area = this.sideLength ** 2;
        this.shape.perimeter = this.sideLength * 4;
        this.shape.radius = 'N/A';
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
        this.shape.name = 'Circle';
        this.doMath();
        this.drawShape();
        this.addShapeToDOM();
    }

    drawShape() {
        this.shape.classList.add('circle');
        this.shape.style.height = `${document.getElementById('circleRadius').value}px`;
        this.shape.style.width = `${document.getElementById('circleRadius').value}px`;
        this.shape.style.top = `${Math.floor(Math.random() * (600 - this.radius))}px`;
        this.shape.style.left = `${Math.floor(Math.random() * (600 - this.radius))}px`;
    }

    doMath() {
        this.shape.height = this.radius * 2;
        this.shape.width = this.radius * 2;
        this.shape.radius = this.radius;
        this.shape.area = (Math.PI * this.radius ** 2);
        this.shape.area = this.shape.area.toFixed(2);
        this.shape.perimeter = (2 * Math.PI * this.radius);
        this.shape.perimeter = this.shape.perimeter.toFixed(2);
    }
}

class Triangle extends Shape {
    constructor(height) {
        super();
        this.height = height;
        this.shape.name = 'Triangle';
        this.doMath();
        this.drawShape();
        this.addShapeToDOM();
    }

    drawShape() {
        this.shape.classList.add('triangle');
        this.shape.style.borderTopWidth = `${document.getElementById('triangleHeight').value}px`;
        this.shape.style.borderRightWidth = `${document.getElementById('triangleHeight').value}px`;
        this.shape.style.top = `${Math.floor(Math.random() * (600 - this.height))}px`;
        this.shape.style.left = `${Math.floor(Math.random() * (600 - this.height))}px`;
    }

    doMath() {
        this.shape.radius = 'N/A';
        this.shape.height = this.height;
        this.shape.width = this.height;
        this.shape.area = 0.5 * this.height * this.height;
        this.shape.perimeter = 2 * this.height + Math.sqrt(2) * this.height;
        this.shape.perimeter = this.shape.perimeter.toFixed(2);
    }
}

let genRandomShape = () => {
    let shape = [Rectangle, Square, Circle, Triangle];
    let randomShape = shape[Math.floor(Math.random() * 4)];
    console.log(randomShape);
    switch (randomShape) {
        case Rectangle:
            let randomSize1 = Math.floor(Math.random() * 200)
            let randomSize2 = Math.floor(Math.random() * 200)
            new Rectangle(randomSize1, randomSize2);
            break;
        case Square:
            let randomSize = Math.floor(Math.random() * 200)
            new Square(randomSize);
            break;
        case Circle:
            let randomRad = Math.floor(Math.random() * 200);
            new Circle(randomRad);
            break;
        case Triangle:
            let randomHeight = Math.floor(Math.random() * 200);
            new Triangle(randomHeight);
            break;
    }
}
  
