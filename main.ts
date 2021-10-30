input.onButtonPressed(Button.A, function () {
    if (state == 0) {
        for (let index = 0; index < 5; index++) {
            count += 1
            basic.showNumber(count)
            basic.pause(1000)
        }
        state = 1
    } else {
        for (let index = 0; index < 5; index++) {
            count += -1
            basic.showNumber(count)
            basic.pause(1000)
        }
        state = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
    basic.pause(5000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Heart)
    basic.pause(5000)
    basic.clearScreen()
})
let state = 0
let count = 0
count = 0
state = 0
