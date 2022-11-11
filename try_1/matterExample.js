let Engine = Matter.Engine,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

let engine;

let boxes = [];
let ground;
let cam;

//var Engine = Matter.Engine,
// Render = Matter.Render,
// Runner = Matter.Runner,
// Bodies = Matter.Bodies,
// Composite = Matter.Composite;

//var engine = Engine.create();

//var render = Render.create({
//  element: document.body,
//  engine: engine,
//});

function setup() {
  createCanvas(800, 600, WEBGL);
  engine = Engine.create();
  //3d round try
  detailY = createSlider(2, 24, 6);
  detailY.position(10, height + 5);
  detailY.style("width", "80px");
  describe(
    "a rotating white ellipsoid with limited Y detail, with a slider that adjusts detailY"
  );
  //
  ground = new Circle(400, 610, 810, 60, "#C0AAA9", { isStatic: true });
  Composite.add(engine.world, ground.bodies);
  requestPointerLock();
  cam = createCamera();
}

function mousePressed() {
  let size = random(20, 200);
  let randColor = color(random(256), random(256), random(256));
  let newRect = new Circle(mouseX, mouseY, size, size, randColor);
  // let newRect = new Rect(mouseX, mouseY, random(20, 100), random(20, 100));
  Composite.add(engine.world, newRect.bodies);
  boxes.push(newRect);
}

function draw() {
  background("#F8F3FD");
  Engine.update(engine);
  cam.pan(-movedX * 0.01);
  cam.tilt(movedY * 0.01);
  //3d round try
  rotateY(millis() / 1000);
  ellipsoid(30, 40, 40, 12, detailY.value());
  //

  //var boxA = Bodies.circle(400, 200, 80, 80);
  //var boxB = Bodies.circle(450, 50, 80, 80);
  //var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

  noStroke();
  fill("#FF8C58");
  boxes.forEach((e) => e.render());
  // for (let i = 0; i < boxes.length; i++) {
  // boxes(i).render();
  // }

  //Composite.add(engine.world, [boxA, boxB, ground]);

  //Render.run(render);

  //var runner = Runner.create();

  //Runner.run(runner, engine);
  ground.render();
}
