import axios from 'axios';
import db from '../db/db';

export const main = async (event) => {
  const apiKey = '6b42f2c9405bfc43d397720113927cda';
  try {
    console.log('ready');
    const res = await axios.get(
      `https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=quarter&apikey=${apiKey}`
    );
    console.log(res.data);
    return {
      statusCode: 200,
      body: JSON.stringify(res.data),
    };
  } catch (e) {
    console.log(e);
  }
};
