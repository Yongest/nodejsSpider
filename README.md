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

### selenium 库，自动化测试工具，有java,python ,js比较少，动态网页爬取
反爬虫 前端tooken 加密？

1. 到npm 中下载 selenium 注意热度，质量，维护程度，selenium 不是需要的包，selenium-webdriver才是。

2. 下载 chromedriver(.exe)  ，注意：需要与chrome 版本对应，不然可能会报版本不一致的错误

3. 把下载好的32位的文件（.exe）放到项目的根目录下。

4. 下载安装npm 包， npm install selenium-webdriver