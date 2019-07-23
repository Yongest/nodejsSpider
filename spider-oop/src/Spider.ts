// 希望将来写爬虫的时候，来一个类继承一个祖宗类
// 然后，在子类中处理得到的结果

// 爬虫用法：创建爬虫对象，传入URL自动爬取

import SpiderOptions from './interfaces/SpiderOptions'
const http = require('http')

export default class Spider {
    // 定义成员
    options:SpiderOptions     /** Property 'options' does not exist on type 'Spider'*/
    constructor(options:SpiderOptions = {url:'',method:"get"} ){
        // 初始化
        this.options = options    /** Property 'options' has no initializer and is not definitely assigned in the constructor.*/
        this.start()
    }
    start(){
      let req =   http.request(this.options.url,{
            headers:this.options.headers,
            method:this.options.method,   //需要添加默认值
        },(res:any)=>{
            let chunks:any[] = [];  //any 类型的数组
            res.on('data',(chunk:any)=>{
                chunks.push(chunk)
            })

            res.on('end',()=>{
              let result =   Buffer.concat(chunks).toString('utf-8')
              console.log(result)
            })
        })

        req.end()
    }
}
