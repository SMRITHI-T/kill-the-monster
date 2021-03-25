class Box{
    constructor(x, y) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        
        this.width = 50;
        this.height = 50;
        this.x=x;
        this.y=y;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<8){
          var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("turquoise")
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        }
        else{
          World.remove(world, this.body);
          push();
          this.visibility=this.visibility-5;
        pop();
        } 
        
      }
}