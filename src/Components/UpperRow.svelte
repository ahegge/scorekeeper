<script>
	import { upper } from '../Stores/scores.js'
	import Die from './Die.svelte'
	export let name
	export let dieNumber
	let rowValue
	let die1
	let die2
	let die3

	$: rowValue = $upper[name.toLowerCase()]

	$: rowValue >= 1 * dieNumber ? die1.setColor("#c10000") : null
	$: rowValue >= 2 * dieNumber ? die2.setColor("#c10000") : null
	$: rowValue >= 3 * dieNumber ? die3.setColor("#c10000") : null

</script>

<div class="upper-row-footer">
	<div class="left">
		<div class="name">{name}</div>
		<div class="dice-list">
			<Die bind:this={die1} val={dieNumber} size='25' color={"#000000"} rotation={90} />
			<Die bind:this={die2} val={dieNumber} size='25' color={"#000000"} rotation={90} />
			<Die bind:this={die3} val={dieNumber} size='25' color={"#000000"} rotation={90} />
		</div>	
		<div class="min">
			<div> = </div>
			<div class="min-score">{dieNumber * 3}</div>
		</div>
	</div>
	<div class="right">
		<div class="how-to-score">
			Count and add only {name}
		</div>
		<div class="score">
			<input on:click class="score-input" value={rowValue} type="text" name="die-score{dieNumber}">
		</div>
	</div>
</div>

<style>
	.upper-row-footer {
		border-bottom: 1px solid #9e9e9e;
		display: flex;
		padding: 5px;
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
		text-align: center;
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