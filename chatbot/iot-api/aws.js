const awsIot = require('aws-iot-device-sdk')

const devices = {};
const dev01 = awsIot.device({
    keyPath: "/home/ec2-user/vars/aws-iot/dev01/dev01.private.key",
    certPath: "/home/ec2-user/vars/aws-iot/dev01/dev01.cert.pem",
    caPath: "/home/ec2-user/vars/aws-iot/root-CA.crt",
    clientId: "chatbot",
    host: "a3w0dqjvzngs31.iot.ap-northeast-2.amazonaws.com"
})

dev01.on('connect', function() {
    console.log('AWS IoT의 dev01 장비와 연결되었음!')
    devices['dev01'] = dev01;
  });

function publish(deviceName, topic, data) {
    device[deviceName].publish(topic, JSON.stringify(dataObj))
}

module.exports = {
    publish
}