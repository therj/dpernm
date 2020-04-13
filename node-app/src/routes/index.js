const router = require('express').Router()

const routesV1 = require('./v1')
const routesV2 = require('./v2')


router.use('/', routesV1)
router.use('/v1', routesV1)
router.use('/v2', routesV2)


module.exports = router
