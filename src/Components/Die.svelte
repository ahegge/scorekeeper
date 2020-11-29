<script>
	export let size = 100
	export let val = undefined
	export let color = '#000000'
	export let rotation = 0
	export let state = false

	let die
	let div

	const SQRT = 1.41421356
	const POSITIONS = [
		[[1,1]],
		[[0,0],[2,2]],
		[[0,0],[1,1],[2,2]],
		[[0,0],[2,0],[0,2],[2,2]],
		[[0,0],[2,0],[1,1],[0,2],[2,2]],
		[[0,0],[2,0],[0,1],[2,1],[0,2],[2,2]]
	]

	let indicatorDim = Math.round(18 * size / 200) * 2;
	let indicatorHalfDim = indicatorDim / 2;
	
	let step = Math.round(size / 4);
	let offset = step - indicatorHalfDim;

	div = document.createElement("div")
	let str = ['dice', `dice-${val}`]
	div.classList.add(...str);
	let targetTop = 0;
	let targetLeft = 0;
	let top = 0;
	let left = 0;
	let indicator = null;
	let i
	for (i = 1; i < val + 1; i++) {
		targetTop = POSITIONS[val - 1][i-1][0] * step + offset;
		targetLeft = POSITIONS[val - 1][i-1][1] * step + offset;
		top = targetTop - indicatorDim * (i - 1);
		left = targetLeft;
		indicator = document.createElement("div")
		indicator.classList.add("dice-indicator");
		indicator.style.top = top + "px";
		indicator.style.left =  left + "px";
		div.appendChild(indicator);
	}
	die = document.createElement("div")
	die.classList.add("dice-container")
	die.appendChild(div);
	let indicators = div.querySelectorAll(".dice-indicator");
	let x = 0;
	let y = 0;

	die.style.height = size + "px";
	die.style.width = size + "px";
	die.style.borderRadius = (15 * size / 100) + "px"; // base 15
	die.style.MozBorderRadius = (15 * size / 100) + "px"; // base 15
	die.style.webkitBorderRadius =  (15 * size / 100) + "px"; // base 15
	die.style.MozTransform =  "rotate(" + rotation + "deg)";
	die.style.webkitTransform =  "rotate(" + rotation + "deg)";
	x = -(indicatorHalfDim / 2 * Math.cos((45 + rotation) * Math.PI / 180));
	y = (indicatorHalfDim / 2 * Math.sin((45 + rotation) * Math.PI / 180));
	x = Math.abs(x) < 0.01 ? 0 : x;
	y = Math.abs(y) < 0.01 ? 0 : y;
	die.style.webkitBoxShadow =  x + "px " + y + "px 5px #888888";
	die.style.MozBoxShadow =  x + "px " + y + "px 5px #888888";
	die.style.boxShadow =  x + "px " + y + "px 5px #888888";
	
	die.style.height =  size + "px"; // base 100
	die.style.width =  size + "px"; // base 100
	die.style.borderRadius =  Math.round(15 * size / 100) + "px"; // base 15
	die.style.MozBorderRadius =  Math.round(15 * size / 100) + "px"; // base 15
	die.style.webkitBorderRadius =  Math.round(15 * size / 100) + "px"; // base 15
	die.style.background =  "-moz-linear-gradient(" + (45 + rotation) + "deg, #F6F6F6, #FFFFFF)";
	die.style.background =  "-webkit-linear-gradient(" + (45 + rotation) + "deg, #F6F6F6, #FFFFFF)";
	x = (indicatorHalfDim / 4 * Math.cos((45 + rotation) * Math.PI / 180));
	y = -(indicatorHalfDim / 4 * Math.sin((45 + rotation) * Math.PI / 180));
	x = Math.abs(x) < 0.01 ? 0 : x;
	y = Math.abs(y) < 0.01 ? 0 : y;
	die.style.webkitBoxShadow =  "inset " + x + "px " + y + "px 3px 3px #EEEEEE";
	die.style.MozBoxShadow =  "inset " + x + "px " + y + "px 3px 3px #EEEEEE";
	die.style.boxShadow =  "inset " + x + "px " + y + "px 3px 3px #EEEEEE";
	indicators.forEach((ind) => {
		ind.style.width =  indicatorDim + "px"; // base 18
		ind.style.height =  indicatorDim + "px"; // base 18
		ind.style.MozBorderRadius =  indicatorHalfDim + "px";
		ind.style.webkitBorderRadius =  indicatorHalfDim + "px";
		ind.style.borderRadius =  indicatorHalfDim + "px";
		x = indicatorHalfDim + (indicatorHalfDim * Math.cos((135 - rotation) * Math.PI / 180));
		y = indicatorHalfDim + (indicatorHalfDim * Math.sin((135 - rotation) * Math.PI / 180));
		x = Math.abs(x) < 0.01 ? 0 : x;
		y = Math.abs(y) < 0.01 ? 0 : y;

		ind.style.webkitBoxShadow = `inset 0 0 1px 1px ${color}`;
		ind.style.MozBoxShadow =  `inset 0 0 1px 1px ${color}`;
		ind.style.boxShadow =  `inset 0 0 1px 1px ${color}`;
		ind.style.background = color;
		ind.style.background =  `-webkit-radial-gradient(${x}px ${y}px , circle, #FFFFFF, ${color}, ${color})`;
		ind.style.background =  `-moz-radial-gradient(${x}px ${y}px, circle, #FFFFFF, ${color}, ${color})`;
	})

	export function setColor(value) {
		color = value
		indicators = die.firstChild.querySelectorAll(".dice-indicator")
		indicators.forEach((ind) => {
			x = indicatorHalfDim + (indicatorHalfDim * Math.cos((135 - rotation) * Math.PI / 180));
			y = indicatorHalfDim + (indicatorHalfDim * Math.sin((135 - rotation) * Math.PI / 180));
			x = Math.abs(x) < 0.01 ? 0 : x;
			y = Math.abs(y) < 0.01 ? 0 : y;
			ind.style.webkitBoxShadow = `inset 0 0 1px 1px ${color}`;
			ind.style.MozBoxShadow =  `inset 0 0 1px 1px ${color}`;
			ind.style.boxShadow =  `inset 0 0 1px 1px ${color}`;
			ind.style.background = color;
			ind.style.background = `-webkit-radial-gradient(${x}px ${y}px , circle, #FFFFFF, ${color}, ${color})`;
			ind.style.background = `-moz-radial-gradient(${x}px ${y}px, circle, #FFFFFF, ${color}, ${color})`;
		})
		die = die
	}

	export function setState() {
		state = !state
	}
	export function getState() {
		return state
	}
</script>

<div on:click>
	{@html die.outerHTML}
</div>