class View{
    #element
    constructor(element){
        this.#element = element;
    }

    get element() {
        return this.#element;
    }

    template(){
        throw new Error("The template method has to be implemented.");
    }

    update(model){
        this.#element.appendChild(this.template(model));
        document.querySelectorAll(`[data-row="${model.index}"]`).forEach(element => {
            element.addEventListener("focusout", ()=>routineRowController.saveCell(element));
        });
    }
}