let j;
function setup() {
  // put setup code here
createCanvas(675,200);
j = 0;
}

function draw() {
  // put drawing code here
  {
    background(200);
    strokeWeight(1)
    fill(109,112,79)
    j += 1
//bagian atas
    var x = 50 + 4*Math.floor(PI*j/10)
    rect(x,20,100,20);

    var x = 50 + 4*Math.floor(PI*j/10)
    triangle(x,20,x,40,x-15,40)

    var x = 150 + 4*Math.floor(PI*j/10)
    triangle(x,20,x,40,x+15,40)

    var x = 35 + 4*Math.floor(PI*j/10)
    rect(x,40,130,30)

    var x = 166 + 4*Math.floor(PI*j/10)
    rect(x,38,130,15)

    var x =  283 + 4*Math.floor(PI*j/10)
    var r =  30 + 10*Math.sin(PI*j/j)
    ellipse(x,45.5,r,r)

    var x =  298 + 4*Math.floor(PI*j/10)
    var r =  20 + 10*Math.sin(PI*j/j)
    ellipse(x,45.5,r,r)

    var x =  298 + 4*Math.floor(PI*j/4)
    var r =  20 + 10*Math.sin(PI*j/j)
    ellipse(x,45.5,r,r)
    

// bagian tengah
    var x = 10 + 4*Math.floor(PI*j/10)
    rect(x,90,230,30)

    var x = 190 + + 4*Math.floor(PI*j/10)
    triangle(x,70,x,90,x+15,90)

    var x = 10 + 4*Math.floor(PI*j/10)
    rect(x,70,180,20)

    var x = 240 + 4*Math.floor(PI*j/10)
    triangle(x,90,x,120,x+60,120)
  }

//jalan rusak  
  {
    for (var i = 0; i<=675; i++){
      x = i
      y = 170 + 5*Math.sin(PI*x/20)
      point(x,y)
    }
// roda roda    
    var x = 200 + + 4*Math.floor(PI*j/10)
    var r = 40 + 0.5*Math.sin(PI*j/10)
    j += 0.1
    ellipse(x,145,r,r)

    var x =  20 + 4*Math.floor(PI*j/10)
    var r =  40 + 10*Math.sin(PI*j/j)
    ellipse(x,145,r,r)

    var x =  65 + + 4*Math.floor(PI*j/10)
    var r =  40 + 0.3*Math.sin(PI*j/j)
    ellipse(x,145,r,r)

    var x =  110 + + 4*Math.floor(PI*j/10)
    var r =  40 + 0.4*Math.sin(PI*j/10)
    ellipse(x,145,r,r)

    var x =  155 + + 4*Math.floor(PI*j/10)
    var r =  40 + 0.4*Math.sin(PI*j/10)
    ellipse(x,145,r,r)

    var x =  245 + + 4*Math.floor(PI*j/10)
    var r =  40 + 0.5*Math.sin(PI*j/10)
    ellipse(x,145,r,r)
    


    
    
  }
  
}