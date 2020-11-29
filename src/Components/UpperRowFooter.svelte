<script>
	import Die from './Die.svelte'
	import { upper } from '../Stores/scores.js'

	export let name = undefined
	export let dieNumber = undefined
</script>

<div class="upper-row-footer">
	<div class="left">
		<div class="name">Total</div>
		<div class="dice-list">
			<div class="blank" />
			<div class="blank" />
			<div class="blank" />
		</div>	
		<div class="min">
			<div> = </div>
			<div class="min-score">63</div>
		</div>
	</div>
	<div class="right">
		<div class="how-to-score">
			<div>>>>>></div>
		</div>
		<div class="score">
			<input class="score-input" type="text" name="die-score-total" value={$upper.total}>
		</div>
	</div>
</div>
<div class="upper-row-footer">
	<div class="left">
		<div class="name">Bonus</div>
		
		<div class="min">
			<div class="min-score-text">IF 63 OR OVER</div>
		</div>
	</div>
	<div class="right">
		<div class="how-to-score">
			<div>Score 35</div>
		</div>
		<div class="score">
			<input class="score-input" type="text" name="die-score-bonus" value={$upper.total >= 63 ? 35: null}>
		</div>
	</div>
</div>
<div class="upper-row-footer">
	<div class="left">
		<div class="name">TOTAL</div>
		
		<div class="min">
			<div class="min-score-text">OF UPPER HALF</div>
		</div>
	</div>
	<div class="right">
		<div class="how-to-score">
			<div>>>>>></div>
		</div>
		<div class="score">
			<input class="score-input" type="text" name="die-score-final" value={$upper.total >= 63 ? $upper.total + 35: $upper.total }>
		</div>
	</div>
</div>

<style>
	.upper-row-footer {
		border-top: 1px solid #9e9e9e;
		display: flex;
		padding: 4px;
		align-items: center;
	}
	.name {
		padding: 5px;
		min-width: 50px;
	}
	.die img {
		height: 25px;
		display: flex;
		margin: 2px;
	}
	.dice-list {
		display: flex;
		padding: 5px;
		align-items: center;
		height: 100%;	
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
		display: flex;
		flex-grow: 1;
		align-items: center;
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
	.min-score-text {
		text-align: center;
		padding-right: 10px;
		flex-grow: 1;
		font-size: 10px;
	}
	.blank {
		width: 25px;
		height: 25px;
	}
</style>