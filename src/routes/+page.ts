export async function load({ fetch }) {
    const resUsers = await fetch('/api/users');
    const users = await resUsers.json();

    const resPosts = await fetch('/api/posts');
    const posts = await resPosts.json();
    return { users, posts };
}
