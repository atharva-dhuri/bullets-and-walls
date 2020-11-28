var bullet;
var wall;
var speed;
var weight;
var thikness;
var edges;

function setup() {
  createCanvas(1600, 400);
  bullet = createSprite(50, 200, 50, 5);
  bullet.shapeColor = "white";

  thikness = Math.round((53, 83));

  wall = createSprite(1200, 200, thikness, height/2);
  wall.shapeColor = color(80, 80, 80);

  speed = random(223, 321);

  weight = random(30, 52);

}

function draw() {
  background("black");
console.log(bullet.x);

  bullet.velocityX = speed;

  edges = createEdgeSprites();
  bullet.collide(edges);

if(bullet.x - wall.x >(wall.width + bullet.width)/2) {
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thikness * thikness * thikness);

  if(damage >10) {
    wall.shapeColor = "green";
  }
  else{
    wall.shapeColor = color(80, 80, 80);
  }

  if(damage <10) {
    wall.shapeColor = "red";
  }
  else{
    wall.shapeColor = color(80, 80, 80);
  }
}
  drawSprites();
}