namespace SpriteKind {
    export const point = SpriteKind.create()
}
function relativeX (num: number) {
    return num + (scene.cameraProperty(CameraProperty.X) - scene.screenWidth() / 2)
}
function relativeY (num: number) {
    return num + (scene.cameraProperty(CameraProperty.Y) - scene.screenHeight() / 2)
}
browserEvents.MouseLeft.onEvent(browserEvents.MouseButtonEvent.Pressed, function (x, y) {
    point2 = sprites.create(img`
        . f . 
        1 2 1 
        . f . 
        `, SpriteKind.point)
    point2.setPosition(relativeX(x), relativeY(y))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump == true) {
        character.vy = -110
        character.sayText(";(")
        jump = false
    }
    if (wallJump.value != 0 && (character.isHittingTile(CollisionDirection.Left) || character.isHittingTile(CollisionDirection.Right))) {
        character.vy = -90
        wallJump.value += -1
        if (character.isHittingTile(CollisionDirection.Left)) {
            character.vx = -100
        } else {
            character.vx = 100
        }
    }
})
browserEvents.onMouseMove(function (x, y) {
    aim.setPosition(x, y)
    relativecursor.setPosition(relativeX(x), relativeY(y))
    cube.y = (relativecursor.y + character.y) / 2
    cube.x = (relativecursor.x + character.x) / 2
    cube2.y = (cube.y + cube3.y) / 2
    cube2.x = (cube.x + cube3.x) / 2
    cube3.y = (cube2.y + cube4.y) / 2
    cube3.x = (cube2.x + cube4.x) / 2
    cube4.y = (cube3.y + character.y) / 2
    cube4.x = (cube3.x + character.x) / 2
})
function degree_to_radian (deg: number) {
    return spriteutils.consts(spriteutils.Consts.Pi) / 180 * deg
}
function card_shot () {
    if (aim.overlapsWith(cube2)) {
        spellshot = darts.create(img`
            . . . f f . . . 
            . . f c f f . . 
            . f c c c f f . 
            f c c f f f c f 
            f f c c f f c f 
            . f f c f c f . 
            . . f f c f . . 
            . . . f f . . . 
            `, SpriteKind.Projectile, character.x, character.y)
        spellshot.angle = 0 - Math.abs(degrees)
        spellshot.pow = 150
        spellshot.gravity = 50
        spellshot.throwDart()
    } else if (aim.overlapsWith(cube3)) {
        spellshot = darts.create(img`
            . . . f f . . . 
            . . f c f f . . 
            . f c c c f f . 
            f c c f f f c f 
            f f c c f f c f 
            . f f c f c f . 
            . . f f c f . . 
            . . . f f . . . 
            `, SpriteKind.Projectile, character.x, character.y)
        spellshot.angle = 0 - Math.abs(degrees)
        spellshot.pow = 150
        spellshot.gravity = 50
        spellshot.throwDart()
    } else if (aim.overlapsWith(cube)) {
        spellshot = darts.create(img`
            . . . f f . . . 
            . . f c f f . . 
            . f c c c f f . 
            f c c f f f c f 
            f f c c f f c f 
            . f f c f c f . 
            . . f f c f . . 
            . . . f f . . . 
            `, SpriteKind.Projectile, character.x, character.y)
        spellshot.angle = 0 - Math.abs(degrees)
        spellshot.pow = 100
        spellshot.gravity = 70
        spellshot.throwDart()
    } else if (aim.overlapsWith(cube4)) {
        spellshot = darts.create(img`
            . . . f f . . . 
            . . f c f f . . 
            . f c c c f f . 
            f c c f f f c f 
            f f c c f f c f 
            . f f c f c f . 
            . . f f c f . . 
            . . . f f . . . 
            `, SpriteKind.Projectile, character.x, character.y)
        spellshot.angle = 0 - Math.abs(degrees)
        spellshot.pow = 100
        spellshot.gravity = 70
        spellshot.throwDart()
        spellshot.stopDart()
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    card_shot()
})
function spellDeck () {
    spellCardAttacks = [
    assets.image`cardHunt`,
    assets.image`cardSwarm`,
    assets.image`cardShot`,
    assets.image`cardMeteor`,
    assets.image`cardZag`,
    assets.image`cardRay`
    ]
    spellCardSuport = [
    assets.image`cardBounce`,
    assets.image`cardPush`,
    assets.image`cardShield`,
    assets.image`cardBarrior`,
    assets.image`cardwing`,
    assets.image`cardDash`
    ]
}
function sprites2 () {
    character = sprites.create(assets.image`maincharacter`, SpriteKind.Player)
    cursor = sprites.create(img`
        2 2 
        2 2 
        `, SpriteKind.Player)
    relativecursor = sprites.create(img`
        8 8 8 8 
        8 9 9 8 
        8 9 9 8 
        8 8 8 8 
        `, SpriteKind.Player)
    aim = sprites.create(img`
        . . . . . . . . 
        . . 1 1 1 1 . . 
        . 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 . 
        . . 1 1 1 1 . . 
        . . . . . . . . 
        `, SpriteKind.Player)
    cube = sprites.create(img`
        . . . . . . . 
        . 2 2 2 2 2 . 
        . 2 2 2 2 2 . 
        . 2 2 2 2 2 . 
        . 2 2 2 2 2 . 
        . 2 2 2 2 2 . 
        . . . . . . . 
        `, SpriteKind.Player)
    cube2 = sprites.create(img`
        . . . . . . . 
        . 2 2 2 2 2 . 
        . 2 2 2 2 2 . 
        . 2 2 2 2 2 . 
        . 2 2 2 2 2 . 
        . 2 2 2 2 2 . 
        . . . . . . . 
        `, SpriteKind.Player)
    cube3 = sprites.create(img`
        . . . . . . . 
        . 2 2 2 2 2 . 
        . 2 2 2 2 2 . 
        . 2 2 2 2 2 . 
        . 2 2 2 2 2 . 
        . 2 2 2 2 2 . 
        . . . . . . . 
        `, SpriteKind.Player)
    cube4 = sprites.create(img`
        . . . . . . . 
        . 2 2 2 2 2 . 
        . 2 2 2 2 2 . 
        . 2 2 2 2 2 . 
        . 2 2 2 2 2 . 
        . 2 2 2 2 2 . 
        . . . . . . . 
        `, SpriteKind.Player)
    scene.setBackgroundImage(assets.image`sunnyCastle`)
}
let cursor: Sprite = null
let spellCardSuport: Image[] = []
let spellCardAttacks: Image[] = []
let spellshot: Dart = null
let cube4: Sprite = null
let cube3: Sprite = null
let cube2: Sprite = null
let cube: Sprite = null
let relativecursor: Sprite = null
let point2: Sprite = null
let aim: Sprite = null
let degrees = 0
let jump = false
let wallJump: StatusBarSprite = null
let character: Sprite = null
sprites2()
scene.cameraFollowSprite(character)
wallJump = statusbars.create(20, 4, StatusBarKind.Energy)
wallJump.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
wallJump.max = 100
wallJump.attachToSprite(character, 0, 0)
wallJump.positionDirection(CollisionDirection.Bottom)
controller.moveSprite(character, 80, 0)
character.ay = 100
jump = true
tiles.setCurrentTilemap(tilemap`level1`)
spellDeck()
scene.cameraFollowSprite(character)
let basicEnemy = sprites.create(assets.image`basicEnemy`, SpriteKind.Enemy)
let enemyhp = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
enemyhp.max = 50
enemyhp.value = 50
enemyhp.attachToSprite(basicEnemy)
character.setPosition(106, 95)
scene.setBackgroundColor(11)
character.z = 2
degrees = 0
let radius = 20
let aim_sensitivity = 5
aim.z = 1
let angle = 0
forever(function () {
    if (character.isHittingTile(CollisionDirection.Bottom)) {
        jump = true
        character.sayText(";)")
        wallJump.value += 1
        pause(200)
    }
})
game.onUpdate(function () {
    if (character.x > relativecursor.x && !(aim.overlapsWith(cube) || aim.overlapsWith(cube4) || (aim.overlapsWith(cube2) || aim.overlapsWith(cube3)))) {
        degrees += 0 - aim_sensitivity * 1
    } else if (aim.x > relativecursor.x && !(aim.overlapsWith(cube) || aim.overlapsWith(cube4) || (aim.overlapsWith(cube2) || aim.overlapsWith(cube3)))) {
    	
    }
    if (character.x < relativecursor.x && !(aim.overlapsWith(cube) || aim.overlapsWith(cube4) || (aim.overlapsWith(cube2) || aim.overlapsWith(cube3)))) {
        degrees += aim_sensitivity * 1
    } else if (aim.x < relativecursor.x && !(aim.overlapsWith(cube) || aim.overlapsWith(cube4) || (aim.overlapsWith(cube2) || aim.overlapsWith(cube3)))) {
    	
    } else {
    	
    }
    if (degrees < 0) {
        degrees = 359
    } else if (degrees > 359) {
        degrees = 0
    }
    aim.y = character.y + radius * Math.sin(degree_to_radian(1))
    aim.x = character.x + radius * Math.sin(degree_to_radian(1))
})
