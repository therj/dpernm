const router = require('express').Router()
const Pool = require('pg').Pool
const pool = new Pool({
  host: 'pg',
  port: 5432,
  user: 'pernm',
  password: 'pernm',
  database: 'pernm'
})

router.get('/', (request, response) => {
  let q = 'SELECT * FROM data ORDER BY id ASC';
  try {
    pool.query(q, (error, results) => {
      if (error) {
        // throw error
        return response.status(500).json(error)
      }
      response.status(200).json(results.rows)
    })

  } catch (err) {
    response.status(200).json(err)
  }
})


module.exports = router
