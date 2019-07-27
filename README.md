# nodejsSpider
1. 使用node js 批量爬取网站上的图片, --->photo_spider.js
2. 爬取新闻列表信息（伪header技术使用）。使用到http.request，URL  ,Buffer.concat ,Array.prototype.map.call($('img'),item=>{}) ，encodeURI(),----news_spider.js
3. 使用typescript 封装自己的爬虫。----spider-oop/
4. 使用selenium爬取拉钩网广州区所有前端信息（动态网站），分页功能。---->lagou.js

### 用到的包
1. cheerio ,服务器端，操作字符串。类似jQuery 操作dom。
2. download，用于下载图片等资源。
3. chromedriver.exe  + selenium-webdriver 爬取动态网站
4. node verson 10.15.3

### spider-oop目录  封装了一个简单的爬虫工具（typescript && oop 面向对象）

    `
    npm i typescript  -g
    tsc --init  生成ts配置文件

    `
1. vsc 右键运行命令不见

2. 封装成类而不封装成函数的原因是，类或者对象将来好扩展，函数不易扩展

3. interface 接口的目的，在于约束作用

### selenium 库，自动化测试工具，java,python版本的文章比较多,js的比较少，动态网页爬取

0.  https://www.seleniumhq.org/download/

1. 到npm 中下载 selenium 注意热度、质量、维护程度，selenium 不是需要的包，selenium-webdriver才是。

2. 下载 chromedriver(.exe)  ，注意：需要与chrome 版本对应，不然可能会报版本不一致的错误

3. 把下载好的32位的文件（.exe）放到项目的根目录下。

4. 下载安装npm包， npm install selenium-webdriver

5. 自动翻页功能
  使用到， 递归，while   async await 方法



### 其他
0. 文档 https://www.npmjs.com/package/selenium-webdriver
0. http://chromedriver.storage.googleapis.com/index.html
0. https://www.seleniumhq.org/docs/   找到javascript 版本
1. 网站根目录  robots.txt  查看哪些能爬取的，哪些不允许爬取。
2. ip 代理  防止爬取对象封杀IP
3. vsc 编辑器没有提示对象的方法
4. 控制台中，代码控制input 没法获取焦点（即使没有遮罩层）
5. 反爬虫 前端tooken 加密？ 
6. git reset HEAD 将file退回到unstage区
7. 滚动到底部的分页这么爬取。
8. 图片下载时，中文路径报错，需要encodeURL  编码