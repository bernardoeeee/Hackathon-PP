const container = document.getElementById("container")
const registerBtn = document.getElementById("register")
const loginBtn = document.getElementById("login")

registerBtn.addEventListener("click", () => {
    container.classList.add("active")
})
loginBtn.addEventListener("click", () => {
    container.classList.remove("active")
})



async function signUp(event) {
    event.preventDefault()
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    const data = { nome, email, senha }
    console.log(data)

    const response = await fetch('http://localhost:3000/usuario/cadastro', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const results = await response.json();
    console.log("resultados response", response)
    console.log("resultados results", results)

    if (results.success) {
        alert(results.message)
        console.log(results.data)
        localStorage.setItem("Informacoes", JSON.stringify(results.data))
    } else {
        console.log(results.message)
    }
}

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("emailLogin").value;
    const senha = document.getElementById("senhaLogin").value;

    const usuario = { nome, email, senha };

    fetch('http://localhost:3000/usuario/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
        .then(response => response.json())
        .then(resultado => {
            if (resultado.success) {
                alert(resultado.message);

                // Evita salvar a senha no localStorage
                const { nome, email, senha } = resultado.user;

                localStorage.setItem("Informacoes", JSON.stringify({ nome, email, senha }));

                window.location.href = '../index/index.html';
            } else {
                alert(resultado.message || "Login falhou.");
            }
        })
        .catch(error => {
            console.error("Erro ao fazer login:", error);
        });
});


// -------------------------------
// RESPONSIVIDADE

function updateSizeInfo() {
    let largura = window.innerWidth
    // document.getElementById("sizeInfo").textContent = `Largura da janela: ${largura}px`

    let container = document.getElementById("container")
    let inputs = document.querySelectorAll("input")

    if (largura < 600) {
        container.style.backgroundColor = "var(--cor-cards)"
        inputs.forEach(input => {
            input.style.width = "70%"
            input.style.padding = "6px"
        })
    } else {
        if (largura < 600) {
            container.style.backgroundColor = "var(--cor-cards)"
            inputs.forEach(input => {
                input.style.width = "70%"
                input.style.padding = "6px"
            })
        }
    }
}
