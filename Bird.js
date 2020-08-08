class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x>200 && this.body.velocity.x>10){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
    
    
    for(var i=0; i<this.trajectory.length; i=i+1){
       image(this.smoke, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}

/*
trajectory = [[200, 300], [250, 350], [300, 400], [350, 450]]
trajectory[0][0], trajectory[0][1]
trajectory[1][0], trajectory[1][1]
trajectory[2][0], trajectory[2][1]
trajectory[3][0], trajectory[3][1]

trajectory[i][0], trajectory[i][1]
trajectory[i+1][0], trajectory[i+1][1]
trajectory[i+1+1][0], trajectory[i+1+1][1]
.
.
trajectory[length-1][0], trajectory[length-1][1]
i=0
i<length
i=i+1
*/
