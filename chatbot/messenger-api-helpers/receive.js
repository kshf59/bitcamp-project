const sendAPI = require('./send');
const openAPI = require('../rest-api/openapi')
const handleReceiveMessage = (event) => {
    var senderID = event.sender.id;
    var recipientID = event.recipient.id;
    var timeOfMessage = event.timestamp;
    var message = event.message;

    console.log("Received message for user %d and page %d at %d with message:", 
        senderID, recipientID, timeOfMessage);

    var messageId = message.mid;
    var messageText = message.text;
    var messageAttachments = message.attachments; 
    
    var menu = global[senderID].menu; //사용자의 현재 메뉴

    if(menu == 'calc') {
        // 현재 계산기 메뉴일 때는 사용자가 입력한 값이
        // 계간식이라고 가정하고 메세지를 분석한다.
        menuCalc(senderID, messageText);

    } else if (messageText == 'help') {
        sendAPI.sendMenuMessage(senderID);
        // 현재 메뉴를 출력한 상태
        global[senderID].menu = 'help';
    } else if (messageText.startsWith('searchAddress:')) {
        try {
        var arr = messageText.split(':')[1].split('=')
        openAPI.searchNewAddress(arr[0],arr[1], (msg) =>{
            sendAPI.sendTextMessage(senderID, msg);
        });
        } catch (err) {
            console.log(err)
        }
    } else {
        sendAPI.sendTextMessage(senderID, messageText);
    }
};

const handleReceivePostback = (event) => {
    var senderID = event.sender.id;
    var recipientID = event.recipient.id;
    var timeOfPostback = event.timestamp;
    var payload = event.postback.payload;

    console.log("Received postback for user %d and page %d with payload '%s' at %d",
               senderID, recipientID, payload, timeOfPostback);


    var menu = global[senderID].menu;
    if(menu == 'help') {
        menuHelp(senderID, payload)
    } else if (menu == 'led') {
        menuLed(senderID, payload);
    }

               /*
    if (payload == 'led_on') {
        sendAPI.sendTextMessage(senderID, "전구를 켜겠습니다.");
    } else if (payload == 'led_off') {
        sendAPI.sendTextMessage(senderID, "전구를 끄겠습니다.");
    }
    */
};




const menuHelp = (senderID, payload)  => {
    if (payload == 'menu_led') {
        sendAPI.sendLedMessage(senderID)
        global[senderID].menu = 'led' // 이 사용자의 현재 메뉴는 'LED 스위치' 이다.
    } else if (payload == 'menu_calc') {
        sendAPI.sendTextMessage(senderID, '식을 입력하세요. \nex) 2+3')
        global[senderID].menu = 'calc'
    } else if (payload == 'menu_addr') {
        console.log('주소검색 메뉴를 눌렀네요!')
    }
}


const menuLed = (senderID, payload)  => {
    if(payload == 'led_on') {
        sendAPI.sendTextMessage(senderID, '조명 킴')
        // 나중에 스프링 부트에 LED 켜는 명령을 보낸다.
    } else if (payload == 'led_off') {
        sendAPI.sendTextMessage(senderID, '조명 끔')        
    }
};

const menuCalc = (senderID, messageText) => {

    try {
        var tokens = messageText.split(' ');
        var a = parseInt(tokens[0]);
        var op = tokens[1]
        var b = parseInt(tokens[2])
        switch (op) {
            case '+': result = a+b; break;
            case '-': result = a-b; break;
            case '*': result = a*b; break;
            case '/': result = a/b; break;
            case '%': result = a%b; break;
            default:
            sendAPI.sendTextMessage(senderID,
                '+,-,*,/, % 연산자만 사용 가능함')
            return
        }
        sendAPI.sendTextMessage(senderID, '계산 결과는' + result + '입니다.')
    } catch (exception) {
        sendAPI.sendTextMessage(senderID, "계산식 형식이 옳지 않습니다.")
    }
}
module.exports = {
    handleReceiveMessage,
    handleReceivePostback
};