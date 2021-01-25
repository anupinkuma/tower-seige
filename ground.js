class Ground{
    constructor(x,y,width,height){
 var option={isStatic:true}
    
this.body=Bodies.rectangle(x,y,width,height,option);
this.width=width;
this.height=height;
World.add(world,this.body)
    }
    display(){
        push();
        var p=this.body.position
        rectMode(CENTER)
        fill("yellow")
        rect(p.x,p.y,this.width,this.height)
        pop();
    }
}