<script lang="ts">
	let { data } = $props();
</script>

<h1 class="text-xl">henahax dynamic-page-template</h1>

<ul>
	{#each data.posts as post}
		<li>
			<div>{post.username}</div>
			<div>{post.text}</div>
		</li>
	{/each}
</ul>

<form class="grid w-96 grid-cols-[auto_1fr] gap-4">
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
