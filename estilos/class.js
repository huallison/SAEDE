


/*
PASSO 1:
Selecionar a div do hexagono
*/
const team = document.querySelectorAll(".hex");

/**
PASSO 2:
Ver se ele foi colocado o mouse em cima
 */
team.forEach(hex => {
    hex.addEventListener("mouseover", function() {
        if(hex.classList.contains("selecionado")) {
            return;
        }
        
        avatar_selecionado(hex)
        Fora_hexagono(hex)
        
        
        
    });
})


/*
PASSO 3: 
Mudar a class onde tem o background diferente
*/

function avatar_selecionado(hex) {

    const avatarselecionado = document.querySelector(".hex.selecionado");
    if(avatarselecionado !== null) {
        avatarselecionado.classList.remove("selecionado")
    }
    hex.classList.add("selecionado")
    
}


function Fora_hexagono(hex) {
    const fundo = document.querySelector(".hex.selecionado")
    fundo.addEventListener("mouseout", function() {
        hex.classList.remove("selecionado")
    })
}
