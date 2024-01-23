module.exports = (sequelize, Sequelize) => {
    const Entrada = sequelize.define("entradas", {
        titulo: {
            type: Sequelize.STRING
        },
        autor: {
            type: Sequelize.STRING
        },
        contenido: {
            type: Sequelize.STRING
        },
        fecha_publicacion: {
            type: Sequelize.BOOLEAN
        }
    });
  
    return Entrada;
  };