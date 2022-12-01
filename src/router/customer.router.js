const express = require('express')
const router = express.Router()
const controller = require('../controller/customer.controller')

router.post('/', controller.create)
router.delete('/:id', controller.remove)

module.exports = router