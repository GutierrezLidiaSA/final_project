let raw: number;
let temp: number;
/** 
using tmp36 which is not the most accurate tempurature sensor 
if i had planned better i would have bought a sensor with digital pins
not analog pins :(

 */
//  36ish healthy human tempurature
while (true) {
    raw = pins.analogReadPin(AnalogPin.P0) * (3100 / 1024)
    // tempurature in celcius 
    temp = (raw - 500.0) / 10 - 56
    //     basic.show_number(temp_C)
    //     basic.pause(3000)
    // shows when tempurature is too low
    if (temp < 36.111) {
        basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    } else if (temp > 37.222) {
        // shows when tempurature is too high
        basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    } else {
        // shows when tempurature is good
        basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    }
    
}
