const postbackHandler = {}


const addPostback = (postback, handler) => {
    messageHandler[postback] = handler;
}

const getHandler = (postback) => {
    return postbackHandler[postback];
}

module.exports = {
    getHandler
}