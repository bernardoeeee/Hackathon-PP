async function cadastro(event) {
    event.preventDefault()
    // select email from user;
    window.location.href = '../cadastro/cadastro.html'
    // if(email === email){
    // }else{
    //     window.location.href = '../cadastro/cadastro.html'
    // }
}

function Dev() {
    window.location.href = '../Grupos/Dev/dev.html'
}

function Projeto(){
    window.location.href = '../Grupos/Projetos/projetos.html'
}

function Design(){
    window.location.href = '../Grupos/Design/design.html'
}


// -------------------------------
// RESPONSIVIDADE - ARRUMAR

function updateSizeInfo() {
    let largura = window.innerWidth
    // document.getElementById("sizeInfo").textContent = `Largura da janela: ${largura}px`

    let container = document.getElementById("container")
    let inputs = document.querySelectorAll("input, select")

    if (largura < 600) {
        container.style.backgroundColor = "#222"
        inputs.forEach(input => {
            input.style.width = "70%"
            input.style.padding = "6px"
        })
    } else {
    if (largura < 600) {
        container.style.backgroundColor = "#222"
        inputs.forEach(input => {
            input.style.width = "70%"
            input.style.padding = "6px"
        })
    }
    }
}
