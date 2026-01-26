// DYNAMIC THEME SETTINGS BASED ON OS PREFERENCE

function light() {
	document.documentElement.setAttribute('data-theme', 'pure');
	document.getElementById('weather').setAttribute('data-theme', 'pure');
	document.getElementById('weather').removeAttribute('data-basecolor');
	document.getElementById('weather').setAttribute('data-textcolor', '#37352f');
	document.getElementById('weather').removeAttribute('data-cloudfill');
	document.getElementById('weather').setAttribute('data-suncolor', '#F58f70');
	script(document, 'script', 'weatherwidget-io-js');
}

function dark() {
	document.documentElement.setAttribute('data-theme', 'gray');
	document.getElementById('weather').setAttribute('data-theme', 'gray');
	document.getElementById('weather').setAttribute('data-basecolor', '#191919');
	document.getElementById('weather').removeAttribute('data-textcolor');
	document.getElementById('weather').setAttribute('data-cloudfill', '#191919');
	document.getElementById('weather').setAttribute('data-suncolor', '#F58f70');
	script(document, 'script', 'weatherwidget-io-js');
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	dark();
} else {
	light();
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
	if (event.matches) {
		dark();
	} else {
		light();
	}
});
