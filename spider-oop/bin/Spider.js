"use strict";
// 希望将来写爬虫的时候，来一个类继承一个祖宗类
// 然后，在子类中处理得到的结果
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('http');
class Spider {
    constructor(options = { url: '', method: "get" }) {
        // 初始化
        this.options = options; /** Property 'options' has no initializer and is not definitely assigned in the constructor.*/
        this.start();
    }
    start() {
        let req = http.request(this.options.url, {
            headers: this.options.headers,
            method: this.options.method,
        }, (res) => {
            let chunks = []; //any 类型的数组
            res.on('data', (chunk) => {
                chunks.push(chunk);
            });
            res.on('end', () => {
                let result = Buffer.concat(chunks).toString('utf-8');
                console.log(result);
            });
        });
        req.end();
    }
}
exports.default = Spider;
