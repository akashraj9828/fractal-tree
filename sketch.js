var length
var ang
var sliderr
var sliderr2
var sliderr3
var minlen

function setup() {
createCanvas(windowWidth,windowHeight)

sliderr=createSlider(0,PI,PI/2,0.0001)
sliderr.position(0,0)

sliderr2=createSlider(2,100,50,1)
sliderr2.position(0,30)

sliderr3=createSlider(50,300,100,10)
sliderr3.position(0,60)

}

function draw() {
background(90)
ang=sliderr.value();
minlen=sliderr2.value();
length=sliderr3.value();
push()
translate(width/2,height)
tree()
pop()

}


function tree(){
  branch(length);
}

function branch(len){
strokeWeight(10)
  if(len>minlen){
  line(0,0,0,-len)
  translate(0,-len)
  push()
  rotate(ang)
  branch(len*0.67);
  pop()


  push()
  rotate(-ang)
  branch(len*0.67);
  pop()


  push()
  rotate(0)
  branch(len*0.67);
  pop()


}


}
