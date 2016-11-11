'use strict';



var mongoose = require('mongoose');
var Schema = mongoose.Schema;


/**
 * Patient Schema
 */
var patient_schema = new Schema({
  identity: String,
  name:
  {
  		given: String,
  		family: String
  },
  gender: String,
  birthdate: String
});


// El esquema solo no sirve. Luego, creamos el modelo
var Patient = mongoose.model('Patient',patient_schema);

module.exports = Patient;
