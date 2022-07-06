class View{
    #element;
    constructor(element){
        this.#element = element;
    }

    template(){
        throw new Error("The template method has to be implemented.");
    }

    update(model){

        const newRow = document.createElement("div");
        newRow.classList.add("dashboard--body")
        newRow.innerHTML = this.template(model);
        this.#element.appendChild(newRow)

    }
}