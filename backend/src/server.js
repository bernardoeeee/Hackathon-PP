const express = require('express');
const cors = require('cors');
const connection = require('./db_config.js');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const porta = 3000;
const app = express();

app.use(cors());
app.use(express.json());


app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));

// ---------------------------------------------------

// Cadastro Usuário:

app.post('/usuario/cadastro', (request, response) => {
    let params = [
        request.body.nome,
        request.body.email,
        request.body.senha
    ];
    console.log(params)
    let query = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?);";

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso no cadastro",
                    data: results
                })
        } else {
            response.status(400).json({
                success: false,
                message: "Erro no cadastro",
                data: err
            });
        }
    });
});


// ------------------------------------------------------

// Login Usuário:

app.get('/usuario/login', (request, response) => {
    let params = [
        request.query.email, // <-- muda aqui
        request.query.senha  // <-- e aqui
    ];
    let query = "SELECT nome, email, senha FROM usuarios WHERE email = ?;";

    connection.query(query, params, (err, results) => {
        if (results && results.length > 0) {
            response.status(200).json({
                success: true,
                message: "Sucesso no login",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Erro no login: usuário não encontrado ou erro no banco",
                data: err
            });
        }
    });
});
app.use('/uploads', express.static(__dirname + '/uploads'))

// MENSAGENS DESENVOLVEDORES

app.post('/mensagem/Dev', upload.single('imagem'), (request, response) => {
    console.log("Imagem recebida:", request.file); // Verifique se o Multer está recebendo a imagem corretamente
    let params = [
        request.body.texto,
        request.file ? request.file.filename : null
    ];

    let query = "INSERT INTO Dev(texto, imagem) VALUES(?,?)";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(200).json({
                success: true,
                message: "sucesso",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "sem sucesso",
                data: err
            });
        }
    });
});

app.get('/listar/Dev', (request, response) => {
    let query = "SELECT * FROM Dev";

    connection.query(query, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    success: true,  
                    message: "sucesso",
                    data: results  
                })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "sem sucesso",
                    data: err
                })
        }
    })
})



// MENSAGENS DESIGNERS


app.post('/mensagem/Designers', upload.single('imagem'), (request, response) => {
    console.log("Imagem recebida:", request.file); // Verifique se o Multer está recebendo a imagem corretamente
    let params = [
        request.body.texto,
        request.file ? request.file.filename : null
    ];

    let query = "INSERT INTO Designers(texto, imagem) VALUES(?,?)";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(200).json({
                success: true,
                message: "sucesso",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "sem sucesso",
                data: err
            });
        }
    });
});

app.get('/listar/Designers', (request, response) => {
    let query = "SELECT * FROM Designers";

    connection.query(query, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    success: true,  
                    message: "sucesso",
                    data: results  
                })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "sem sucesso",
                    data: err
                })
        }
    })
})



// MENSAGENS PROJETOS


app.post('/mensagem/Projetos', upload.single('imagem'), (request, response) => {
    console.log("Imagem recebida:", request.file); // Verifique se o Multer está recebendo a imagem corretamente
    let params = [
        request.body.texto,
        request.file ? request.file.filename : null
    ];

    let query = "INSERT INTO Projetos(texto, imagem) VALUES(?,?)";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(200).json({
                success: true,
                message: "sucesso",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "sem sucesso",
                data: err
            });
        }
    });
});

app.get('/listar/Projetos', (request, response) => {
    let query = "SELECT * FROM Projetos";

    connection.query(query, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    success: true,  
                    message: "sucesso",
                    data: results  
                })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "sem sucesso",
                    data: err
                })
        }
    })
})


// TESTE MULTER

// app.post("/upload", function (req, res) {
//     const storage = multer.diskStorage({
//         destination: function(req, file, cb) {
//             cb(null, `${__dirname}/public`)
//         },
//         filename: function(req, file, cb) {
//             cb(null, Date.now() + ".jpg");
//         }
//     })

//     const upload = multer({ storage }).single("file");

//     upload(req, res, function(err) {
//         if (err instanceof multer.MulterError) {
//             return res.status(500).send(err);
//         } else if (err) {
//             return res.status(500).send(err)
//         }

//         console.log(req.file.filename);

//         return res.status(200).send({message: "Upload realizado com sucesso"}); 
//     });
// })