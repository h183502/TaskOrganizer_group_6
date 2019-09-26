"use strict";

class taskBox {
	statuses
	
	constructor() {
		let modal = document.getElementById("myModal");
		let btn = document.getElementById("myBtn");
		let span = document.getElementClassName("close"[0]);
		
		btn.onClick = function (){
			modal.style.display = "block";
		}
		
		span.onClick = function (){
			modal.style.display = "none";
		}
		
		window.onClick = function(event){
			if(event.target == modal){
				modal.style.display = "none";
			}
		}
		
	}
	setallstatuses(s){
		this.statuses = s
	}
	allStatuses(){
		
	}
	onSubmit(newtask){
		
	}
	close(){
		
	}
}

const tasksmodalboxdiv = document.getElementById("taskbox")
const tasknewbutton = document.getElementById("newtask").getElementByTagName("button")[0]

tasknewbutton.addEventListener("click", (event) => {taskbox.show()}, true)
taskBox = new TaskBox(taskmodalboxdiv)
taskBox.onSubmit = (task) => {
	console.log(`new task '${task.title}' with initial status ${task.status} is added to user.`)
	taskBox.close()
}

document.getElementById("newtask").getElementByTagName("button")[0].disabled=false

