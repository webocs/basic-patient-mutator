'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;


/**
 * Patient Schema
 */
var mutated_patient_schema = new Schema({
  identity: String,
  name:
  {
  		given: String,
  		family: String
  },
  gender: String,
  birthdate: String,
  targetid:String
});


// El esquema solo no sirve. Luego, creamos el modelo
var MutatedPatient = mongoose.model('MutatedPatient',mutated_patient_schema);

module.exports = MutatedPatient;
