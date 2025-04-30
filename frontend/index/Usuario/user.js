

document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("load", () => {
        if (localStorage.getItem("Informacoes")) {
            let dados = JSON.parse(localStorage.getItem('Informacoes'));


            const container = document.querySelector(".container");

            const infoHtml = `
                <div id="Informacoes" class="description">
                    <h2>Nome: ${dados.nome}</h2>
                    <h2>Email: ${dados.email}</h2>
                    <h2>Senha: ${dados.senha}</h2>
                </div>
            `;


            const botoesHtml = `
                <div class="botoes">
                    <button onclick="remover('${dados.email}')">
                        <i class="fa-solid fa-trash fa-2xl" style="color: #ff0000;"></i>
                    </button>
                    <button onclick="edit()">
                        <i class="fa-solid fa-user-pen fa-2xl" style="color: #4CAF50;"></i>
                    </button>
                </div>
            `;

            container.innerHTML = `
                <img class="photo" src="/frontend/assets/userPhoto.jpg" alt="imagem usuario" draggable="false">
                ${infoHtml}
                ${botoesHtml}
            `;
        }
    });
});


async function remover(email) {
    // console.log(email);
    const response = await fetch(`http://localhost:3000/remover/${email}`, {
        method: 'DELETE'
    });

    const result = await response.json();

    if (result.success) {
        localStorage.removeItem("Informacoes");
        window.location.href = "../index.html";
    } else {
        alert(result.message || 'Erro ao remover o usuário!');
    }
}