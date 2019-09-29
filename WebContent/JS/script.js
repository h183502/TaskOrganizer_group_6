"use strict";

class GuiHandler {

    constructor(){
        let taskDiv = document.getElementById("tasks");
        this.table = document.createElement("table");
        let trHTML = document.createElement("tr");
        this.table.appendChild(trHTML);
        let thTask = document.createElement("th");
        let thStatus = document.createElement("th");
        trHTML.appendChild(thTask);
        trHTML.appendChild(thStatus);
        thTask.innerText = "Task";
        thStatus.innerText = "Status";
        taskDiv.appendChild(this.table)
    }
    set allstatuses(s){
        this.statuses = s
    }
    deleteTaskCallback(){}

    newStatusCallback(){}

    showTask(task) {
        if(!document.getElementById(task.id)){
            let trHTML = document.createElement("tr");
            trHTML.id = task.id;
            let tdTitle = document.createElement("td");
            let tdStatus = document.createElement("td");
            let tdModify = document.createElement("td");
            let tdRemove = document.createElement("td");
            let tdArr = [tdTitle, tdStatus, tdModify, tdRemove];
            tdTitle.innerText = task.title;
            tdStatus.innerText = task.status;
            let selectHTML = document.createElement("select");
            selectHTML.id = "option-" + task.id
            selectHTML.options.add(new Option("<Modify>", "0", true));
            this.statuses.forEach(status => {
                let opt = new Option(status, status);
                if (opt.value === task.status){
                    opt.disabled = true;
                }
                selectHTML.options.add(opt)
            });
            tdModify.appendChild(selectHTML);
            selectHTML.addEventListener('change', () => {
                let result = window.confirm(`Set ${task.title} to ${selectHTML.value}?`);
                if (result){
                    this.newStatusCallback(task.id, selectHTML.value)
                }
            });
            let buttonHTML = document.createElement("button");
            buttonHTML.innerText = "Remove";
            buttonHTML.type = "button";
            buttonHTML.onclick = function() {
                let result = window.confirm(`Delete task ${task.title}?`);
                if(result){
                   // gui.removeTask(task.id)
                    gui.deleteTaskCallback(task.id);
                }
            };
            tdRemove.appendChild(buttonHTML);
            tdArr.forEach(td => trHTML.appendChild(td));
            this.table.appendChild(trHTML);

            // Update counting number of tasks
            let messageDiv = document.getElementById("message");
            messageDiv.getElementsByTagName("p")[0].textContent =
                `Found ${this.table.getElementsByTagName("tr").length - 1} tasks`


        } else {
            console.error("id of task already exists")
        }
    }
    update(task){
        // Change status
        let trHTML = document.getElementById(task.id);
        trHTML.getElementsByTagName("td")[1].innerText = task.status

        let selectElement = document.getElementById("option-" + task.id)

        //Enable old status
        let oldDisabledOpt = selectElement.querySelector('option[disabled]');
        oldDisabledOpt.disabled = false;

        //Disable new status
        let optionHTML = selectElement.querySelector(`option[value="${task.status}"]`);
        optionHTML.disabled = true;

        selectElement.selectedIndex = 0
    }
    removeTask(id){
        let trHTML = document.getElementById(id);
        let parentNode = trHTML.parentNode;
        parentNode.removeChild(trHTML);
        let messageDiv = document.getElementById("message");
        messageDiv.getElementsByTagName("p")[0].textContent =
            `Found ${this.table.getElementsByTagName("tr").length - 1} tasks`
    }
    noTask(){

    }
}

let nextID = 4;
const gui = new GuiHandler();
const statuses = ["WAITING","ACTIVE","DONE"];
const tasks = [
    {"id":1,"title":"Paint roof","status":"WAITING"},
    {"id":2,"title":"Clean floor","status":"DONE"},
    {"id":3,"title":"Wash windows","status":"ACTIVE"}
];

gui.allstatuses = statuses;
tasks.forEach((task) => {gui.showTask(task)});
gui.update({"id":1,"status":"ACTIVE"});
gui.removeTask(2);

gui.deleteTaskCallback = (id) => {
    console.log(`User has approved the deletion of task with id ${id}.`);
    gui.removeTask(id)
}

gui.newStatusCallback = (id,newStatus) => {
    console.log(`User has approved to change the status of task with id ${id} to ${newStatus}.`)
    gui.update({"id":id,"status":newStatus})
}
