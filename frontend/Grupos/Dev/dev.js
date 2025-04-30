function cadastro() {
    const logado = localStorage.getItem("Informacoes");
    if (logado) {

        window.location.href = "/frontend/index/Usuario/user.html";
    } else {
        

        window.location.href = "/frontend/cadastro/cadastro.html";
    }
}

function Dev() {
    window.location.href = '../Dev/dev.html'
}

function Projeto() {
    window.location.href = '../Projetos/projetos.html'
}

function Design() {
    window.location.href = '../Design/design.html'
}



// window.addEventListener('load', () => {
//     listarMensagemDev()
// })








async function enviarMensagem(event) {
    event.preventDefault();

    const texto = document.querySelector('#texto').value;
    const imagemInput = document.querySelector('#imagem');
    const imagem = imagemInput.files[0];

    let formData = new FormData();

    if (texto.trim() !== '') {
        formData.append('texto', texto);
    }

    if (imagem) {
        formData.append('imagem', imagem);
    }

    const response = await fetch('http://localhost:3000/mensagem/Dev', {
        method: "POST",
        body: formData
    });

    const results = await response.json();
    if (results.success) {
        listarMensagemDev(); 
        document.querySelector('#texto').value = '';
        imagemInput.value = '';
    } else {
        alert('Erro ao enviar: ' + results.message);
    }
}

async function listarMensagemDev() {
    const response = await fetch('http://localhost:3000/listar/Dev', {
        method: 'GET',
    });

    const results = await response.json();

    if (results.success) {
        let textoData = results.data;
        const images = 'http://localhost:3000/uploads/';
        let html = document.getElementById('FileiraTextos');

        html.innerHTML = '';

        textoData.forEach(mensagem => {
            let imagemTag = mensagem.imagem
                ? `<img src="${images + mensagem.imagem}" alt="imagem" width="350px" height="350px">`
                : '';

            let textoTag = mensagem.texto
                ? `<p>${mensagem.texto}</p>`
                : '';

            let card = `
                <div style="background-color: var(--cor-cards); margin: 10px; padding: 10px; border-radius: 10px; max-width: 400px;">
                    ${textoTag}
                    ${imagemTag}
                </div>
            `;
            html.innerHTML += card;
        });
    } else {
        alert(results.message);
    }
}



// -----------------------------------------------
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


listarMensagemDev(); 

setInterval(listarMensagemDev, 5000); 
