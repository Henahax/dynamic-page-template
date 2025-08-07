import { json } from '@sveltejs/kit'
import { db } from '$lib/server/db'
import { post, user } from '$lib/server/db/schema'
import { eq } from 'drizzle-orm'

export async function GET(event) {
    const posts = await db
        .select({
            id: post.id,
            text: post.text,
            userId: post.userId,
            username: user.name
        })
        .from(post)
        .innerJoin(user, eq(post.userId, user.id));
    return json(posts);
}

export async function POST(event) {
    const data = await event.request.json();

    const newPost = await db.insert(post).values({
        userId: data.userId,
        text: data.text
    }).returning();

    return json({ success: true, post: newPost[0] });
}