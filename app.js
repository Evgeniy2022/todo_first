const tasks = [
	{ task: 'go work'},
	{ task: 'shoping' },
	{ task: 'go to the gym' },
	{ task: 'breakfast' },
];

function addNewTsak(){
	const taskInput = document.getElementById('task__input');
	const ul = document.querySelector(".todo-list-ul");
	const li = document.createElement('li');
	li.classList.add('list__group-item');
	li.onclick = () => li.classList.add('active');
	const button = document.createElement('button');
	button.classList.add('btn', 'btn-siccess');
	button.innerText = "DELITE";
	button.onclick = () => li.remove();
	tasks.unshift({task: taskInput.value})
	li.append(button, taskInput.value);
	ul.append(li);
}
const btn = document.querySelector('.btn-input');
btn.addEventListener("click", addNewTsak);


function getTodoList(allTasks){
	const ul = document.querySelector(".todo-list-ul");
	
	const liElemeuts = allTasks.map((elem) =>{
		const li = document.createElement('li');
		li.classList.add('list__group-item');
		li.onclick = () => li.classList.toggle('active');
		const button = document.createElement('button');
		button.classList.add('btn', 'btn-siccess');
		button.innerText = "DELITE";
		button.onclick = () => li.remove();

		li.append(button, elem.task);
		return li
	})
	return ul.append(...liElemeuts);
}
getTodoList(tasks)