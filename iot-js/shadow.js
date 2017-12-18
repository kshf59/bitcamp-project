
var awsIot = require('aws-iot-device-sdk')

const thingName = 'dev01';


var thingShadows = awsIot.thingShadow({
    keyPath: "dev01.private.key",
    certPath: "dev01.cert.pem",
    caPath: "root-CA.crt",
    clientId: "kim02",
    host: "a3w0dqjvzngs31.iot.ap-northeast-2.amazonaws.com"
})

// Thing의 섀도우 제어 장비가 준비되었을 때 호출될 함수 등록
thingShadows.on('connect', function() {
  console.log('섀도우 관리자가 준비되었다.');
  
  // 지정한 Thing에 대해 섀도우 연결을 요청한다.
  // => Shadow 연결에 성공한다면 설정된 함수가 호출될 것이다.
  thingShadows.register(thingName, {}, function() {
      console.log('섀도우에 연결하였음!');
      
      // 장비가 준비되면 일단 섀도우 설정된 값을 가져온다.
      console.log('섀도우에 설정된 값 조회를 요청한다.')
      thingShadows.get('dev01');
      /*
      // 섀도우가 생성되면 섀도우에 값을 저장할 수 있다.
      // update(Thing이름, 값)
      */
  });
  
});

// Thing의 Shadow에 대해 명령을 지시하고 그 명령을 수행한 후에 호출될 함수 등록
thingShadows.on('status', 
  function(thingName, stat, clientToken, stateObject) {
      if ((stat === "rejected") && (stateObject.code === 404)) {
          // 섀도우에 값이 없다면 기본 값을 설정한다.
          console.log('섀도우에 값이 없어서 기본 값을 설정하였음!');
          thingShadows.update(thingName, {
              state: {
                  desired: {
                      led: "off"
                  }}});
      } else {
          console.log('received '+stat+' on '+thingName+': '+
                 JSON.stringify(stateObject));
      }
});

// Shadow의 상태가 변경되었을 때 
// 부가적으로 발생되는 이벤트가 발생하는 데 그 때 호출 될 메서드를 등록한다.
thingShadows.on('delta', 
  function(thingName, stateObject) {
     console.log('received delta on '+thingName+': '+
                 JSON.stringify(stateObject));
});

// 지정된 타임아웃 시간이 경과했을 때 호출될 함수 등록
thingShadows.on('timeout',
  function(thingName, clientToken) {
     console.log('received timeout on '+thingName+
                 ' with token: '+ clientToken);
});