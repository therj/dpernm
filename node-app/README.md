# express-starter

Yet another starter because there's nothing like I need!

## What's in here?

### middleware.js

- Route notFound handler
- errorHandler for all other errors - stack trace for non-production environments
- rateLimiter (`express-rate-limit`: in-memory). Disabled headers with limit, remaining and time to reset
- modifyResponseBody (`express-mung`, uses GitHub master as npm package is not updated). Monkey patches the json response, has option to attach request to response if `returnRequest` parameter is true, default: false. This option can be a security risk!

### setup.js

- env Setup (dotenv and dotenv-expand)
- cors options
- dbSetup: mongodb only (TODO: add pg, sequelize!)

### index.js

- setup & middleware
- morgan, helmet
- GET / route

### Formatting

- ESLint `airbnb-base` & Prettier `recommended` configuration

### Tests

- None Yet! 🤫
