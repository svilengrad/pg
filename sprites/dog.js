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
    this.changeY(100);
    
});

dog.whenKeyPressed('s', function(){
    this.changeY(-100);
});

dog.whenKeyPressed('d', function(){
        this.changeX(100);
        this.pointInDirection(90);

});

dog.whenKeyPressed('a', function(){
        this.changeX(-100);
        this.pointInDirection(-90);
    
});