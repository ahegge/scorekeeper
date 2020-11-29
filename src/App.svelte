<script>
	import Header from './Components/Header.svelte'
	import Section from './Components/Section.svelte'
	import Button from './Components/Button.svelte'
	import UpperRow from './Components/UpperRow.svelte'
	import UpperRowHeader from './Components/UpperRowHeader.svelte'
	import UpperRowFooter from './Components/UpperRowFooter.svelte'
	import Dialog from './Components/Dialog.svelte'

	import { upper, lower } from './Stores/scores.js'

	let show = false
	let dialogValue
	let dialogName
	let value
	let name

	function switchSection(element){
		let ele = document.getElementById(element)
		let sections = document.querySelectorAll('.js-section.is-shown')
		sections.forEach((el) => {el.classList.remove('is-shown')})
		ele.classList.add('is-shown')
	}

	function setValue(v) {
		value =  v.detail.value
		name = v.detail.name
		$upper[name] = value
		$upper.total += value
	}

	function showDialog(options) {
		dialogValue = options.value
		dialogName = options.name
		show = true
	}
</script>
<main>
	<div class='container'>
		<Header />
		<Button on:click={ e => switchSection('upper-section') } >Upper Half</Button>
		<Button on:click={ e => switchSection('lower-section') } >Lower Half</Button>
		<Button on:click={ e => switchSection('score-section') } >Player Scores</Button>
		<Section id='upper' isShown={'is-shown'}>
			<UpperRowHeader />
			<UpperRow dieNumber={1} name="Aces" on:click={e => { showDialog({value: 1, name: "aces"}) } } />
			<UpperRow dieNumber={2} name="Twos" on:click={e => { showDialog({value: 2, name: "twos"}) } } />
			<UpperRow dieNumber={3} name="Threes" on:click={e => { showDialog({value: 3, name: "threes"}) } } />
			<UpperRow dieNumber={4} name="Fours" on:click={e => { showDialog({value: 4, name: "fours"}) } } />
			<UpperRow dieNumber={5} name="Fives" on:click={e => { showDialog({value: 5, name: "fives"}) } } />
			<UpperRow dieNumber={6} name="Sixes" on:click={e => { showDialog({value: 6, name: "sixes"}) } } />
			<UpperRowFooter />
		</Section>
		<Section id='lower'>
			this is the lower section
		</Section>
		<Section id='score'>
			this is the score section
		</Section>
		<Dialog bind:show={show} value={dialogValue} name={dialogName} on:setValue={setValue} title="What did you roll?" />
	</div>
</main>
<style>
	main {
		width: 100%;
		height: 100%;
	}
	.container {
		width: calc(720px / 2);
		height: calc(1280px / 2);
		margin: auto;
		background: #9e9e9e;
		position: relative;
		border: 1px solid #000000;
	}
</style>