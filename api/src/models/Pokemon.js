const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
     type: DataTypes.UUID,
     dafaultValue: DataTypes.UUIDV4,
     primaryKey: true,
     allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vida:{
      type:DataTypes.INTEGER,  //hp
      allowNull: false
    },
    Ataque:{
      type:DataTypes.INTEGER,  //attack
      allowNull: false
    },
    Defensa:{
      type:DataTypes.INTEGER, //defense
      allowNull: false
    },
    Velocidad:{
      type:DataTypes.INTEGER,  //speed
      allowNull: false
    },
    Altura:{
      type:DataTypes.INTEGER, //height
      allowNull: false
    },
    Peso:{
      type: DataTypes.INTEGER, //weight
      allowNull:false
    },
    img:{
      type:DataTypes.STRING,
      allowNull:false
    }
  },{timestamps: false});
};
