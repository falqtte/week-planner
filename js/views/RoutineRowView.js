class RoutineRowView extends View{

    constructor(element){
        super(element);
    }

    static header() {
        return `<div class="dashboard--header">
                    <div class="dashboard--day dashboard--day__weekday">Horário</div>
                    <div class="dashboard--day dashboard--day__weekday">Domingo</div>
                    <div class="dashboard--day dashboard--day__weekday">Segunda</div>
                    <div class="dashboard--day dashboard--day__weekday">Terça</div>
                    <div class="dashboard--day dashboard--day__weekday">Quarta</div>
                    <div class="dashboard--day dashboard--day__weekday">Quinta</div>
                    <div class="dashboard--day dashboard--day__weekday">Sexta</div>
                    <div class="dashboard--day dashboard--day__weekday">Sábado</div>
                </div>`
    }

    template(m = {index: RoutineRowController.numberOfRows, value:RoutineRowController.emptyCells()}){

        const newRow = document.createElement("div");
        newRow.classList.add("dashboard--body")
        newRow.innerHTML = `<div class="dashboard--day dashboard--day__time">
                    <div>
                        <button onclick="routineRowController.upRow(${m.index})" class="dashboard--day__time__button dashboard--day__time__up" data-up>^</button>
                        <button onclick="routineRowController.deleteRow(${m.index})" class="dashboard--day__time__button dashboard--day__time__delete" data-delete>x</button>
                        <button onclick="routineRowController.downRow(${m.index})" class="dashboard--day__time__button dashboard--day__time__down" data-down>^</button>
                    </div>
                    <input class="dashboard--day__input" type="text" data-row="${m.index}" data-cell="0" value="${m.value[0]}">
                </div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" data-row="${m.index}" data-cell="1" value="${m.value[1]}"></div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" data-row="${m.index}" data-cell="2" value="${m.value[2]}"></div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" data-row="${m.index}" data-cell="3" value="${m.value[3]}"></div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" data-row="${m.index}" data-cell="4" value="${m.value[4]}"></div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" data-row="${m.index}" data-cell="5" value="${m.value[5]}"></div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" data-row="${m.index}" data-cell="6" value="${m.value[6]}"></div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" data-row="${m.index}" data-cell="7" value="${m.value[7]}"></div>
            `;
        return newRow;
    }

}