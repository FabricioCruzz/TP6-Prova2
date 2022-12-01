const express = require('express');

const customersRouter = require('./router/customer.router')
const productsRouter = require('./router/product.router')
const orderedsRouter = require('./router/ordered.router')

const app = express()
const PORT = 8087

app.use(express.json())
app.use('/api/v1/customers', customersRouter)
app.use('/api/v1/products', productsRouter)
app.use('/api/v1/ordereds', orderedsRouter)

app.listen(PORT, () => console.log('Server up'))
