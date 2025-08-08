<script lang="ts">
	let { data } = $props();
</script>

<h1 class="text-xl">henahax dynamic-page-template</h1>

<ul class="flex flex-col gap-2">
	{#each data.posts as post}
		<li>
			<div class="text-sm">{post.username}:</div>
			<div>{post.text}</div>
		</li>
	{/each}
</ul>

<form class="grid w-96 grid-cols-[auto_1fr] gap-4" method="POST" action="/newPost">
	<label for="username">Username:</label>
	<select id="userId" name="userId" required>
		{#each data.users as user}
			<option value={user.id}>{user.name}</option>
		{/each}
	</select>

	<label for="text">Text:</label>
	<textarea id="text" name="text" required></textarea>

	<button class="col-span-2" type="submit">Submit</button>
</form>
