let raspberrypi = ""
serial.setBaudRate(BaudRate.BaudRate115200)
let canal = 100
radio.setGroup(canal)
let bairro = 0
basic.showString("" + (bairro))
basic.forever(function () {
    raspberrypi = serial.readLine()
    radio.sendString(raspberrypi)
    basic.showString(raspberrypi)
})
