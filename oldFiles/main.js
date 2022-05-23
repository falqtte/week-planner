// Por meio dos data-atributtes, acessamos os items HTML sem precisar fazer uso de classes
const tabela = document.querySelector("[data-table]");
let itens = JSON.parse(localStorage.getItem("itens")) || [];

let corpoHtml = "";
    if(itens[0]){
    itens[0].forEach((elemento, index)=>{
        let atual = index + 1;
        let indiceTr = Math.ceil(atual/8);
        let indiceTd = (atual/8 % 1) * 8;
        if (indiceTd === 0){
            indiceTd = 8;
        }
        console.log(index + 1)
        if (indiceTd === 1){
            corpoHtml += `<tr>
                            <td>
                                <label for="horario"></label>
                                <input type="text" placeholder="" data-${indiceTr}="1" value="${elemento}">
                            </td>`
        } else if (indiceTd > 1 && indiceTd < 8) {
            corpoHtml +=`<td>
                            <label for="horario"></label>
                            <input type="text" placeholder="" data-${indiceTr}="${indiceTd}" value="${elemento}">
                        </td>`
        } else if (indiceTd === 8) {
            corpoHtml += `    <td>
                                <label for="horario"></label>
                                <input type="text" placeholder="" data-${indiceTr}="8" value="${elemento}">
                            </td>
                        </tr>`
        }
    });
    tabela.innerHTML = corpoHtml;
}

const criarLinha=()=>{
    // Por meio de template strings é possível escrever em HTML com facilidade
    const indice = tabela.children.length + 1;
    const coluna = `<td>
                        <label for="horario"></label>
                        <input type="text" placeholder="" data-${indice}="1">
                    </td>
                    <td>
                        <label for="horario"></label>
                        <input type="text" placeholder="" data-${indice}="2">
                    </td>                       
                    <td>
                        <label for="horario"></label>
                        <input type="text" placeholder="" data-${indice}="3">
                    </td>                       
                    <td>
                        <label for="horario"></label>
                        <input type="text" placeholder="" data-${indice}="4">
                    </td>                       
                    <td>
                        <label for="horario"></label>
                        <input type="text" placeholder="" data-${indice}="5">
                    </td>                         
                    <td>
                        <label for="horario"></label>
                        <input type="text" placeholder="" data-${indice}="6">
                    </td>                          
                    <td>
                        <label for="horario"></label>
                        <input type="text" placeholder="" data-${indice}="7">
                    </td>    
                    <td>
                        <label for="horario"></label>
                        <input type="text" placeholder="" data-${indice}="8">
                    </td>`;

    const linha = document.createElement("tr");
    linha.innerHTML = coluna;
    tabela.appendChild(linha);
}

const deletarTarefa=()=>{
    // Aqui, o valor do elemento pai (a tbody) está sendo capturada, e por meio do metodo remove(), seu ultimo filho removido.
    const tarefaCompleta = tabela.lastChild;
    tarefaCompleta.remove();
}

const salvarLista=()=>{
    const arrayElementos = pegaElementoHtml(); // Retorna um array com o valor de cada um dos inputs.
    itens = [];
    localStorage.clear();
    itens.push(arrayElementos);
    localStorage.setItem("itens", JSON.stringify(itens));
}

function pegaElementoHtml(){
    let elemento = [];
    for (let i = 1; tabela.children.length > i-1; i++){
        for (let j = 1; j-1 < 8; j++){
            elemento.push(document.querySelector(`[data-${i}='${j}']`).value);
        }
    }
    return elemento;
}

const novaLinha = document.querySelector("[data-add-button]");
novaLinha.addEventListener("click", criarLinha);

const removeLinha = document.querySelector("[data-remove-button]");
removeLinha.addEventListener("click", deletarTarefa);

const salvaLista = document.querySelector("[data-save-button");
salvaLista.addEventListener("click", salvarLista);