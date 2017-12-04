const sendAPI = require('./send');
// 메세지를 받았을때 그메세지를 처리할 함수
const messageHandler = {}

const addMessage = (message, handler) => {
    messageHandler[message] = handler;
}

const getHandler = (message) => {
    return messageHandler[message];
}

// help 메세지를 처리할 함수 등록
addMessage('help', (senderID) => {

    const sendMenuMessage = (recipientId) => {
        var messageData = {
          recipient: {
            id: recipientId
          },
          message: {
            "attachment":{
              "type":"template",
              "payload":{
                "template_type":"button",
                "text":"메뉴",
                "buttons":[
                  {
                    "type":"postback",
                    "title":"Led",
                    "payload":"menu_led"
                  },
                  {
                    "type":"postback",
                    "title":"주소검색",
                    "payload":"menu_addr"
                  },
                  {
                    "type":"postback",
                    "title":"계산기",
                    "payload":"menu_calc"
                  }
                ]
              }
            }
          }
        };
      
        api.callMessagesAPI(messageData);
      };
       
})


module.exports = {

}