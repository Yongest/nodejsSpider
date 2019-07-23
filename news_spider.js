
// const URLOBJECT = "http://www.itcast.cn/newsvideo/newslist.html"
const URLOBJECT = "http://www.itcast.cn/news/json/f1f5ccee-1158-49a6-b7c4-f0bf40d5161a.json"

const http = require('http');
// nodejs 中的jQuery
const cheerio = require('cheerio')


const req = http.request(URLOBJECT, {
    headers:{
        "Accept":" */*",
        "Accept-Encoding":" gzip, deflate",
        "Accept-Language":" zh-CN,zh;q=0.9,en;q=0.8",
        "Connection":" keep-alive",
        "Content-Length":" 0",
        "Cookie":" UM_distinctid=1691e06237a2e3-07c3a05ae6ccc8-1333063-1fa400-1691e06237b198; bad_idb2f10070-624e-11e8-917f-9fb8db4dc43c=e49a9811-37f6-11e9-9a95-e726cc7fecda; parent_qimo_sid_b2f10070-624e-11e8-917f-9fb8db4dc43c=ea0a8030-37f6-11e9-8c6b-a7d8c8ea8acb; bad_id22bdcd10-6250-11e8-917f-9fb8db4dc43c=f1bb7eb1-37f6-11e9-8279-13374a296576; parent_qimo_sid_22bdcd10-6250-11e8-917f-9fb8db4dc43c=fff46500-37f6-11e9-bc2a-21726d547278; CNZZDATA1277769855=956004727-1562930091-%7C1562930091; bad_id994d4130-1df9-11e9-b7ec-7766c2691ec6=7747c111-a49e-11e9-90d4-6b51b220add0; CNZZDATA4617777=cnzz_eid%3D1358907168-1550985749-null%26ntime%3D1563890556; qimo_seosource_b2f10070-624e-11e8-917f-9fb8db4dc43c=%E7%AB%99%E5%86%85; qimo_seokeywords_b2f10070-624e-11e8-917f-9fb8db4dc43c=; href=http%3A%2F%2Fwww.itcast.cn%2Fnewsvideo%2Fnewslist.html; accessId=b2f10070-624e-11e8-917f-9fb8db4dc43c; Hm_lvt_0cb375a2e834821b74efffa6c71ee607=1563893373; nice_idb2f10070-624e-11e8-917f-9fb8db4dc43c=14f7f5c1-ad59-11e9-9992-4b3972a52d0b; openChatb2f10070-624e-11e8-917f-9fb8db4dc43c=true; Hm_lpvt_0cb375a2e834821b74efffa6c71ee607=1563893417; qimo_talking_b2f10070-624e-11e8-917f-9fb8db4dc43c=false; pageViewNum=3",
        "Host":" www.itcast.cn",
        "Origin":" http://www.itcast.cn",
        "Referer":" http://www.itcast.cn/newsvideo/newslist.html",
        "User-Agent":" Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36",
        "X-Requested-With":" XMLHttpRequest",   
    }
},(res) => {
    let chunkArr = [];
    res.on('data', chunk => chunkArr.push(chunk));

    res.on('end', () => {
    // 第一种方法
    //  let html =  chunkArr.join('');


    let result = Buffer.concat(chunkArr).toString('utf-8')

      console.log(JSON.parse(result))
    });
  });

  req.end();