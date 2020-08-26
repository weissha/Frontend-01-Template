## 工具链——publish

### 使用 PhantomJS 

1. 前往[官网](https://phantomjs.org/download)下载并解压；

2. Windows 系统需要在 系统 > 高级系统设置 > 环境变量  > 系统变量 的 path 中添加文件路径，我的是 `D:\phantomjs-2.1.1-windows\bin`；

3. 测试安装是否成功

   ```
   phantomjs --version
   ```

4. [官网教程](https://phantomjs.org/quick-start.html)。

## 工具链——Lint-ESLint

1. 配置能够检查 react jsx 语法的 Eslint

   ```
   npm install eslint --save-dev
   npm install eslint-plugin-react --save-dev
   npm install eslint-config-airbnb-base --save-dev
   npm install eslint-plugin-import --save-dev
   ```

2. 初始化 eslint

   ```
   npx eslint --init
   ```

3. 检查文件

   ```
   npx eslint ./main.js
   ```

4. 在 .eslintrc.js 文件中添加配置

   ```
   settings: {
       react: {
           'createClass': 'createReactClass',
           'pragma': 'createElement', // Pragma to use, default to 'React'
           'version': 'detect', 
           'flowVersion': '0.53' // Flow version
       }
   }
   ```
   
   
   

  **注：**还是局部安装好啊！



## 工具链——publish-OAuth

### 基本思路：

- 创建一个 GitHub App
- 根据 Github App 获得 code
- 使用 code 去交换 token
- 使用 token 获取 GitHub API

### 官方示例

1. [Creating an OAuth App](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/)
2. [Authorizing OAuth Apps](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/)

### 运用在 node 中

1. 安装依赖

   ```
   npm install child_process
   ```

2. 在publish-tool 中唤起浏览器

   ```
   child_process.exec('start url'); // Windows 用户使用 start 命令
   ```

3. 在服务端中获取 code

   ```javascript
   function auth(req, res) {
       let code = req.url.match(/code=([^&]+)/)[1];
       let state = '123abc';
       let client_id = 'Iv1.1b5d9fe06be2faac';
       let client_secret = '422abe04c8ab4607a77c3a7da179aa389cd27d29';
       let redirect_uri = encodeURIComponent('http://localhost:8081/auth');
       let params = `code=${code}&state=${state}&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${redirect_uri}`;
   
       const options = {
           hostname: 'github.com',
           port: 443,
           path: `/login/oauth/access_token?${params}`,
           method: 'POST'
       };
   
       request.on('error', (e) => {
           console.error(e);
       });
       request.end();
   }
   ```

4. 获取服务端的 token

   ```javascript
   const request = https.request(options, (response) => {
       response.on('data', (d) => {
       let result = d.toString().match(/access_token=([^&]+)/);
       
       if (result) {
           let token = result[1];
           res.writeHead(200, {
               'access_token': token,
               'Content-Type': 'text/html'
       	});
   		res.end('okey');
       } else {
           res.writeHead(404, {
           'Content-Type': 'text/plain'
           });
           res.end('error');
           }
       });
   });
   ```

5. 将服务端的 token 回传给 publish-tool

   ```javascript
    res.end(`<a href="http://localhost:8080/publish?token=${token}">publish</a>`);
   ```

6. 在 publish-tool 中获取服务端传来的 token

   ```javascript
   const server = http.createServer((request, res) => {
       let token = request.url.match(/token=([^&]+)/)[1];
       console.log('real publish!!');
       const options = {
           host: 'localhost',
           port: 8081,
           path: '/?filename=' + 'package.zip',
           method: 'POST',
           headers: {
               'token': token,
               'Content-Type': 'application/octet-stream'
           }
       };
   });
   
   server.listen(8080);
   ```

7. 在服务器端获取 token 并调用 GitHub API

   ```javascript
   const request = https.request(options, (response) => {
       let body = '';
       response.on('data', (d) => {
           let result = d.toString();
           body += d.toString();
       });
       response.on('end', () => {
           let user = JSON.parse(body);
           console.log(user);
   
           // 权限检查
           let writeStream = unzip.Extract({
               path: '../server/public/'
           });
           // req.pipe(writeStream);
           req.on('data', trunk => {
               writeStream.write(trunk);
           });
           req.on('end', trunk => {
               writeStream.end(trunk);
           });
           req.on('end', () => {
               res.writeHead(200, {
                   'Content-Type': 'text/plain'
               });
               res.end('okay');
           });
       });
   });
   ```
