let cat = new blockLike.Sprite({
    width: 100,
    height: 100,
    color: 'transparent',
    image: 'http://clipart-library.com/images_k/cats-silhouette-vector/cats-silhouette-vector-2.png'
});

cat.addTo(stage);
cat.setRotationStyle('left-right');
cat.pointInDirection(-90);

cat.whenFlag(function () {
    this.changeX(300);
    this.say("Catch me if you can!");
    cat.nextCostume();
})

cat.whenKeyPressed(' ', function() {
    console.log('stretching')
    stretchCostume.addTo(cat);
})

cat.whenKeyPressed(39, function () {// right arrow
    this.pointInDirection(-90);
    this.changeX(100);
});

cat.whenKeyPressed(37, function () {// left arrow
    this.pointInDirection(90);
    this.changeX(-100);
});

cat.whenKeyPressed(38, function () {// up arrow
    this.changeY(100);
});

cat.whenKeyPressed(40, function () {// down arrow
    this.changeY(-100);
});