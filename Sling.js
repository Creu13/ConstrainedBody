class Sling
{
    constructor(bird, log) {

        var options  =
    {
        bodyA : bird,
        bodyB: log, 
        stiffness: 0.2, 
        length: 2
    }
        this.sling = Matter.Constraint.create(options);
        Matter.World.add(world,this.sling) // *whenever you add a body you would add it to World
    }
    
    //methods in an object, outside constructor
    display () 
    {
        push()
        stroke("white");
        strokeWeight(7);
        line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.sling.bodyB.position.x,this.sling.bodyB.position.y);
        pop()
    }

}