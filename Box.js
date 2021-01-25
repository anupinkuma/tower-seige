class Box{
    constructor(x,y,width,height){
 var option={restitution:0.8,friction:1.0,density:1.0}

    this.image=loadImage("wood1.png");
this.body=Bodies.rectangle(x,y,width,height,option);
this.width=width;
this.height=height;
this.v=255;
World.add(world,this.body)
    }
    display(){
        if(this.body.speed<8){
        var p=this.body.position
        push();
        translate(p.x,p.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        fill("maroon")
        image(this.image,0,0,this.width,this.height)
        pop();
        }
        else{
            World.remove(world,this.body)
            push();
            this.v=this.v-5
            tint(255,this.v)
          image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
          pop();
        }
    }
    score(){
        if(this.v<0&&this.v>-105){
            score=score+5
            
        }
    }
}
