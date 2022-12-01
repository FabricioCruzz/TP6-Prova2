const { ordered } = require('../model/index')

const getOrderedById = async orederedId => {
    return await customer.findAll({
        where: {
            id: orederedId
        }
    })
}

const create = async data => {
    await ordered.create(data)
}

const remove = async orderedId => {
    return await ordered.destroy({
        where: {
            id: orderedId
        }
    })
}

module.exports = {
    create,
    remove,
    getOrderedById
}