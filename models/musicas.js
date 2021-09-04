const mongoose = require('mongoose');

const musicaModel = new mongoose.Schema({
  nome: { type: String, require: true },
  autor: { type: String, require: true },
  genero: { type: String, require: true },
  capa: { type: String },
  letra: { type: String },
  duracao: { type: Number, require: true },
  dataCriacao: { type: Date, default: Date.now }
});

const Musica = mongoose.model("musicas", musicaModel);

module.exports = Musica;