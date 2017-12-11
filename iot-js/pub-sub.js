var awsIot = require('aws-iot-device-sdk')

var device = awsIot.device({
    keyPath: "dev01.private.key",
    certPath: "dev01.cert.pem",
    caPath: "root-CA.crt",
    clientId: "kim01",
    host: "a3w0dqjvzngs31.iot.ap-northeast-2.amazonaws.com"
})

device.on('connect', function() {
  device.subscribe('topic_1');
  console.log('topic_1')

});

device.on('message', function(topic, payload) {
  console.log("사서함 메시지도착")
  console.log("사서함 이름:", topic)
  console.log('받은 메시지:', payload.toString());
  console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')
});