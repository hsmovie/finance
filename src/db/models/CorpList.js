import Sequelize from 'sequelize';
import db from '../db';

const CorpList = db.define(
  'corp_list',
  {
    symbol: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      unique: true,
    },
    price: {
      type: Sequelize.FLOAT,
    },
    exchange: {
      type: Sequelize.STRING,
    },
  },
  { underscored: true }
);

export default CorpList;
