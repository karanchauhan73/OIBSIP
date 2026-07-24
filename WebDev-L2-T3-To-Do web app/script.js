let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const input = document.getElementById("taskInput");

const addBtn = document.getElementById("addBtn");

const pendingList = document.getElementById("pendingList");

const completedList = document.getElementById("completedList");

function save() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

function format(date){

    return new Date(date).toLocaleString();

}

function render(){

    pendingList.innerHTML="";

    completedList.innerHTML="";

    let pending=0;

    let completed=0;

    tasks.forEach(task=>{

        const li=document.createElement("li");

        li.innerHTML=`

        <div class="task-top">

        <span class="task-text ${task.completed ? "completed":""}">

        ${task.text}

        </span>

        </div>

        <div class="time">

        Added : ${format(task.created)}

        ${task.completed && task.completedTime ?

        "<br>Completed : "+format(task.completedTime):""}

        </div>

        <div class="actions">

        <button onclick="toggleTask(${task.id})">

        ${task.completed ? "Undo":"Complete"}

        </button>

        <button onclick="editTask(${task.id})">

        Edit

        </button>

        <button onclick="deleteTask(${task.id})">

        Delete

        </button>

        </div>

        `;

        if(task.completed){

            completed++;

            completedList.appendChild(li);

        }else{

            pending++;

            pendingList.appendChild(li);

        }

    });

    document.getElementById("pendingCount").innerText=

    pending+" Pending";

    document.getElementById("completedCount").innerText=

    completed+" Completed";

    document.getElementById("pendingEmpty").style.display=

    pending===0?"block":"none";

    document.getElementById("completedEmpty").style.display=

    completed===0?"block":"none";

    save();

}

addBtn.onclick=()=>{

    const text=input.value.trim();

    if(text==="") return;

    tasks.push({

        id:Date.now(),

        text,

        completed:false,

        created:new Date(),

        completedTime:null

    });

    input.value="";

    render();

};

input.addEventListener("keypress",function(e){

if(e.key==="Enter") addBtn.click();

});

function toggleTask(id){

    tasks=tasks.map(task=>{

        if(task.id===id){

            task.completed=!task.completed;

            task.completedTime=task.completed?

            new Date():null;

        }

        return task;

    });

    render();

}

function deleteTask(id){

    tasks=tasks.filter(task=>task.id!==id);

    render();

}

function editTask(id){

    const task=tasks.find(t=>t.id===id);

    const text=prompt("Edit Task",task.text);

    if(text!==null && text.trim()!==""){

        task.text=text.trim();

        render();

    }

}

render();