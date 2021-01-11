namespace SpriteKind {
    export const Uncollected = SpriteKind.create()
    export const Collected = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    snail.y += -16
})
function driveCar (car: Sprite, tileImg: Image, startX: number, vx: number) {
    car.setFlag(SpriteFlag.DestroyOnWall, true)
    tiles.placeOnRandomTile(car, tileImg)
    car.x = startX
    car.vx = vx
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    snail.x += -16
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    snail.x += 16
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Uncollected, function (sprite, otherSprite) {
    if (!(heldBerry)) {
        music.baDing.play()
        heldBerry = otherSprite
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        otherSprite.setKind(SpriteKind.Collected)
        berriesLeft += 0 - 1
        info.startCountdown(crossingTime)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    snail.y += 16
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    if (heldBerry) {
        tiles.placeOnTile(heldBerry, location)
        heldBerry.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . f f . . . . . 
            . . . . . f 7 7 f 7 7 f . . . . 
            . . . . . . f 7 7 7 f . . . . . 
            . . . . . . . f 7 f . . . . . . 
            . . . . . . f f 7 f f . . . . . 
            . . . . f 2 2 2 2 2 2 2 f . . . 
            . . . f 2 f 2 2 2 f 2 2 2 f . . 
            . . . f 2 2 2 f 2 2 2 f 2 f . . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . 
            . . . . f 2 f 2 2 2 2 2 f . . . 
            . . . . . 2 2 2 2 f 2 2 . . . . 
            . . . . . f 2 f 2 2 2 f . . . . 
            . . . . . . f 2 2 2 f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        music.baDing.play()
        heldBerry = null
speed += 10
        info.startCountdown(crossingTime)
        if (berriesLeft == 0) {
            pause(500)
            game.over(true)
        }
    }
})
function spawnBerries (numBerries: number, startColumn: number, startRow: number, gap: number) {
    for (let index = 0; index < numBerries; index++) {
        berry = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . f f . . . . . 
            . . . . . f 7 7 f 7 7 f . . . . 
            . . . . . . f 7 7 7 f . . . . . 
            . . . . . . . f 7 f . . . . . . 
            . . . . . . f f 7 f f . . . . . 
            . . . . f 2 2 2 2 2 2 2 f . . . 
            . . . f 2 f 2 2 2 f 2 2 2 f . . 
            . . . f 2 2 2 f 2 2 2 f 2 f . . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . 
            . . . . f 2 f 2 2 2 2 2 f . . . 
            . . . . . 2 2 2 2 f 2 2 . . . . 
            . . . . . f 2 f 2 2 2 f . . . . 
            . . . . . . f 2 2 2 f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Uncollected)
        berry.z = -1
        tiles.placeOnTile(berry, tiles.getTileLocation(startColumn, startRow))
        startColumn += 1 + gap
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    music.pewPew.play()
    otherSprite.destroy()
})
let rightCar: Sprite = null
let leftCar: Sprite = null
let startColumn = 0
let berry: Sprite = null
let crossingTime = 0
let snail: Sprite = null
let berriesLeft = 0
let car = null
let heldBerry: Sprite = null
let column = 0
let row = 0
berriesLeft = 4
scene.setBackgroundColor(7)
tiles.setTilemap(tilemap`level`)
snail = sprites.create(img`
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
tiles.placeOnTile(snail, tiles.getTileLocation(5, 15))
scene.cameraFollowSprite(snail)
snail.setFlag(SpriteFlag.StayInScreen, true)
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
crossingTime = 20
info.setLife(3)
let introMessage = `You're a snail trying to collect berries from the other side of the road.
You can only collect one at a time - drop it off at your flower garden before you go back for more.
Look both ways before you cross!`
game.showLongText(introMessage, DialogLayout.Full)
info.startCountdown(crossingTime)
spawnBerries(berriesLeft, 2, 1, 1)
game.onUpdateInterval(500, function () {
    leftCar = sprites.create(leftCarImg, SpriteKind.Enemy)
    driveCar(leftCar, sprites.vehicle.roadHorizontal, 180, 0 - speed)
    rightCar = sprites.create(rightCarImg, SpriteKind.Enemy)
    driveCar(rightCar, myTiles.tile2, -20, speed)
})
