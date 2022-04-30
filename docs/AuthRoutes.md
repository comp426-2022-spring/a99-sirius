## User Authentication Endpoints

Endpoints corresponding to user authentication can be found in `/routes/authRoutes.js`

### Google Authentication

````
/auth/google (GET)
````

Response

````
redirect to /auth/google-token
````

Response headers

````
HTTP/1.1 302 Found
X-Powered-By: Express
Vary: Origin
Access-Control-Allow-Credentials: true
Location: https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5555%2Fauth%2Fgoogle-token&scope=profile%20email&client_id=920774717220-92it1e2qvlof1ed3bee3vn7l1ft9harp.apps.googleusercontent.com
Content-Length: 0
Date: Sat, 30 Apr 2022 04:46:03 GMT
Connection: keep-alive
Keep-Alive: timeout=5
````

#### Google Authentication Callback

````
/auth/google-token (GET)
````

Response:

````
redirect to /
````

Response headers:

````
HTTP/1.1 302 Found
X-Powered-By: Express
Vary: Origin
Access-Control-Allow-Credentials: true
Location: https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5555%2Fauth%2Fgoogle-token&client_id=920774717220-92it1e2qvlof1ed3bee3vn7l1ft9harp.apps.googleusercontent.com
Content-Length: 0
Date: Sat, 30 Apr 2022 04:53:00 GMT
Connection: keep-alive
Keep-Alive: timeout=5
````

### Github Authentication

````
/auth/github (GET)
````

Response:

````
redirect to /auth/github-token
````

Response headers:

````
HTTP/1.1 302 Found
X-Powered-By: Express
Vary: Origin
Access-Control-Allow-Credentials: true
Location: https://github.com/login/oauth/authorize?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5555%2Fauth%2Fgithub-token&scope=user%3Aemail&client_id=cdd50257394113fedef2
Content-Length: 0
Date: Sat, 30 Apr 2022 05:03:10 GMT
Connection: keep-alive
Keep-Alive: timeout=5
````

#### GitHub Auth Callback #####

````
/auth/github-token (GET)
````

Response:

````
redirect to /
````

Response headers:

````
HTTP/1.1 302 Found
X-Powered-By: Express
Vary: Origin
Access-Control-Allow-Credentials: true
Location: https://github.com/login/oauth/authorize?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5555%2Fauth%2Fgithub-token&client_id=cdd50257394113fedef2
Content-Length: 0
Date: Sat, 30 Apr 2022 05:03:50 GMT
Connection: keep-alive
Keep-Alive: timeout=5
````


### Local Authentication

````
/login/auth (POST)
````

Request body:

````
{
    username: "username",
    password: "password"
}
````

Response

````
{
    success: true,
    user: {
        _id: '6269dafae76ec54086ea9af5',
        userId: '76448919792363',
        email: 'guillesaez22@gmail.com',
        login: 'guillesaez22',
        firstName: 'Guillermo',
        lastName: 'Saez',
        password: 'sha1$8f6232c0$1$82c6ea25b8135f88c6629fff88155eed1712ba0a',
        ownPassword: true,
        __v: 0
    },
    message: "authenticate succeeded"
}
````

### User SignUp

````
/singUp/auth
````

Request body:

````
{
    login: "username",
    password: "password",
    email: "email@example.com",
    fistName: "firstName",
    lastName: "lastName",
}
````

Response:

````
{
    success: true,
    user: {
        _id: '6269dafae76ec54086ea9af5',
        userId: '76448919792363',
        email: 'guillesaez22@gmail.com',
        login: 'guillesaez22',
        firstName: 'Guillermo',
        lastName: 'Saez',
        password: 'sha1$8f6232c0$1$82c6ea545425b8135f88c6629fff88155eed1712ba0a',
        ownPassword: true,
        __v: 0
    },
}
````

### Change Password

````
/changePassword (POST)
````

Request body:

````
{
    login: "username",
    password: "password"
}
````

Response:
````
{
    success: true,
    user: {
        _id: '6269dafae76ec54086ea9af5',
        userId: '76448919792363',
        email: 'guillesaez22@gmail.com',
        login: 'guillesaez22',
        firstName: 'Guillermo',
        lastName: 'Saez',
        password: 'sha1$8f6232c0$1$82c6ea5425b8135f88c6629fff88155eed1712ba0a',
        ownPassword: true,
        __v: 0
    },
}
````

### Get User

````
/user
````

Response:

````
{
    user: {
        _id: '6269dafae76ec54086ea9af5',
        userId: '76448919792363',
        email: 'guillesaez22@gmail.com',
        login: 'guillesaez22',
        firstName: 'Guillermo',
        lastName: 'Saez',
        password: 'sha1$8f6232c0$1$82c6e45a25b8135f88c6629fff88155eed1712ba0a',
        ownPassword: true,
        __v: 0
    }
}  
````