const router = require('express').Router()
const testQueryRouter = require('./test_query')

router.get(`/`, (_req, res) => {
  res.json({
    message: `🚀^2`,
  });
});

router.use('/test_query', testQueryRouter)


module.exports = router
