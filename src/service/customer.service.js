const { customer } = require('../model/index')

const getCustomerById = async customerId => {
    return await customer.findAll({
        where: {
            id: customerId
        }
    })
}

const create = async data => {
    await customer.create(data)
}

const remove = async customerId => {
    return await customer.destroy({
        where: {
            id: customerId
        }
    })
}

module.exports = {
    create,
    remove,
    getCustomerById
}