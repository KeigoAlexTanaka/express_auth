# Authentication

_Introduction_

Welcome to the Express/React Authentication repo!

In this repo you will find:

- a full stack-ish demo of a basic Auth workflow and an associated model
- a [very verbose markdown file](./essay.md) detailing auth with a few small mini-examples
- this README with a bed story for Auth
- a difficult, yet rewarding topic

### Intro 2.0

Full stack authentication is one of the most difficult features to implement in WDI--the others being many-to-many associations and updating a resource.  For Unit 3, the primary aim is to introduce Auth as a concept and outline a bare-bones implementation.  To wit:

### Never Use This Implementation in Production

With the caveat that virtually all of the apps you will build on your own or in small groups do not need to be built to the level of a production-grade web app.  Also, it is almost a guarantee that you will never directly touch the auth code at any given startup as a Junior developer; and even if and when you are tasked with implementing an Auth scheme, the standard advice is to take something off the shelf rather than rolling your own.  Auth is such a finicky tool and the risks of missing something or getting it wrong are such that for most applications, using a package or off-the-shelf solution is the only responsible strategy.

But we're not worried about any of that for now.  To get our feet wet, we'll roll Auth from scratch to better understand how all the pieces fit together. For what it's worth, `passport` is a great npm package for `express` that is something of a standard for adding auth to an application.  Unfortunately, there's quite a bit of config needed to get up and running, which is why we'll be building everything from scratch.

Auth is usually a requirement for the Unit 3 group project, so our goal will be to get enough of a handle on Auth that it can be reasonably added to a group project within the project period.

The payoff for all of this labor is not just being able to understand one of the core components of virtually all modern web apps; auth, and the corresponding associations between a `User` model and other models, enables much richer and interesting features to be added to our apps.

Yay!

### The Bedtime Story

#### A User Signs up 
- The `User` is created with a `POST` request to `/users` or `/register
- The `password` is hashed using `bcrypt` and stored to the db as a `password_digest`
- Non-sensitive, but identifying, information about the user is encoded into a token that cannot be tampered with and sent back to the client as a response

#### A User Signs in
- A user sends their username/password to the server
- The server compares the password with the hashed password
- If they match, a token is generated and sent to the client
- If not, a 401 is sent

#### A Protected Route

- A user makes a request to an endpoint that only logged-in users should see
- If the user has not signed up or logged in, the response should be a 401 or 403
- If the user has already registerd or logged in, they should have stored the `token` to localStorage or `state` within a React app
- On subsequent requests to protected endpoints, the user should attach the token as an Authentication Bearer token to the request
- The server can then inspect the header, and if it exists decode the token
- The decoded token data will be just that data that was encoded from the beginning
- The token decoding phase can also determine if the token's data has been tampered with.
- If the token was not tampered with and has a valid user's id/email or somesuch, then it allows the request to reach the protected endpoint

- Optionally, the protected route can attach the decoded user data to the request object so that the endpoint does not need to make an additional db call to fetch the "current user's" data.
