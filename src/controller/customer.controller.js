const service = require('../service/customer.service')

const create = async (req, res) => {
    const customer = req.body
    if(isValidBody(res, customer)){
        await service.create(customer)
        res.status(201).send('Customer created successfully!')
    }
}

const remove = async (req, res) => {
    const customerId = req.params.id
    const customer = service.getCustomerById(customerId)
    if(customer){
        await service.remove(customerId)
        res.status(204).send('')
    }
    else{
        res.status(404).send('Customer Not Found')
    }
}

const isValidBody = (res, customer) => {
    if(!customer.name || !customer.email){
        res.status(400).send('Invalid data supplied')
        return false
    }
    return true
}

module.exports = {
    create,
    remove
}