<script>
	import { scale } from "svelte/transition"
	import { quadIn } from "svelte/easing"
	import { onMount } from "svelte"
	import Die from './Die.svelte'
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let show = false
	export let value = undefined
	export let name = undefined
	export let rowValue = 0
	export let title = undefined
	export let transitionProps = { duration: 150, easing: quadIn, delay: 150 };


	let die1
	let die2
	let die3
	let die4
	let die5
	let valueSet = false
	let background
	
	function returnValue() {
		dispatch('setValue', {
			value: rowValue,
			name: name
		})
		rowValue = 0
		valueSet = true
		show = false
	}

	const outerClick = (event) => {
		if ( event.target === background ){
			event.preventDefault()
			show = false
		}
	}

	function score(die) {
		if ( die.getState() == true ) {
			rowValue -= value
			die.setColor("#000000")
		} else {
			die.setColor("#c10000")
			rowValue += value
		}
		die.setState()
	}

	$: rowValue

</script>

{#if show}
	<div class="bg" bind:this={background} on:click={outerClick}>
		<div class="dialog" in:scale={transitionProps}>
			<div class="dialog-header">
				{title}
			</div>
			<div class="dice">
				<Die bind:this={die1} val={value} size='50' color={"#000000"} rotation={90} on:click={score(die1)} />
				<Die bind:this={die2} val={value} size='50' color={"#000000"} rotation={90} on:click={score(die2)} />
				<Die bind:this={die3} val={value} size='50' color={"#000000"} rotation={90} on:click={score(die3)} />
				<Die bind:this={die4} val={value} size='50' color={"#000000"} rotation={90} on:click={score(die4)} />
				<Die bind:this={die5} val={value} size='50' color={"#000000"} rotation={90} on:click={score(die5)} />	
			</div>
			<div class='dialog-footer'>
				<div class="score">
					Score: {rowValue}
				</div>
				<div class='actions'>
					<button on:click={ e => show = false}>Cancle</button>
					<button on:click={ returnValue }>OK</button>
				</div>
			</div>
		</div>
	</div>
{/if}


<style>
.bg {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1000;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.66);
}

.dialog {
	width: 90%;
	background: white;
	display: flex;
	flex-direction: column;
	position: relative;
}
.dialog-header {
	background: #9e9e9e;
	color: white;
	padding: 1em;
}
.dice {
	display: flex;
	flex-direction: row;
	position: relative;
	padding: 1em;
	justify-content: center;
	height: 100%;
}
.dialog-footer {
	display: flex;
	flex-direction: row;
	padding: 1em;
	justify-content: space-between;
}
.score {
}
.actions {
	display: flex;
}
button {
	margin-left: 5px;
}
</style>