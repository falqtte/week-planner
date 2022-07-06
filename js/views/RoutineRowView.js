class RoutineRowView extends View{

    constructor(element){
        super(element);
    }

    template(m = {index: RoutineRowController.numberOfRows, value:RoutineRowController.emptyCells()}){
        return `<div class="dashboard--day dashboard--day__time">
                    <div>
                        <button onclick="routineRowController.upRow(${m.index})" class="dashboard--day__time__button dashboard--day__time__up" data-up>^</button>
                        <button onclick="routineRowController.deleteRow(${m.index})" class="dashboard--day__time__button dashboard--day__time__delete" data-delete>x</button>
                        <button onclick="routineRowController.downRow(${m.index})" class="dashboard--day__time__button dashboard--day__time__down" data-down>^</button>
                    </div>
                    <input class="dashboard--day__input" type="text" data-${m.index}="${0}" value="${m.value[0]}">
                </div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" data-${m.index}="${1}" value="${m.value[1]}"></div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" data-${m.index}="${2}" value="${m.value[2]}"></div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" data-${m.index}="${3}" value="${m.value[3]}"></div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" data-${m.index}="${4}" value="${m.value[4]}"></div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" data-${m.index}="${5}" value="${m.value[5]}"></div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" data-${m.index}="${6}" value="${m.value[6]}"></div>
                <div class="dashboard--day"><input class="dashboard--day__input" type="text" data-${m.index}="${7}" value="${m.value[7]}"></div>
            `;
    }

}