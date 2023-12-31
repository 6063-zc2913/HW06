let s0 = "Two roads diverged in a yellow wood";
let s1 = "And sorry I could not travel both";
let s2 = "And be one traveler, long I stood";
let s3 = "And looked down one as far as I could to where it bent in the undergrowth";
let s4 = "Then took the other as just as fair And having perhaps the better claim Because it was grassy and wanted wear Though as for that the passing there Had worn them really about the same And both that morning equally lay In leaves no step had trodden black";

let words3;
let words4;
let lineHeight = 13;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("monospace");
  words3 = s3.split(" ");
  words4 = s4.split(" ");
}

function draw() {
  background("Green");
  fill("Yellow");
  textSize(13);
  textAlign(CENTER, CENTER);
  translate(-width/2+150,0);

  text(s0, width/2, 10);
  text(s1, width/2, 25);
  text(s2, width/2, 40);
  for (let i = 0; i < words3.length; i++) {
    if (i * 15 < frameCount) {
      let word3 = words3[i].toUpperCase();
      let xy3 = map(i, 0, words3.length, 60, height/2);
      text(word3, width/2, xy3, -100);
    }
    
  }
  
  for (let d = 0; d < words4.length; d++) {
    if (d * 5 < frameCount) {
      let word4 = words4[d].toUpperCase();
      let xy4 = map(d, 0, words4.length, 60, height); 
      text(word4, xy4 + width/2, xy4);
    }
  }
}
