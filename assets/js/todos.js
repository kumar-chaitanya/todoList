init();
document.addEventListener('DOMContentLoaded', getTask);

function addTodo(){
	$("#add-todo").keypress(function(e){
		if(e.which === 13){
			var text = "<li class='todos'><span><i class='fa fa-trash'></i></span>" + $(this).val() + "</li>";
			$("#main-list").append(text);
			addToLocalStorage($(this).val());
			$(this).val("");
		}
	});
}

function deleteTodo(){
	$("#main-list").on("click",".todos span",function(e){
		deleteFromLocalStorage($(this).parent().text());
		$(this).parent().fadeOut(function(){
			$(this).remove();
		});
		e.stopPropagation();
	});
}

function hideBtn(){
	$("#hide-btn").on("click",function(){
		$("#add-todo").slideToggle(300);
	});
}

function completed(){
	$("#main-list").on("click",".todos",function(){
		$(this).toggleClass("task-completed");
	});
}

function addToLocalStorage(todo) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.push(todo);
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTask() {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
		for (let i = 0; i < tasks.length; i++) {
			let element = tasks[i];
			var text = "<li class='todos'><span><i class='fa fa-trash'></i></span>" + element + "</li>";
			$("#main-list").append(text);
		}
	}
}

function deleteFromLocalStorage(todo) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
		tasks.forEach(function (task, i) {
			if(todo === task) {
				tasks.splice(i, 1);
			}
		});
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}
}

function init(){
	addTodo();
	deleteTodo();
	hideBtn();
	completed();
}

