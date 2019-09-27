"use strict";

class taskBox {
	statuses;
	
	constructor(modaldiv) {
		let modal = modaldiv
		let btn = document.getElementById("myBtn");
		let span = document.getElementClassName("close"[0]);
		
		btn.onClick = function (){
			modal.style.display = "block";
		}
		
		span.onClick = function (){
			modal.style.display = "none";
		}
		
		window.onClick = function(event){
			if(event.target === modal){
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

const tasksmodalboxdiv = document.getElementById("taskbox");
const tasknewbutton = document.getElementById("myBtn").getElementByTagName("button")[0];

tasknewbutton.addEventListener("click", (event) => {taskbox.show()}, true);
taskBox = new taskBox(taskmodalboxdiv);
taskBox.allStatuses = s;
taskBox.onSubmit = (task) => {
	console.log(`new task '${task.title}' with initial status ${task.status} is added to user.`);
	taskBox.close();
}

document.getElementById("myBtn").getElementByTagName("button")[0].disabled=false;

