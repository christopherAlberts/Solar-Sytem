var speed;

function setup() {
    createCanvas(2000, 2000);
}

function draw() {
    background(0);
    speed = frameCount;

    push();

    translate(width/2, height/2);
    rotate(radians(speed/3))
    celestialObj(color(255,150,0), 200); // SUN
    
    rotate(radians(speed))
    translate(120,0)
    celestialObj(color(255,0,0), 50); // MERCURY
    
    // Taking into acount the fact that Mercury was 
    // already translated 120 pixels on the x axis. Earth 
    // justs needs to be translated an additional 180 pixels  // on the x axis to take it to 300!
    translate(180,0) 
    celestialObj(color(0,0,255), 80); // EARTH
    
    rotate(-radians(speed*2))
    translate(100,0)
    celestialObj(color(255,255,255), 30); // MOON

}


function celestialObj(c, size){

    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
    

}

function rotateEarth(){
    
    
}
