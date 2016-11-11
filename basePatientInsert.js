
const http         = require('http'),
      fs           = require('fs'),
      path         = require('path'),
      env          = process.env;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/patients');

express = require('express');
bodyParser = require('body-parser');
Patient = require('./models/patients');


var pacienteA = new Patient({
	identity: 14452515,
	name: {
		given: "Maximiliano",
		family: "Perez"
	},
	gender: "male",
	birthDate: '06-14-1962',
});

pacienteA.save();

var pacienteB = new Patient({
	identity: 31367546,
	name: {
		given: "Polio",
		family: "Marcos"
	},
	gender: "male",
	birthDate: '04-04-1986',
});

pacienteB.save();


var pacienteC = new Patient({
	identity: 30326752,
	name: {
		given: "Allain",
		family: "De renzo"
	},
	gender: "male",
	birthDate: '10-03-1984',
});

pacienteC.save();

var pacienteD = new Patient({
	identity: 32253897,
	name: {
		given: "Marcelo",
		family: "Andreani"
	},
	gender: "male",
	birthDate: '01-01-1987',
});

pacienteD.save();

var pacienteE = new Patient({
	identity: 302569851,
	name: {
		given: "Gonzalo",
		family: "Caranza"
	},
	gender: "male",
	birthDate: '01-01-1980',
});

pacienteE.save();
