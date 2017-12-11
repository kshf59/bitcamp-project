from AWSIoTPythonSDK.MQTTLib import AWSIoTMQTTClient

import logging
import time
import argparse
import json

def customCallback(client, userdata, message):
    print("메시지 수신: \n")
    print("사서함 ㅣ름: \n")
    print(message.topic + "\n")
    print("메시지 사용: \n")
    print(message.payload + "\n")
    print("---------\n")

host = a3w0dqjvzngs31.iot.ap-northeast-2.amazonaws.com
rootCAPath = "root-CA.crt"
certificatePath = "dev01.cert.pem"
privateKeyPath = "dev01.private.key"
useWebsocket = NONE
clientId = "kim02"
topic = "topic_1"
