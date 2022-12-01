const service = require('../service/ordered.service')

const create = async (req, res) => {
    const ordered = req.body
    if(isValidBody(res, ordered)){
        await service.create(req.body)
        res.status(201).send('Order created successfully!')
    }
}

const remove = async (req, res) => {
    const orderedId = req.params.id
    const ordered = service.getOrderedById(orderedId)
    if(ordered){
        await service.remove(orderedId)
        res.status(204).send('')
    }
    else{
        res.status(404).send('Ordered Not Found')
    }
}

const isValidBody = (res, ordered) => {
    if(!ordered.customer_id || !ordered.product_id || !ordered.order_date){
        res.status(400).send('Invalid data supplied')
        return false
    }
    return true
}

module.exports = {
    create,
    remove
}
