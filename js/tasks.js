const tasksSection = $("[data-tasks]");
const newTaskButton = $("[data-newTask]");

newTaskButton.addEventListener("click", () => {
    newTaskButton.remove()
    const taskCreatorElement = document.createElement("article");
    taskCreatorElement.classList.add("tasks--new");
    taskCreatorElement.innerHTML = getTaskCreatorInner();
    tasksSection.appendChild(taskCreatorElement);
})

function getTaskCreatorInner(){
    return `<div class="tasks--new--name">
        <label for="task-name" class="tasks--new--name__label">Task:</label>
        <input name="task-name" type="text" placeholder="Task Name">
    </div>
    <div class="tasks--new--tasks__item">
        <label class="tasks--new--tasks__label" for="task-name">1º</label>
        <input class="tasks--new--tasks__input" type="text" name="task-name">
    </div>
    <div class="tasks--new__add">
        <button class="tasks--new__button tasks--new__add--btn">+</button>
        <button class="tasks--new__button tasks--new__add--btn">-</button>
    </div>
    <div class="tasks--new--repeat">
        <p class="tasks--new--repeat__title">Repeat:</p>
        <select class="tasks--new--repeat__select">
            <option>Once</option>
            <option>Daily</option>
            <option>Mon to Fri</option>
            <option>Custom</option>
        </select>
    </div> 
    <div class="tasks--new--custom">
        <div class="tasks--main--task__item">
            <input class="tasks--main--task__item__input" type="checkbox" name="task-name">
            <label class="tasks--main--task__item__label" for="task-name">Domingo</label>
        </div>
        <div class="tasks--main--task__item">
            <input class="tasks--main--task__item__input" type="checkbox" name="task-name">
            <label class="tasks--main--task__item__label" for="task-name">Segunda</label>
        </div>
        <div class="tasks--main--task__item">
            <input class="tasks--main--task__item__input" type="checkbox" name="task-name">
            <label class="tasks--main--task__item__label" for="task-name">Terça</label>
        </div>
        <div class="tasks--main--task__item">
            <input class="tasks--main--task__item__input" type="checkbox" name="task-name">
            <label class="tasks--main--task__item__label" for="task-name">Quarta</label>
        </div>
        <div class="tasks--main--task__item">
            <input class="tasks--main--task__item__input" type="checkbox" name="task-name">
            <label class="tasks--main--task__item__label" for="task-name">Quinta</label>
        </div>
        <div class="tasks--main--task__item">
            <input class="tasks--main--task__item__input" type="checkbox" name="task-name">
            <label class="tasks--main--task__item__label" for="task-name">Sexta</label>
        </div>
        <div class="tasks--main--task__item">
            <input class="tasks--main--task__item__input" type="checkbox" name="task-name">
            <label class="tasks--main--task__item__label" for="task-name">Sábado</label>
        </div>
    </div>
    <button class="tasks--new__button tasks--new__button--create"> Create Task </button>`
}