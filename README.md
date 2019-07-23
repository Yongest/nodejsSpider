# nodejsSpider
使用node js 批量爬取网站上的图片,爬取新闻列表信息（伪header使用）。使用到http.request，URL  ,Buffer.concat ,Array.prototype.map.call($('img'),item=>{}) ，encodeURI(),

### 包
cheerio ,download，

### git 
git reset HEAD 将file退回到unstage区


### spider-oop  目录 是封装了一个简单的爬虫工具（typescript && oop 面向对象）

`
    npm i typescript  -g
    tsc --init  生成ts配置文件

`
右键运行不见

封装成类而不封装成函数的原因是，类或者对象将来好扩展，函数不易扩展

接口的目的，在于约束作用