class Stone {
    constructor(x,y){
        var options={
            friction:0.8,
            restitution:0.8,
            density:1.0
        } 
        this.body=Bodies.circle(x,y,20,options)
        World.add(world, this.body)
    }
    display(){
       var angle=this.body.angle;
       var pos=this.body.position;
       push()
       translate(pos.x,pos.y);
       rotate(angle);
       ellipseMode(CENTER);
       ellipse(0,0,40,40);
       pop()
    }
}