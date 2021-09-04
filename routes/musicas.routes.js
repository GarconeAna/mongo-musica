const express = require('express');
const router = express.Router();
const Musica = require('../models/musicas');

router.get('/', async (req, res) => {
  // logica para listar
  await Musica.find({})
  .then((musica) => {
    res.send(musica);
  })
  .catch((err) => {
    console.log(err);
  });
  // res.send('rota /');
});

router.post("/add", async (req, res) => {
  // logica para add
  await Musica.create(req.body)
  .then(() => {
    res.status(200).send("Musica adicionada com sucesso");
  }).catch((err) => {
    res.status(400).send("Algo errado. Tente novamente.");
    console.log(err);
  });
  // res.send('rota add');
});

router.get("/findByName", async (req, res) => {
  // logica para lista por nome
  await Musica.find({nome : req.params.body})
  .then((musica) => {
    res.status(200).send(musica);
  }).catch((err) => {
    res.status(400).send("Algo errado. Tente novamente.");
    console.log(err);
  });
  // res.send('rota listar por nome');
});

router.put("/update/:id", async (req, res) => {
  // logica para editar
  await Musica.updateOne({_id : req.params.id},req.body)
  .then(() => {
    res.status(200).send("Atualizado com sucesso");
  }).catch((err) => {
    res.status(400).send("Algo errado. Tente novamente");
    console.log(err);
  });
  // res.send('rota update');
});


router.delete("/delete", async (req, res) => {
  // logica para deletar
  await Musica.deleteOne({_id : req.params.id})
  .then(() => {
    res.status(200).send("Deletado com sucesso");
  }).catch((err) => {
    res.status(400).send("Algo errado. Tente novamente");
    console.log(err);
  });
  // res.send('rota delete');
});


module.exports = router;