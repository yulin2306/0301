input.onPinPressed(TouchPin.P2, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.Happy)
})
input.onPinPressed(TouchPin.P1, function () {
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.Sad)
})
basic.showString("Hello!")
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
