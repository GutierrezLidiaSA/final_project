'''
using tmp36 which is not the most accurate tempurature sensor 
if i had planned better i would have bought a sensor with digital pins
not analog pins :(
'''
# 36ish healthy human tempurature
while True:
    raw = pins.analog_read_pin(AnalogPin.P0) * (3100 / 1024)
    #tempurature in celcius VVV
    temp = ((raw - 500.0) / 10) - 56
#    basic.show_number(temp_C)
#    basic.pause(3000)
#shows when tempurature is too low
    if temp < 36.111:
        basic.show_leds("""
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        """)
#shows when tempurature is too high
    elif temp > 37.222:
        basic.show_leds("""
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        """)
#shows when tempurature is good
    else:
        basic.show_leds("""
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        """)