// Basile Pesin
// http://vertmo.github.io

// MetaBalls : p5.js implementation

var blobs = [];
var count;
function setup() {
    createCanvas(400, 400);
    // colorMode(HSB);
    // for(i=0; i<5; i++) blobs.push(new Blob(random(0, width), random(0, height),frameCount+10));
    }

function draw() {
//frameCount/10
count=frameCount;
  if(blobs.length<=20){
  if(random(1)>0.6){ //主要的控制参数
  blobs.push(new Blob(random(0, width), random(0, height),count));
}
}else{
for(i=0;i<blobs.length;i++){
  blobs[i].r=count/2;

}
}//控制增长
  // if(frameCount>21){
  //   blobs.splice(0,1);//如何控制数量的增长
  // }

    // background(0);
    // console.log(frameCount);
    console.log(blobs.length);
    loadPixels();
    for(x=0; x<width; x++) {
        for(y=0; y<height; y++) {//hit every single pixel
            let sum = 150;
            for(i=0; i<blobs.length; i++) {
                let xdif = x-blobs[i].x;
                let ydif = y-blobs[i].y;
                let d = sqrt((xdif*xdif) + (ydif*ydif));
                sum += 10 * blobs[i].r/d;
            }
            set(x, y, color(sum, 170, 200)); // color change a little bit change through time
        }
    }
    updatePixels();

    for(i=0; i<blobs.length; i++) {
        blobs[i].update();
    }
}
