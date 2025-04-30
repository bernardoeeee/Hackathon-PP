# Atividade de técnico - Hackathon Interno
## Nesta atividade, fomos separados em grupos de 5 pessoas para desenvolver um protótipo funcional de aplicação, sobre um dos 3 temas disponíveis para a escolha, utilizando os conhecimentos adquiridos ao longo do curso.
- O grupo escolheu o tema 2 - Feira de Trocas Digitais. O tema 2 pedia para criarmos uma plataforma que permita aos usuários oferecer e pedir ajuda em assuntos relacionados com programação, projetos e design. Para desenvolver a aplicação, criamos uma plataforma utilizando, no FrontEnd, HTML e CSS (para estruturação e estilização do site), JavaScript (para funcionalidade do site). No BackEnd utilizamos NodeJS, para criação das API, e para armazenamento das informações utilizamos o banco de dados MySQL.
- Na plataforma, criamos a página inicial, uma página para cadastro e login do usuário, e 3 páginas para permitir as trocas entre os usuários: a página de desenvolvedores, de designers e de projetos. Nessas 3 páginas, o usuário pode enviar um texto com suas dúvidas ou dicas, junto de uma imagem.

Tabela de conteúdos

=================

<!--ts-->
   * [Tecnologias](#tecnologias)
   * [Pré-requisitos](#pre-requisitos)
   * [Instalação](#instalacao)
   * [Como usar](#como-usar)
<!--te-->

### Tecnologias

As seguintes ferramentas foram utilizadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [VSCode](https://code.visualstudio.com/)
- [MySQL Workbench](https://https://www.mysql.com/)

As linguagens utilizadas no VSCode foram:

- JavaScript
- HTML
- CSS

### Pré-requisitos

- Certifique-se de ter instalado em seu computador o MySQL Workbench, [Node.js](https://nodejs.org/en/), [VSCode](https://code.visualstudio.com/) e Git Bash.


### Instalação (Node JS)

```bash
# Clone este repositório
$ git clone <https://github.com/bernardoeeee/Hackathon-3B-FeiraTrocaDigital.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd Hackathon_PP

# Vá para a pasta do backend
$ cd backend

# Instale as dependências
$ npm i express mysql2 cors nodemon multer

# Execute a aplicação
$ npm start


```

### Como usar

#### MySQL
- Abra o MySQL e selecione o workbench, use a senha "root" para acessá-la.

- Copie o código do arquivo MySQL presente no arquivo do VScode, cole no workbench do MySQL e certifique-se de salvar para testar o código, utilizando "ctrl + enter" em todo ele, ou selecionando todo código e clicando no ícone do raio.
