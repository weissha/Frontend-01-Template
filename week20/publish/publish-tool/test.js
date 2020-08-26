/* 
    https://github.com/login/oauth/authorize?client_id=Iv1.1b5d9fe06be2faac&redirect_uri=http%3A%2F%2Flocalhost%3A8000&scope=read%3Auser&state=123abc

    code=9705041b9aaa0933f026

    https://api.github.com/user
*/
{
    let code = '1a411599a74fb12fb1bd';
    let state = '123abc';
    let client_id = 'Iv1.1b5d9fe06be2faac';
    let client_secret = '422abe04c8ab4607a77c3a7da179aa389cd27d29';
    let redirect_uri = encodeURIComponent('http://localhost:8080');
    let params = `code=${code}&state=${state}&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${redirect_uri}`;

    let xhr = new XMLHttpRequest;
    xhr.open('POST', `https://github.com/login/oauth/access_token?${params}`);
    xhr.send(null);

    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4)
            console.log(xhr.responseText)
    });
}

let access_token = 'd894977001513ca6917e46f284191055d8a836a2';

{
    let xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://api.github.com/user');
    xhr.setRequestHeader('Authorization', 'token d894977001513ca6917e46f284191055d8a836a2');
    xhr.send(null);

    xhr.addEventListener('readystatechange', function() {
        if(this.readyState === 4) {
            console.log(this.responseText);
        }
    }); 
}