import db from './db';
import sync from './sync';

export default async () => {
  try {
    await db.authenticate();
    await sync();
    console.log('db synced!');
  } catch (e) {
    console.log(e);
  }
};
