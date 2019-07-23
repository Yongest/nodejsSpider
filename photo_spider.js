
const URLOBJECT = "http://web.itheima.com/"

const http = require('http');
// nodejs 中的jQuery
const cheerio = require('cheerio')

const fs = require('fs');
// 下载资源工具包
const download = require('download');

const req = http.request(URLOBJECT+'teacher.html#ajavaee', (res) => {
    // console.log(`STATUS: ${res.statusCode}`);
    // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    // 使用第二种方法时，需要注释掉，
    // res.setEncoding('utf8');

    let chunkArr = [];
    res.on('data', (chunk) => {
        chunkArr.push(chunk)

    });
    res.on('end', () => {
    // 第一种方法
    //  let html =  chunkArr.join('');


    // 替代上面的方法
    // 第二种方法
    let html = Buffer.concat(chunkArr).toString('utf-8')


     const $ = cheerio.load(html)
     
    
    //  let imgArr = [];
    // for(var i = 0;i<$('.tea_txt .li_img>img').length;i++){
    //     imgArr.push((encodeURI(URLOBJECT+$('.tea_txt .li_img>img').eq(i).attr('src'))))
    // }

// 替代上面的方法
    let imgArr = Array.prototype.map.call($('.tea_txt .li_img>img'),(item)=>{
       return encodeURI(URLOBJECT+$(item).attr('src'))
    })

   

//    下载文件到dist 目录
     Promise.all(imgArr.map(x => download(x, 'dist'))).then(() => {
        console.log('files downloaded!');
    });
      
      
    });
  });

  req.end();