const express = require('express');
// const customerRouter = require('./router/customer.route')

const app = express()
const PORT = 8087

app.use(express.json())
app.use('/api/v1/prova', customerRouter)

app.listen(PORT, () => console.log(`Server up on http://localhost:${PORT}/api/v1/prova`))
