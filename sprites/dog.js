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
    this.playSoundUntilDone('sounds/GoGo.mp3');
});

dog.whenKeyPressed('w', function(){
    if(this.y < stage.height/2-100){
        this.changeY(100);
    }
});

dog.whenKeyPressed('s', function(){
    if(this.y > (stage.height/2 * -1) + 100){
    this.changeY(-100);
    }
});

dog.whenKeyPressed('d', function(){
    if(this.x < stage.width/2-100){
        this.changeX(100);
        this.pointInDirection(90);
    }

});

dog.whenKeyPressed('a', function(){
    if(this.x > (stage.width/2 * -1) + 100){
        this.changeX(-100);
        this.pointInDirection(-90);
    }
    
});

dog.whenClicked( function() {
    while(!dog.isTouching(cat)) {
        this.say("I win!");
    }
});