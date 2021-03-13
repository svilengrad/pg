let cat = new blockLike.Sprite({
    width: 100,
    height: 100,
    color: 'transparent',
    image: 'http://clipart-library.com/images_k/cats-silhouette-vector/cats-silhouette-vector-2.png'
});

cat.addTo(stage);
cat.setRotationStyle('left-right');
cat.pointInDirection(-90);

cat.whenFlag(function() {
    this.changeX(300);
    this.say("Catch me if you can!");
});


cat.whenKeyPressed(39, function () {// right arrow
    if(this.x < stage.width/ 2-100){
        this.pointInDirection(-90);
        this.changeX(100);
        isGameOver();
    }
});

cat.whenKeyPressed(37, function () {// left arrow
    if(this.x > (stage.width/2 * -1) + 100){
        this.pointInDirection(90);
        this.changeX(-100);
        isGameOver();
    }
});

cat.whenKeyPressed(38, function () {// up arrow
    if(this.y < stage.height/2-100){
        this.changeY(100);
        isGameOver();
    }
});

cat.whenKeyPressed(40, function () {// down arrow
    if(this.y > (stage.height/2 * -1) + 100){
        this.changeY(-100);
        isGameOver();
    }
});