input.onButtonPressed(Button.A, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
})
input.onButtonPressed(Button.B, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
})
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . # # # .
    # # # # #
    # # # # #
    . # # # .
    . # . # .
    `)
SuperBit.Music(SuperBit.enMusic.entertainer)
basic.forever(function () {
	
})
