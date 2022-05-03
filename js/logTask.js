let currentTaskId = null;
let timer = null;
let seconds = 0;

const saveToDB = async function(id) {
    console.log("Saving");
    const response = await fetch('/log', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            users_id: -1,
            students_id: -1,
            task_id: id,
            duration: seconds
        })
    });

    const result = await response.json();
    console.log(result);
};

function startTimer(id) {
    console.log("Starting timer");
    let timeLabel = document.querySelector("#timer" + id);
    let button = document.querySelector("#button" + id);
    button.innerHTML = "Stop";
    
    try {
        seconds = Number(timeLabel.innerHTML);
    } catch (err) {
        console.error(err);
        seconds = 0;
    }

    timer = setInterval(function() {
        seconds += 1;
        timeLabel.innerHTML = seconds;
    }, 1000);
}

function stopTimer(id) {
    console.log("Stopping timer");
    let button = document.querySelector("#button" + currentTaskId);
    button.innerHTML = "Start";

    if (timer !== null) {
        clearInterval(timer);
    }

    saveToDB(id);
}

function logTask(id) {
    // Stop timer if we're tracking a task
    // Saves to database in stop timer
    if (currentTaskId !== null) {
        stopTimer(currentTaskId);
        console.log("Stop tracking task " + id);
    }
    
    // Start new timer if we want to track a task with a different id
    if (currentTaskId !== id) {
        startTimer(id);
        console.log("Tracking task " + id);
    }

    // Set current task
    currentTaskId = id;
}