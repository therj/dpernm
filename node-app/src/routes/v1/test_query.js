const router = require('express').Router()
const Pool = require('pg').Pool
const { POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB } = process.env

const pool = new Pool({
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB
})

router.get('/', (req, res) => {
  let q = 'SELECT * FROM data ORDER BY id ASC';
  try {
    pool.query(q, (error, results) => {
      if (error) {
        // throw error
        return res.status(500).json(error)
      }
      res.status(200).json(results.rows)
    })

  } catch (err) {
    res.status(200).json(err)
  }
})


module.exports = router
