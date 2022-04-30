## API ENDPOINTS

This document provides the documentation of all ENDPOINTS use in the application.

### User Authentication

Endpoints corresponding to user authentication can be found in `/routes/authRoutes.js`

#### Google Authentication

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

##### Google Authentication Callback #####

````
/auth/google-token (GET)
````

Response 

````
redirect to /
````

Response headers

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

#### Github Authentication

````
/auth/github (GET)
````

Response

````
redirect to /auth/github-token
````

Response headers

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

##### GitHub Auth Callback #####

````
/auth/github-token (GET)
````

Response

````
redirect to /
````

Response headers

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


#### Local Authentication


#### User SignUp


#### Change Password