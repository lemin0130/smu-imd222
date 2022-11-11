class Circle {
  constructor(x, y, w, c, opt) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.c = c;
    this.bodies = Bodies.circle(this.x, this.y, this.w, opt);
  }

  render() {
    rectMode(CENTER);
    push();
    translate(this.bodies.position.x, this.bodies.position.y);
    rotate(this.bodies.angle);
    fill(this.c);
    circle(0, 0, this.w);
    pop();
  }
}
