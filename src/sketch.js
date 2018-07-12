const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const height = 2 * Math.max(document.documentElement.clientHeight, window.innerHeight || 0)/3;
const rootLength = Math.min(width/4, height/3);
let tree = [];

function setup() {
  const canvas = createCanvas(width, height);
  canvas.parent("sketch-holder");
  tree[0] = new Branch(createVector(width/2, height), createVector(width/2, height-rootLength));
}

function growTree() {
  if (tree.length < 1000) {
    for (let i = tree.length - 1; i >= 0; i--) {
      if (!tree[i].finished) {
        tree.push(tree[i].branchR());
        tree.push(tree[i].branchL());
        tree[i].finished = true;
      }
    }
  }
  else {
    noLoop();
  }
}

function draw() {
  background("#2980B9");
  let weight = 10;
  for (branch of tree) {
    if (weight > 3) {
      weight -= 0.1;
    }
    branch.show(weight);
  }
}


setInterval(growTree, 500);
