input.onButtonPressed(Button.A, function () {
    serial.writeLine("Hello there...")
})
makerbit.onIrDatagram(function () {
    basic.showIcon(IconNames.Heart)
    serial.writeLine(makerbit.irDatagram())
    basic.clearScreen()
})
makerbit.connectIrReceiver(DigitalPin.P1)
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
basic.forever(function () {
	
})
