
import 'dotenv/config';
import { drizzle } from "drizzle-orm/node-postgres";
import { user, post } from './schema.ts';
import type { InferInsertModel } from 'drizzle-orm';

const seedUsers: InferInsertModel<typeof user>[] = [
    {
        id: 1,
        name: 'Henahax'
    }
];

const seedPosts: InferInsertModel<typeof post>[] = [
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
];

async function main() {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
        throw new Error('DATABASE_URL is not set');
    }
    const db = drizzle(databaseUrl);

    await db.insert(user).values(seedUsers).onConflictDoNothing();
    await db.insert(post).values(seedPosts).onConflictDoNothing();
}

main().then(() => {
    console.log('Seeding complete.');
    process.exit(0);
}).catch((err) => {
    console.error('Seeding failed:', err);
    process.exit(1);
});

// seeding logic moved inside main()