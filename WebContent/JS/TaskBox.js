"use strict";

class TaskBox {
	
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
}