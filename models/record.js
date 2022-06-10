const { Model, DataTypes } = require('sequilize');
const sequelize = require('../config/connection');

class Record extends Model {}

Record.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          artist: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          filename: {
              type: DataTypes.STRING,
              allowNull: false,
          },
          user_id: {
              type: DataTypes.STRING,
              references: {
                  model: 'user',
                  key: 'id',
              },
          },


},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'record',
}
);

module.exports = Record;