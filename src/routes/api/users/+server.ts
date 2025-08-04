import { json } from '@sveltejs/kit'
import { db } from '$lib/server/db'
import { user } from '$lib/server/db/schema'

export async function GET(event) {
    const posts = await db
        .select({
            id: user.id,
            text: user.name
        })
        .from(user)
    return json(posts);
}
