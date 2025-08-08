import type { Actions } from './$types';

export const actions: Actions = {
    newPost: async ({ request, fetch }) => {
        const data = await request.formData();
        const userId = data.get('userId') as string;
        const text = data.get('text') as string;

        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, text })
        });

        if (!response.ok) {
            return { success: false, error: 'Failed to create post' };
        }

        const result = await response.json();
        return { success: true, post: result.post };
    }
};
