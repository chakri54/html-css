const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("task-container");

function addToDo()
{
    if(inputBox.value === '')
    {
        alert("Enter what you would like to do before adding...");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e)
{
    if(e.target.tagName == "LI")
    {
        e.target.remove();
        saveData();
    }
}, false);

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}

function displaySaved()
{
    listContainer.innerHTML = localStorage.getItem("data");
}

displaySaved();