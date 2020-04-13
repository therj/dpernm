const express = require(`express`);
const morgan = require(`morgan`);
const helmet = require(`helmet`);
const middleware = require(`./middleware`);
const setup = require(`./setup`);
setup.envSetup()
// setup.dbSetup();
// colorful console
require(`console-info`);
require(`console-warn`);
require(`console-error`);

// require routes after env & db Setup!
const routes = require('./routes')

const app = express();

app.use(middleware.rateLimiter());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan(`common`));
app.use(helmet());
app.use(setup.corsSetup());

app.use(middleware.cloneRequestObject)
app.use(middleware.modifyResponseBody);
app.use('/', routes)
app.use(middleware.notFound);
app.use(middleware.errorHandler);

const port = process.env.PORT || 2999;
app.listen(port, () => {
  console.info(`******************************`);
  console.info(`Listening on port ${port}`);
  console.info(`******************************`);
});
