class RoutineRowController {
    constructor(){
        this.routineRowList = new RoutineRowList();
        this.dataDashBody = document.querySelector('[data-dashBody]')
    }

    static numberOfRows = 0;
    static emptyCells = () => ["", "", "", "", "", "", "", ""];

    addRow(model = {index: RoutineRowController.numberOfRows, value: RoutineRowController.emptyCells()}) {
        this.routineRowList.add(this.createRow());
        const template = new RoutineRowView(this.dataDashBody).update(model);

        RoutineRowController.numberOfRows++;
    }

    createRow(cells = RoutineRowController.emptyCells()){
        return new RoutineRow(RoutineRowController.numberOfRows, cells)
    }

    upRow(id){    
        const isEqualId = (element) => element.index === id;
        const index = this.routineRowList.rows.findIndex(isEqualId);
        if(index === 0) return 

        let element = this.routineRowList.rows[index].index;
        this.routineRowList.rows[index].index = this.routineRowList.rows[index - 1].index;
        this.routineRowList.rows[index - 1].index = element;
        this.updateEveryone()
    }

    downRow(id){    

        const isEqualId = (element) => element.index === id;
        const index = this.routineRowList.rows.findIndex(isEqualId);
        if(index === this.routineRowList.rows.length - 1) return 

        let element = this.routineRowList.rows[index].index;
        this.routineRowList.rows[index].index = this.routineRowList.rows[index + 1].index;
        this.routineRowList.rows[index + 1].index = element;
        this.updateEveryone()
    }

    deleteRow(index){    

    }

    updateEveryone(){
        this.dataDashBody.innerHTML = TemplateView.header();
        for(let i = 0; i < RoutineRowController.numberOfRows; i++){
            const model = {
                index:this.routineRowList.rows[i].index,
                value:this.routineRowList.rows[i].cells,
            }
            new RoutineRowView(this.dataDashBody).update(model)
        }
    }

}