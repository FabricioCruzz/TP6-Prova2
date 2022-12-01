const Ordered = require('./ordered.model')
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        value: DataTypes.FLOAT
    }, {
        timestamps: false,
        freezeTableName: true
    })

    Product.belogsTo(Ordered, {
        constraint: true,
        foreignKey: product_id
    })

    return Product

}
