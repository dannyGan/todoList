let myToDos = [];

function displayTodo() {
	const ul = document.querySelector('#listToDo');

	ul.innerHTML = '';

	myToDos.forEach(todo => {
		const li = document.createElement('li');
		const section = document.createElement('section');
		const i = document.createElement('i');
		const input = document.createElement('input');
		li.setAttribute('class', 'list-group-item col-10 mx-auto d-flex justify-content-between align-items-center rounded');
		li.innerText = todo.text;
		// i.setAttribute('class', 'fas fa-minus-square');
		input.setAttribute('type', 'checkbox');
		input.setAttribute('class', 'checked');
		// section.appendChild(i);
		li.appendChild(section);
		li.appendChild(input);
		ul.appendChild(li);
	});
}

function addElement() {
	let data = document.getElementById('inputData').value;
	let newTodo = {};
	newTodo['id'] = myToDos.length + 1;
	newTodo['text'] = data;

	myToDos.push(newTodo);

	displayTodo();
	document.getElementById('inputData').value = '';
}

document.addEventListener('keyup', function(event) {
	if (event.keyCode === 13) {
		if (document.getElementById('inputData').value) {
			document.getElementById('inputData');
			addElement();
		}
	}
});

function clearList() {
	const list = document.querySelectorAll('.checked');
	const listToBeDelete = document.getElementsByClassName('list-group-item');

	[...list].forEach((list, index) => {
		console.log(list.checked);
		if (list.checked) {
			document.getElementById('listToDo').removeChild(listToBeDelete[index]);
			myToDos = [];
		} else {
			return;
		}
	});

	// const arr = [...listToBeDelete];

	// arr.forEach((data, index) => document.getElementById('listToDo').removeChild(listToBeDelete[0]));
}

// function


