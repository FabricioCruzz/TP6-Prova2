const Ordered = require('./ordered.model')
module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('customer', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        timestamps: false,
        freezeTableName: true
    })
    
    Customer.belogsTo(Ordered, {
        constraint: true,
        foreignKey: customer_id
    })

    return Customer
}
