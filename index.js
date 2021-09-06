if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}


const express = require('express');
// const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const Conn = require('./models/conn/conn');

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

Conn(db_url, db_user, db_pass, db_data);

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



app.listen(process.env.PORT || port, () => {
  console.info(`Servidor rodando na porta ${port}`);
});