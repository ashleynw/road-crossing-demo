scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    if (!(hasBerry)) {
        tiles.setTileAt(location, sprites.castle.tileGrass3)
        hasBerry = true
        berriesLeft += 0 - 1
        info.startCountdown(crossingTime)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    crab.y += -16
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    crab.x += -16
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    crab.x += 16
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    crab.y += 16
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    if (hasBerry) {
        tiles.setTileAt(location, myTiles.tile5)
        hasBerry = false
        speed += 10
        info.startCountdown(crossingTime)
        if (berriesLeft == 0) {
            pause(500)
            game.over(true)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let rightCar: Sprite = null
let leftCar: Sprite = null
let hasBerry = false
let berriesLeft = 0
let crab: Sprite = null
let newColor = 0
let car = null
let newCar = null
tiles.setTilemap(tilemap`level`)
crab = sprites.create(img`
    . . . . . . . . . . . c c . . . 
    . . c c . c c c c 3 c 6 3 c . . 
    . f f 5 c 6 c 5 f f 3 3 6 c . . 
    . f f 5 c 6 c 5 f f 3 3 3 3 c . 
    . b 5 5 5 c 5 5 5 c 3 3 3 3 3 c 
    . b 5 5 5 c 5 5 5 c 6 3 3 3 3 c 
    . b b 5 5 3 5 5 c 3 6 3 3 3 c c 
    . b b 5 5 3 5 5 c 3 3 3 6 6 c c 
    . c c 5 5 5 5 5 b c c 3 3 3 3 c 
    c 5 5 4 5 5 5 4 b 5 5 c 3 3 3 c 
    b 5 4 b 4 4 4 4 b b 5 c 3 3 c . 
    c 4 5 5 b 4 b 5 5 5 4 c b b . . 
    c 5 5 5 c 4 c 5 5 5 c 4 4 5 b . 
    c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
    c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
    . c c c c c c c c c . . c c c . 
    `, SpriteKind.Player)
tiles.placeOnTile(crab, tiles.getTileLocation(5, 15))
scene.cameraFollowSprite(crab)
crab.setFlag(SpriteFlag.StayInScreen, true)
let leftCarImg = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 2 2 2 . . 
    . . . . . 2 c 2 2 2 2 2 2 2 2 . 
    . . . . 2 c c 2 2 2 2 2 2 2 c 2 
    . . d 2 d c c 2 2 2 2 2 2 2 c c 
    . d 2 2 d c b 2 2 2 2 2 2 2 2 c 
    . 2 2 2 d b 2 2 b b b 2 b b 2 2 
    . 2 2 2 2 2 2 b b b b 2 b b b 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 d d 2 2 f 2 2 2 f 2 2 2 2 2 
    . d d 2 2 2 2 f 2 2 f 2 2 2 2 2 
    . 2 2 2 2 2 2 2 f f f 2 2 2 2 2 
    . 2 2 2 2 f f f 2 2 2 2 f f f f 
    . . . 2 f f f f f 2 2 f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `
let rightCarImg = img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 c 2 . . . 
    . . 2 c 2 2 2 2 2 2 2 c c 2 . . 
    . 2 c c 2 2 2 2 2 2 2 c c d 2 d 
    . 2 c 2 2 2 2 2 2 2 2 b c d 2 2 
    . 2 2 2 b b 2 b b b 2 2 b d 2 2 
    . 2 2 b b b 2 b b b b 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 f 2 2 2 f 2 2 d d 
    . 2 2 2 2 2 2 f 2 2 f 2 2 2 2 d 
    . 2 2 2 2 2 2 f f f 2 2 2 2 2 2 
    . 2 f f f f 2 2 2 2 f f f 2 2 2 
    . . f f f f f 2 2 f f f f f 2 . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `
let speed = 50
let crossingTime = 15
let introMessage = `Help the snail collect berries from the other side of the road!
You can only collect one at a time.
Look both ways before you cross!`
game.showLongText(introMessage, DialogLayout.Full)
info.startCountdown(crossingTime)
berriesLeft = tiles.getTilesByType(myTiles.tile3).length
game.onUpdateInterval(500, function () {
    leftCar = sprites.create(leftCarImg, SpriteKind.Enemy)
    leftCar.setFlag(SpriteFlag.DestroyOnWall, true)
    tiles.placeOnRandomTile(leftCar, sprites.vehicle.roadHorizontal)
    leftCar.x = 180
    leftCar.vx = 0 - speed
})
game.onUpdateInterval(500, function () {
    rightCar = sprites.create(rightCarImg, SpriteKind.Enemy)
    rightCar.setFlag(SpriteFlag.DestroyOnWall, true)
    tiles.placeOnRandomTile(rightCar, myTiles.tile2)
    rightCar.x = -20
    rightCar.vx = speed
})
