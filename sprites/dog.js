/*
 * Preparations
 */

let dog = new blockLike.Sprite({
    width: 100,
    height: 100,
    color: 'transparent',
    image: 'https://www.freeiconspng.com/uploads/animal-pet-dog-icon-15.png'
});

dog.addTo(stage);
dog.setRotationStyle('left-right');
dog.pointInDirection(-90);

/*
 * START
 */

dog.whenRecieveMessage('Start' , function() {
    this.changeX(-300);
    this.say("Run cat!");
});

/*
 * Keys & Movement
 */

dog.whenKeyPressed('w', function(){
    if(this.y < stage.height/2-100){
        this.changeY(100);
        isGameOver();
    }
});

dog.whenKeyPressed('s', function(){
    if(this.y > (stage.height/2 * -1) + 100){
    this.changeY(-100);
    isGameOver();
    }
});

dog.whenKeyPressed('d', function(){
    if(this.x < stage.width/2-100){
        this.changeX(100);
        this.pointInDirection(90);
        isGameOver();
    }

});

dog.whenKeyPressed('a', function(){
    if(this.x > (stage.width/2 * -1) + 100){
        this.changeX(-100);
        this.pointInDirection(-90);
        isGameOver();
    }
    
});
