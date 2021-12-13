console.log('Hello and welcome to my Portfolio!')

function menuToggle() {
	var x = document.getElementById('myNavtoggle')
	if (x.className === 'navtoggle') {
		x.className += ' responsive'
	} else {
		x.className = 'navtoggle'
	}
}
