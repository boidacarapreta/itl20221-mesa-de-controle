let raspberrypi = ""
serial.setBaudRate(BaudRate.BaudRate115200)
let canal = 100
radio.setGroup(canal)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    raspberrypi = serial.readLine()
    radio.sendNumber(parseFloat(raspberrypi))
    basic.showString(raspberrypi)
})
