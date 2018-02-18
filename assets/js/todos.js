init();

function addTodo(){
	$("#add-todo").keypress(function(e){
		if(e.which === 13){
			var text = "<li class='todos'><span><i class='fa fa-trash'></i></span>" + $(this).val();
			$("#main-list").append(text);
			$(this).val("");
		}
	});
}

function deleteTodo(){
	$("#main-list").on("click",".todos span",function(e){
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

function init(){
	addTodo();
	deleteTodo();
	hideBtn();
	completed();
}

