const env = process.env;
import { db } from './index';
import { user, post } from './schema';

let seedUsers = [
    {
        id: 1,
        name: 'Henahax'
    }
]

let seedPosts = [
    {
        id: 1,
        userId: 1,
        text: 'Hello world!'
    },
    {
        id: 2,
        userId: 1,
        text: 'Good morning world!'
    }
]

if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

for (let seedUser of seedUsers) {
    await db.insert(user).values(seedUser).onConflictDoNothing();
}
for (let seedPost of seedPosts) {
    await db.insert(post).values(seedPost).onConflictDoNothing();
}