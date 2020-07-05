import db from './db';
import { CorpList } from './models';

export function associate() {}

export default async () => {
  associate();
  await db.sync();
};
