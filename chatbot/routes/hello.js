// nodeJS 에서 EXpress 모듈을 사용할 경우
// 다음과 같이 express의 라우터 객체에 클라이언트 요청을 처리할 함수를 등록한다.
// 만약 Express 모듈을 사용하지 않는다면 다음 코드는 무효하다.
//import express from 'express';

const express = require('express')
// 클라이언트 요청이 들어왔을 떄 함수를 호출해주는 객체
const router = express.Router();

// 라우터 객체에 URL에 대해 호출될 함수를 등록한다.
router.get('/', (req, res) => {
    // 헤드값 출력
    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=UTF-8'
    })
    res.write('hello.............................................!\n')
    res.end()
})

router.get('/test1', (req, res) => {
    // 헤드값 출력
    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=UTF-8'
    })
    res.write('tes1\n')
    res.end()
})

router.get('/test2', (req, res) => {
    // 헤드값 출력
    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=UTF-8'
    })
    res.write('tes2\n')
    res.end()
})

//export default router;
module.exports = router;