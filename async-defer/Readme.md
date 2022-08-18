# Async and Defer

![Async and Defer image illustration](./async-defer.jpg)

- If the network is bad and it takes alot to fetch `app.js`, Your `DOM` construction will be halted.

- `app.js` won't be excuted untill `CSSOM` is ready.

- So `DOM` wait and halt it's construction if encounted a `script` tag without `async` or `defer`, But that's not the case with `CSS`, `CSSOM` Must be constructed first before `JS` excution.

- Be carefull, that might cause a huge performance issue.
