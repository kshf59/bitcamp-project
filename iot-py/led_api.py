# LED 제어 모듈
import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(27, GPIO.OUT)

def onLed(state):
    GPIO.output(27, state)