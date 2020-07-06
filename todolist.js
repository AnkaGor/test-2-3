let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let worked = document.querySelector('.is-worked');
let opened = document.querySelector('.is-opened');
let done = document.querySelector('.done');

worked.onclick = function () {
priority.classList.toggle('is-worked');
};

opened.onclick = function () {
    priority.classList.toggle('is-opened');
    };

done.onclick = function () {
        priority.classList.toggle('done');
        };   

form.onsubmit = function (evt) {
evt.preventDefault();
let task = document.createElement('li');
task.textContent = input.value;
if (priority.classList.contains('is-worked')) {
task.classList.add('is-worked');
if (priority.classList.contains('is-opened')) {
    task.classList.add('is-opened');
    if (priority.classList.contains('done)) 
    {task.classList.add('done');
}
}

list.append(task);
input.value ='';
}
