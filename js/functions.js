function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function printResult(result){
	var div = document.createElement('div');
	div.innerHTML = result;
	document.getElementById('results').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function clearResult(){
	document.getElementById('results').innerHTML = '';
}