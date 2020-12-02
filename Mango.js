class Mango{
    constructor(x,y,radius){
        this.body= Matter.Bodies.circle(x,y,radius, {isStatic:true, restitution:0, friction:1,});

        this.radius=radius;
        
        this.image=loadImage("Plucking mangoes/mango.png")

        World.add(world, this.body)
    }

    display(){

        push();

        imageMode(CENTER);

        fill("purple");

        stroke("purple");

        var pos=this.body.position

        image(this.image, pos.x, pos.y, this.radius*2,this.radius*2);

        pop();

    }

}