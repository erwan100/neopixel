input.onButtonPressed(Button.A, function () {
    lux += -50
})
input.onButtonPressed(Button.B, function () {
    lux += 50
})
let strip = neopixel.create(DigitalPin.P16, 12, NeoPixelMode.RGB)
let lux = 100
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(lux)
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(lux)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(lux)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(lux)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(lux)
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    basic.pause(lux)
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    basic.pause(lux)
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    basic.pause(lux)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    basic.pause(lux)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(lux)
})
