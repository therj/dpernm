const express = require(`express`);
const morgan = require(`morgan`);
const helmet = require(`helmet`);
const middleware = require(`./middleware`);
const setup = require(`./setup`);
setup.envSetup()
// setup.dbSetup();
// require routes after env & db Setup!
const routesV1 = require('./routes/v1')
const routesV2 = require('./routes/v2')
// colorful console
require(`console-info`);
require(`console-warn`);
require(`console-error`);

// const cors = require(`cors`);

const app = express();
setup.envSetup();

app.use(middleware.rateLimiter());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan(`common`));
app.use(helmet());
app.use(setup.corsSetup());
// app.use(cors())

app.use(middleware.modifyResponseBody);
app.use('/', routesV1)
app.use('/v1/', routesV1)
app.use('/v2/', routesV2)

app.use(middleware.notFound);
app.use(middleware.errorHandler);

const port = process.env.PORT || 2999;
app.listen(port, () => {
  console.info(`******************************`);
  console.info(`Listening on port ${port}`);
  console.info(`******************************`);
});
