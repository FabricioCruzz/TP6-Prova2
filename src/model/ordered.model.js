module.exports = (sequelize, DataTypes) => {
    const Ordered = sequelize.define('ordered', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customer_id: DataTypes.INTEGER,
        product_id: DataTypes.INTEGER,
        order_date: DataTypes.DATE,
        name: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        timestamps: false,
        freezeTableName: true
    })

    return Ordered
}
