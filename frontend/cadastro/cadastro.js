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
        localStorage.setItem("Informacoes", JSON.stringify(results.data))
    } else {
        console.log(results.message)
    }
}

async function signIn(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Passa os dados pela URL, porque é um GET
    const response = await fetch(`http://localhost:3000/usuario/login?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`);

    console.log(response);

    const results = await response.json();
    console.log(results);

    if (results.success) {
        alert(results.message);
        // localStorage.setItem("Informacoes", JSON.stringify(results.data));
        window.location.href = '../index/index.html';
    } else {
        console.log(results.message);
    }
}

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
