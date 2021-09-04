const express = require('express');
// const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const Conn = require('./models/conn/conn');

Conn("localhost", 27017, "musicas");

const port = 3000;

const musica = require('./routes/musicas.routes');
app.use('/musicas', musica);

// const Usuario = require('./models/usuario');



// const usuario1 = new Usuario({
//   nome: "Ana",
//   sobrenome: "Garcone",
//   cpf: "0000000000",
//   idade: 2001-07-24,
//   senha: "blue123"
// });

// usuario1.save()
// .then(() => {
//   console.log('Filme salvo!');
// })
// .catch((err) => {
//   console.error(err)
// })

// app.get('/usuarios', (req, res) => {
//   Usuario.find({})
//   .then((usuarios) => {
//     console.log(usuarios)
//     res.send('')
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// });
// Usuario.find({})
// .then((usuarios) => {
//   console.log(usuarios)
// })
// .catch((err) => {
//   console.log(err)
// })

// Usuario.find({ _id: "qualoid" })
// .then((usuarios) => {
//   console.log(usuarios)
// })
// .catch((err) => {
//   console.log(err)
// })


// app.get('/', (req , res) => {
//   res.send('Hello World')
// });



app.listen(port, () => {
  console.info(`Servidor rodando na porta ${port}`);
});