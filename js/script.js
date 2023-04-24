

document.querySelector('#push').onclick = function(){
    // const reviews = JSON.parse(localStorage.getItem("review"));
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="edit">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="delete">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
                // localStorage.setItem("review", JSON.stringify(reviews));
            }
        }
       
    }
}