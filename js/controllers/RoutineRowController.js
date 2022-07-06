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

        let elementCell = this.routineRowList.rows[index].cells;
        this.routineRowList.rows[index].cells = this.routineRowList.rows[index - 1].cells;
        this.routineRowList.rows[index - 1].cells = elementCell;
        this.updateEveryone();
    }

    downRow(id){    
        const isEqualId = (element) => element.index === id;
        const index = this.routineRowList.rows.findIndex(isEqualId);
        if(index === this.routineRowList.rows.length - 1) return 

        let elementCell = this.routineRowList.rows[index].cells;
        this.routineRowList.rows[index].cells = this.routineRowList.rows[index + 1].cells;
        this.routineRowList.rows[index + 1].cells = elementCell;
        this.updateEveryone();
    }

    deleteRow(index){    

    }

    saveCell(e) {
        const row = e.dataset.row
        const cell = e.dataset.cell
        const value = e.value;
        this.routineRowList.rows[row].cells[cell] = value
        console.log(row, cell);
    }

    updateEveryone(){
        this.dataDashBody.innerHTML = RoutineRowView.header();
        for(let i = 0; i < RoutineRowController.numberOfRows; i++){
            const model = {
                index:this.routineRowList.rows[i].index,
                value:this.routineRowList.rows[i].cells,
            }
            new RoutineRowView(this.dataDashBody).update(model)
        }
    }

}