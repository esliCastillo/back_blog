const db = require("../models");
const Entrada = db.entrada;
const Op = db.Sequelize.Op;

/**
 * Crea una nueva entrada
 * @param {titulo} 
 * @param {autor} 
 * @param {contenido} 
 * @returns {object}
 */
exports.create = (req, res) => {
    // Validate request
  if (!req.body.titulo) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Entrada
  const entrada = {
    titulo: req.body.titulo,
    autor: req.body.autor,
    contenido: req.body.contenido,
    fecha_publicacion: req.body.fecha_publicacion ? req.body.published : ""
  };

  // Save Entrada in the database
  Entrada.create(entrada)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Entrada."
      });
    });
  
};

/**
 * Busca todas las entradas y con los filtros correspondientes si se colocan
 * @param {titulo} 
 * @param {autor} 
 * @param {contenido} 
 * @returns {object}
 */
exports.findAll = (req, res) => {
    const titulo = req.query.titulo;
    const autor = req.query.autor;
    const contenido = req.query.contenido;
    var condition = {};
    titulo ? condition.titulo = { [Op.like]: `%${titulo}%` } : null;
    autor ? condition.autor = { [Op.like]: `%${autor}%` } : null;
    contenido ? condition.contenido = { [Op.like]: `%${contenido}%` } : null;

    if(!titulo && !autor && !contenido){
        condition == null;
    }
  
    Entrada.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving entradas."
        });
      });
};

/**
 * Muestra el detalle de una entrada
 * @param {id} 
 * @returns {object}
 */
exports.findOne = (req, res) => {
    const id = req.params.id;

    Entrada.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Entrada with id=" + id
        });
      });
};

/**
 * Actualiza la entrada
 * @param {id}
 * @param {titulo} 
 * @param {autor} 
 * @param {contenido} 
 * @returns {object}
 */
exports.update = (req, res) => {
    const id = req.params.id;

    Entrada.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Entrada was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Entrada with id=${id}. Maybe Entrada was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Entrada with id=" + id
        });
      });
};

/**
 * Elimina una entrada
 * @param {id} 
 * @returns {object}
 */
exports.delete = (req, res) => {
    const id = req.params.id;

    Entrada.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Entrada was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Entrada with id=${id}. Maybe Entrada was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Entrada with id=" + id
        });
      });
};

/**
 * Elimina todas las entradas
 * @returns {object}
 */
exports.deleteAll = (req, res) => {
    Entrada.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Entradas were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all entradas."
          });
        });
};

/**
 * Busca todas las entradas publicadas
 * @param {fecha_publicacion} 
 * @returns {object}
 */
exports.findAllPublished = (req, res) => {
    Entrada.findAll({ where: { fecha_publicacion: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving entradas."
      });
    });
};