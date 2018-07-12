
class Branch {
  constructor(begin, end) {
    this.begin = begin;
    this.end = end;
    this.finished = false;
    this.windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

  show(weight) {
    stroke(255);
    strokeWeight(weight);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }

  jitter() {
    this.end.x += random(-1,1);
    this.end.y += random(-1,1);
  }

  branchR() {
    let dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(PI/4);
    dir.mult(0.67);
    return new Branch(this.end, p5.Vector.add(this.end, dir));
  }

  branchL() {
    let dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(-PI/4);
    dir.mult(0.67);
    return new Branch(this.end, p5.Vector.add(this.end, dir));
  }
}
