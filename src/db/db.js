import Sequelize from 'sequelize';

const { DB_HOST, DB_USER, DB_USER_PASSWORD } = process.env;

const db = new Sequelize('finance', DB_USER, DB_USER_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
});

export default db;
