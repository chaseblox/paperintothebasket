class Ground{
    constructor(x,y,width,hieght) {
    var options ={
    isStatic:true,
    restitutation:0,
    friction:0,
    density:1        
        }
    this.body=Bodies.rectangle(x,y,width,hieght,options);
    this.width=width;
    this.hiegth=hieght;

    World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);

        fill(255);

        rect(this.body.position.x,this.position.y,this.width,this.hiegth);
    }
}