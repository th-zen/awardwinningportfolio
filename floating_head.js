{
    GLProfile.initSingleton();
}
function setup() {
    createCanvas(100, 100, WEBGL);
}
function draw() {
    translate(-width / 2, -height / 2);
    background(0, 0);
    translate(50, 50, 0);
    rotateY(mouseX / PI / 90 - 6);
    rotateX(mouseY / PI / 120 - 20);
    noFill();
    stroke(0);
    //box(50);
    noStroke();
    fill("#e9ca32");
    sphere(30);
    stroke(0);
    fill(0);
    translate(-14, 0, 30);
    sphere(5);
    translate(25, 0, 0);
    sphere(5);
}
