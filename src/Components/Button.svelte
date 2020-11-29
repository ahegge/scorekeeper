<script>
</script>

<button on:click >
	<span>
		<slot />
	</span>
</button>

<style>
	button {
		width: 100%;
		background: #a9a9a9;
		padding: 10px;
		margin: 0;
		border: none;
		height: 42px;
	}
	button span {
		color: #ffffff;
		padding: 2px;
	}
</style>