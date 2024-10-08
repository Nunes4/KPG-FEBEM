document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;

    if (taskText) {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');
        newTask.textContent = taskText;
        taskList.appendChild(newTask);
        taskInput.value = '';
    } else {
        alert('Por favor, insira uma tarefa!');
    }
});