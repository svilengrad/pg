const STEP = 100;

let dog = new blockLike.Sprite({
    width: 100,
    height: 100,
    color: 'transparent',
    image: 'https://www.freeiconspng.com/uploads/animal-pet-dog-icon-15.png'
});

dog.addTo(stage);
dog.setRotationStyle('left-right');
dog.pointInDirection(-90);

dog.whenFlag(function() {
    this.changeX(-300);
    this.say("Run cat!");
});

dog.whenKeyPressed('w', function(){
    if(this.y < stage.height/2-STEP){
        this.changeY(STEP);
    }
});

dog.whenKeyPressed('s', function(){
    if(this.y > (stage.height/2 * -1) + STEP){
        this.changeY(-STEP);
    }
});

dog.whenKeyPressed('d', function(){
    if(this.x < stage.width/2-STEP){
        this.changeX(STEP);
        this.pointInDirection(90);
    }
});

dog.whenKeyPressed('a', function(){
    if(this.x > (stage.width/2 * -1) + STEP){
        this.changeX(-STEP);
        this.pointInDirection(-90);
    }
});