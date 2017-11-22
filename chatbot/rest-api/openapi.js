const request = require('request')

const searchNewAddress = (searchWord) => {
    request({
        uri: 'http://openapi.epost.go.kr/postal/retrieveNewAdressAreaCdService/retrieveNewAdressAreaCdService/getNewAddressListAreaCd',
        qs: {
            'ServiceKey': '2IpWxjQOHVloVq5KV1aagDyehbUJhN8KzVlF2R875LOvUUCDbleSzmLUt2dApjO8l3OpmcJxo6tdgKjQr4O8KQ%3D%3D',
            'searchSe': 'dong',
            'srchwrd': encodeURIComponent('searchWord'),
            'countPerPage': '10',
            'currentPage': '1'
        },
        method: 'GET',

    }, function(error, response, body) {
        console.log('=>Status', response.statusCode);
        console.log('=>Headers', JSON.stringify(response.headers));
        console.log('=>Reponse received', body);
    });
};

module.exports = {
    searchNewAddress
};