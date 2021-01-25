class Bird{
 constructor(x,y){
     var option={restitution:0.6,friction:1.0,density:1.0}

     this.image=loadImage("bird.png");
     this.body=Bodies.rectangle(x,y,50,50,option);
     this.width=50;
     this.height=50;
     World.add(world,this.body)

 }
 display(){
     var p=this.body.position
     push();
     translate(p.x,p.y)
     rotate(this.body.angle)
     imageMode(CENTER)
     fill("red")
     image(this.image,0,0,this.width,this.height)
     pop();
 }


}


