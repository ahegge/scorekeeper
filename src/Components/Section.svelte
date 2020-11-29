<script>
	import { onMount } from 'svelte'
	
	export let id;
	export let isShown = false;
	let sectionId = id + '-section'

</script>

<style>
.section {
	position: absolute;
	top: 181px;
	left: 0px;
	padding: 0px 0px;
	right: 0;
	bottom: 23px;
	overflow: hidden;
	background: white;
	height: calc(1280px / 2 - 181px);
	/*color: var(--color-accent);*/
	/*width: calc(100% - 282px);*/

	/* Hide */
	pointer-events: none;
	visibility: hidden;
	opacity: 0;
	transform: translateY(20px);
	transition: visibility 0s .12s linear , opacity .12s ease-in, transform .12s ease-in;
}
.section.is-shown {
	pointer-events: auto;
	visibility: visible;
	opacity: 1;
	transform: translateY(0);
	transition: visibility 0s 0s linear , opacity .36s ease-out, transform .36s ease-out;
	z-index: 100;
}
</style>
<section id={sectionId} class={'section js-section ' + isShown + " " + sectionId}>
	<slot/>
</section>