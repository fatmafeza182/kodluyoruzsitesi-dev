// const li =document.createElement("li");
// li.className ="#list"
// li.setAttribute("title","new item");


// const text =document.createTextNode("new-item");
// li.appendChild(text);

// const a =document.createElement("a");
// a.setAttribute("href","#");
// a.className = list;
// a.innerHTML="text";

// li.appendChild(a);

// document.querySelector("#list").append("#task-list");
document.addEventListener("DOMContentLoaded", function() {
    loadTasksFromLocalStorage();
});
function newElement() { 
    let taskInput = document.getElementById("task").value;
    // eğer boşsa hata ver
    if (taskInput .trim() === " ")  {
        {
        let toastError = document.querySelector(".toast.error");
        toastError.classList.remove("hide");
        setTimeout(() => {
            toastError.classList.add("hide");
        }, 4000);
        return; //boşsa ekleme yapma
    }
    }
    // Liste elemanı oluşturma
    let li = document.createElement("li");
    li.textContent = taskInput; // Kullanıcının yazdığı görevi ekle

    // Listeye yeni öğeyi ekle
    list.appendChild(li);

    // Input alanını temizle
    document.getElementById("task").value;

    // Başarı toast mesajını göster
    let toastSuccess = document.querySelector(".toast.success");
    toastSuccess.classList.remove("hide");
    setTimeout(() => {
        toastSuccess.classList.add("hide");
    }, 4000);
}
function getTasksFromLocalStorage() {
    let tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];  
}

function loadTasksFromLocalStorage() {
    let tasks = getTasksFromLocalStorage();
    let list = document.getElementById("list");

    tasks.forEach(task => {
        let li = document.createElement("li");
        li.textContent = task;
        list.appendChild(li);
    });
}