<script>
	export let name = undefined
	export let dieNumber = undefined
</script>

<div class="upper-row">
	<div class="left">
		<div class="name">MINIMUM REQUIRED FOR BONUS</div>
		<div class="images">
		</div>	
		<div class="min">
		</div>
	</div>
	<div class="right">
		<div class="how-to-score">
			HOW TO SCORE
		</div>
		<div class="score">
		</div>
	</div>
</div>

<style>
	.upper-row {
		border-bottom: 1px solid #9e9e9e;
		display: flex;
		padding: 5px;
		align-items: center;
	}
	.name {
		padding: 5px;
		min-width: 50px;
		font-size: 10px;
	}
	.die img {
		height: 25px;
		display: flex;
	}
	.images {
		display: flex;
		padding: 5px;
		align-items: center;
	}
	.min {
		display: flex;
		flex-grow: 1;
		align-items: center;
	}
	.score {
		display: flex;
		align-items: center;
		justify-content: flex-end;	
	}
	.score-input {
		width: 3em;
		margin: 0;
	}
	.how-to-score {
		font-size: 10px;
		text-transform: uppercase;
		padding: 5px;
		margin-right: 10px;
	}
	.left {
		width: 55%;
		display: flex;
	}
	.right {
		width: 45%;
		display: flex;
	}
	.min-score {
		text-align: right;
		padding-right: 10px;
		flex-grow: 1;
	}
</style>