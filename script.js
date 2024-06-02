console.log("haiiiii :3");
console.log("wer das ließt is gay asf :3");

const release = new Date(2024, 5, 21)
const currentTime = new Date().toUTCString();
const isDST = new Date().getTimezoneOffset() !== release.getTimezoneOffset();
if (isDST) {
	release.setHours(release.getHours() + 1);
}

function countdown(ms) {
	function zahländern(number) {
		if (number.toString().length === 1) {
			return "0" + number
		}
		return number;
	}
	let sekunden = Math.floor(ms / 1000)
	let minuten = Math.floor(sekunden / 60)
	let stunden = Math.floor(minuten / 60)
	let tage = Math.floor(stunden / 24)
	stunden %= 24
	minuten %= 60
	sekunden %= 60
	sekunden = sekunden > 0 ? sekunden : 0
	minuten = minuten > 0 ? minuten : 0
	stunden = stunden > 0 ? stunden : 0
	tage = tage > 0 ? tage : 0
	document.getElementById('tage').innerText = zahländern(tage)
	document.getElementById('stunden').innerText = zahländern(stunden)
	document.getElementById('minuten').innerText = zahländern(minuten)
	document.getElementById('sekunden').innerText = zahländern(sekunden)
}

countdown(release.getTime() - new Date().getTime());
setInterval(() => {
	countdown(release.getTime() - new Date().getTime());
}, 999);
