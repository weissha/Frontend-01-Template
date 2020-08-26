const http = require('http');
const fs = require('fs');
const unzip = require('unzipper');
const https = require('https');

const server = http.createServer((req, res) => {

    if (req.url.match(/^\/auth/)) {
        return auth(req, res);
    }

    if (!req.url.match(/^\/\?/)) {
        console.log(req.url)
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.end('not found');
        return;
    }
    
    // 6.获取从 publish-tool中传来的 token
    const options = {
        hostname: 'api.github.com',
        port: 443,
        path: '/user',
        method: 'GET',
        headers: {
            Authorization: 'token ' + req.headers.token,
            'User-Agent': 'toy-publish-server'
        }
    };

    // 7.获取 GitHub 用户
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

    request.on('error', (e) => {
        console.error(e);
    });
    request.end();
});

// 2.获取 code
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

    // 3.获取 token   
    const request = https.request(options, (response) => {
        response.on('data', (d) => {
            let result = d.toString().match(/access_token=([^&]+)/);
            if (result) {
                let token = result[1];
                res.writeHead(200, {
                    'access_token': token,
                    'Content-Type': 'text/html'
                });
                // 4.将 token 回传到 publish-tool 中
                res.end(`<a href="http://localhost:8080/publish?token=${token}">publish</a>`);
            } else {
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.end('error');
            }
        });
    });

    request.on('error', (e) => {
        console.error(e);
    });
    request.end();
}

server.listen(8081);