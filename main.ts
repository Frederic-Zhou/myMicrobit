input.onButtonPressed(Button.A, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    SuperBit.MotorStopAll()
})
input.onButtonPressed(Button.B, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
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
