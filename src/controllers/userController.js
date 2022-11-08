const User = require("../models/userModel");

exports.create = (req, res) => {
  const user = new User(req.body);
  user.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "No funciono el guardado",
      });
    }
    res.json({ data });
  });
};

exports.list = (req, res) => {
  User.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "Consulta imposible",
      });
    }
    res.json(data);
  });
};

exports.listOne = (req, res) => {
  User.findOne({ _id: req.params.id }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "Consulta imposible",
      });
    }
    res.json(data);
  });
};

exports.update = function (req, res) {
  let user = req.body;
  User.findByIdAndUpdate(req.params.id, { $set: user }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "No se pudo actualizar el usuario",
      });
    }
    res.json({ info: "El usuario fue actualizado exitosamente" });
  });
};

exports.remove = function (req, res) {
  User.findByIdAndRemove({ _id: req.params.id }).exec((err) => {
    if (err) {
      return res.status(400).json({
        error: "No se pudo actualizar el usuario",
      });
    }
    res.json({ info: "El usuario fue removido exitosamente" });
  });
};
