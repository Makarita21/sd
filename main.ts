input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        ledsHeartAnimation()
    }
})
function ledsHeartAnimation () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.clearScreen()
    basic.pause(500)
}
function iconHeartAnimation () {
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.pause(500)
}
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 5; index++) {
        iconHeartAnimation()
    }
})
