import {} from 'dotenv/config';
import connect from './db/connect';
import axios from 'axios';

const apiKey = process.env.FINANCE_API_KEY;

async function main() {
  await connect();
  const res = await axios.get(
    `https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=quarter&apikey=${apiKey}`
  );
  console.log(res.data);
}

main();
