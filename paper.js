class Paper{

    constructor(x,y,radius){
        
        
        
        
        var options={
            isStatic :false,
            restitution:0.4,
            friction:1,
            density:1.2


    }
    this.image = loadImage("paper.png");
    this.radius = 70;
    this.body=Bodies.circle(x, y,radius/*diameter*/,options);
        this.radius/*diameter*/=/*radius*/ this.radius/*diameter*/;
        World.add(world, this.body);
        
}
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x, pos.y);
    //rotate(this.body.angle);
    rotate(angle);
    stroke("white");
    fill("white");
    ellipse(0,0,this.radius, this.radius);
    ellipseMode(RADIUS);
    imageMode(CENTER);
            image(this.image, 0, 0, this.r,this.r);
    //ellipse(pos.x, pos.y, this.radius, this.radius)
    pop();
}





}