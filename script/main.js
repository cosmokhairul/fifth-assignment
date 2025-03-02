console.log("Hello")

const completeBtns = document.getElementsByClassName("complete-btns");

    for (let completeBtn of completeBtns) {
        completeBtn.addEventListener("click", function() {

            alert("Board Updated Successfully!");
                
            const taskNumber = document.getElementById("task-number").innerText;
            const convertedTaskNumber = parseFloat(taskNumber); 

            const newTaskNumber= convertedTaskNumber - 1;
            document.getElementById("task-number").innerText = newTaskNumber;

            const reduceNumber = document.getElementById("reduce-number").innerText;
            const convertedReduceNumber = parseFloat(reduceNumber); 

            const newReduceNumber = convertedReduceNumber + 1;
            document.getElementById("reduce-number").innerText = newReduceNumber;

            this.disabled = true;

            if(newTaskNumber ===0){
                alert("Congrates!! You have completed all the task.");
            }
            else{

            }

            let taskTitle = this.closest('.close-task-title').querySelector('.task-title').innerText;
            console.log(taskTitle);

            let now = new Date();
            let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

            const container = document.getElementById("task-activity");
            const p = document.createElement("p");
            p.innerText = `
            You have complete the task ${taskTitle} at ${currentTime};
            `
            container.appendChild(p);

        });
    }

    function currentDate() {
        return new Date().toLocaleDateString("en-US", {
            weekday: "short", 
            month: "short",   
            day: "2-digit",   
            year: "numeric"
        }).replace(',', '');
    }
    document.getElementById("current-date").textContent = currentDate();

    document.getElementById("blog-btn").addEventListener("click", function(){
        window.location.href = "./blog.html";
    })

    const colors = ["#C5FFFD", "#E6EBE0", "#F7F7FF", "#F9E9EC", "#FBF7F4", "#EAF4F4", "#F6FFF8"];

    document.getElementById("background-changer").onclick = function() {
        const colorIndex = Math.floor(Math.random() * colors.length);
        document.body.style.backgroundColor = colors[colorIndex];
    };

    document.getElementById("clear-history").addEventListener("click", function(){
        const container = document.getElementById("task-activity");
        container.innerHTML = "";
    })



// document.getElementById("complete-btn").addEventListener("click", function(){
//     // console.log("clicked")
//     const taskNumber = document.getElementById("task-number").innerText;
//     const convertedTaskNumber = parseFloat(taskNumber); 

//     const newTaskNumber= convertedTaskNumber + 1;
//     document.getElementById("task-number").innerText = newTaskNumber;

//     this.disabled = true;
// })