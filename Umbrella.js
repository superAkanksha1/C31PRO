class Umbrella {
    constructor(x,y) {
        var options = {
            isStatic: true,
            restitution: 1,
            friction:0.1,
            density:0.8
        }
        
        this.body = Bodies.circle(x,y,100, options);
        this.x = x;
        this.y = y;
        
        World.add(world, this.body);
    }
    display(){
        push();
        ellipseMode(CENTER);
        fill("black");
        circle(this.body.position.x, this.body.position.y,100, 100);
        pop();
        
    }       
};