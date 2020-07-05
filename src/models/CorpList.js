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
    date: {
      type: Sequelize.STRING,
      unique: true,
      defaultValue: shortid.generate(),
    },
    epsEstimated: {
      type: Sequelize.STRING,
    },
  },
  { underscored: true }
);

export default CorpList;
