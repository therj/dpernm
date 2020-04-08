const router = require('express').Router()
const Pool = require('pg').Pool
const pool = new Pool({
  host: 'pg',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'pernm'
})

router.get('/', (request, response) => {
  let q = 'SELECT * FROM data ORDER BY id ASC';
  pool.query(q, (error, results) => {
    if (error) { throw error }
    response.status(200).json(results.rows)
  })
})


module.exports = router
