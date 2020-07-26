class Plinko {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.body = Bodies.circle(this.x,this.y,this.radius,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      
      ellipse(this.x,this.y,this.radius, this.radius);
    }
  };
