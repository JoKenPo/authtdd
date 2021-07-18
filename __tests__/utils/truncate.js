const { sequelize } = require('../../src/app/models');

module.exports = () => {
  // Retorna uma Promise para garantir que só continue depois de terminar o truncate
  return Promise.all(Object.keys(sequelize.models).map(key => {
    return sequelize.models[key].destroy({ truncate: true, force: true })
  }));
};