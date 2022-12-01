const service = require('../service/product.service')

const create = async (req, res) => {
    const product = req.body
    if(isValidBody(res, product)){
        await service.create(req.body)
        res.status(201).send('Product created successfully!')
    }
}

const remove = async (req, res) => {
    const productId = req.params.id
    const product = service.getProductById(productId)
    if(product){
        await service.remove(productId)
        res.status(204).send('')
    }
    else{
        res.status(404).send('Product Not Found')
    }
}

const isValidBody = (res, product) => {
    if(!product.name || !product.value){
        res.status(400).send('Invalid data supplied')
        return false
    }
    return true
}

module.exports = {
    create,
    remove
}
