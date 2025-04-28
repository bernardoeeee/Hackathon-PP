async function cadastro(event) {
    event.preventDefault()
    // select email from user;
    window.location.href = '/frontend/cadastro/cadastro.html'
    // if(email === email){
    // }else{
    //     window.location.href = '../cadastro/cadastro.html'
    // }
}

function Dev() {
    window.location.href = '../Dev/dev.html'
}

function Projeto(){
    window.location.href = '../Projetos/projetos.html'
}

function Design(){
    window.location.href = '../Design/design.html'
}





window.addEventListener('load', () => {
    listarMensagemProjetos()
})








async function enviarMensagem(event) {
    event.preventDefault()

    const texto = document.querySelector('#texto').value;
    const imagem = document.querySelector('#imagem').files[0];  // Pega o arquivo de fato

    let formData = new FormData();
    console.log(texto, imagem);

    formData.append('texto', texto)
    formData.append('imagem', imagem)  // Aqui deve ser o arquivo, não o nome

    const response = await fetch('http://localhost:3000/mensagem/Projetos', {
        method: "POST",
        body: formData // Não precisa especificar o Content-Type
    });

    const results = await response.json()
    if (results.message) {
        alert(results.message)
    } else {
        alert(results.message)
    }
}

async function listarMensagemProjetos() {
    const response = await fetch('http://localhost:3000/listar/Projetos', {
        method: 'GET',
    })

    const results = await response.json()

    if (results.success) {  // Corrigi a chave de "sucess" para "success"
        let textoData = results.data;  // Aqui vai estar o array de mensagens
        const images = 'http://localhost:3000/uploads/';
        let html = document.getElementById('FileiraTextos')

        textoData.forEach(mensagem => {
            let card = `
                <div style="position: absolute; left: 40%; top: 20%; background-color: #2a2a3b;">
                    <p>${mensagem.texto}</p>
                    <img src="${images + mensagem.imagem}" alt="" width="350px" height="350px">
                </div>
            `
            html.innerHTML += card
        });
    } else {
        alert(results.message)
    }
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
