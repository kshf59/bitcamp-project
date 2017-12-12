from AWSIoTPythonSDK.MQTTLib import AWSIoTMQTTClient

import logging
import time
import argparse
import json

def customCallback(client, userdata, message):
    print("메시지 수신: ")
    print("사서함 이름: ")
    print(message.topic)
    print("메시지 사용: ")
    #print(message.payload)
    dict = json.loads(message.payload.decode('UTF-8'))
    print(dict['message'])
    print("---------")

host = "a3w0dqjvzngs31.iot.ap-northeast-2.amazonaws.com"
rootCAPath = "root-CA.crt"
certificatePath = "dev01.cert.pem"
privateKeyPath = "dev01.private.key"
useWebsocket = "FALSE"
clientId = "kim02"
topic = "topic_1"

logger = logging.getLogger("AWSIoTPythonSDK.core")
logger.setLevel(logging.DEBUG)
streamHandler = logging.StreamHandler()
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
streamHandler.setFormatter(formatter)
logger.addHandler(streamHandler)

myAWSIoTMQTTClient = AWSIoTMQTTClient(clientId)
myAWSIoTMQTTClient.configureEndpoint(host, 8883)
myAWSIoTMQTTClient.configureCredentials(rootCAPath, privateKeyPath, certificatePath)

# AWSIoTMQTTClient connection configuration
myAWSIoTMQTTClient.configureAutoReconnectBackoffTime(1, 32, 20)
myAWSIoTMQTTClient.configureOfflinePublishQueueing(-1)  # Infinite offline Publish queueing
myAWSIoTMQTTClient.configureDrainingFrequency(2)  # Draining: 2 Hz
myAWSIoTMQTTClient.configureConnectDisconnectTimeout(10)  # 10 sec
myAWSIoTMQTTClient.configureMQTTOperationTimeout(5)  # 5 sec


myAWSIoTMQTTClient.connect()
print("connect")

myAWSIoTMQTTClient.subscribe(topic, 1, customCallback)
