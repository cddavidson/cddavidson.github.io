function greetUser() {
    const now = new Date();
    var current_time = now.getHours();
    var greeting;

    if (current_time < 12) {
        greeting = "Good Morning!"
    } else if (current_time < 18) {
        greeting = "Good Afternoon!"
    } else {
        greeting = "Good Evening!"
    }

    alert(greeting);
}

function changeButton() {
    let button = document.getElementById("button_2");
    console.log("Before Change:", button.textContent, button.className);

    button.textContent = "Done";
    button.className = "btn btn-success";

    console.log("After Change:", button.textContent, button.className);
}

document.getElementById("button_1").addEventListener("click", greetUser);
document.getElementById("button_2").addEventListener("click", changeButton);