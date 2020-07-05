import db from './db';
// import { User, UserProfile, UserAuth } from './models';
export function associate() {
  User.associate();
}

export default async () => {
  console.log('sync');
  associate();
  await db.sync();
};
