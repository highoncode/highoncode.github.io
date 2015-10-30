function type(text, screen) {
	//You have to check for lines and if the screen is an element
	if(!text || !text.length || !(screen instanceof Element)) {
		return;
	}
	
	//if it is not a string, you will want to make it into one
	if('string' !== typeof text) {
		text = text.join('\n');
	}
	
	//normalize newlines, and split it to have a nice array
	text = text.replace(/\r\n?/g,'\n').split('');
	
	//the prompt is always the last child
	var prompt = screen.lastChild;
	prompt.className = 'typing';
	
	var typer = function(){
		var character = text.shift();
		screen.insertBefore(
			//newlines must be written as a `<br>`
			character === '\n'
				? document.createElement('br')
				: document.createTextNode(character),
			prompt
		);
		
		//only run this again if there are letters
		if( text.length ) {
			setTimeout(typer, 80);
		} else {
			prompt.className = 'idle';
		}
	};
	setTimeout(typer, 80);
};

window.onload=function(){
	var screen = document.getElementById('screen');
	var text = [
		'Hi !',
		'My Name is Shakil Ahmed,',
		'And I am trying to make the web a better place...',
		'',
		'My expertises are following:',
		'Javascript, PHP, WordPress, HTML5, CSS',
		'',
		'You can connect with me via:',
		'Facebook: facebook.com/imskl',
		'Twitter: twitter.com/maverickshak',
		'',
		'Have a good day :)',
        ''
	];
  
	type(text, screen);
};