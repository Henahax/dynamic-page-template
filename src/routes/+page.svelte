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
