var macheo = require('./mutator');

const http         = require('http'),
      fs           = require('fs'),
      path         = require('path'),
      env          = process.env;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/patients');

express = require('express');
bodyParser = require('body-parser');
Patient = require('./models/patients');
MutatedPatient = require('./models/mutatedPatients');

var patients;

Patient.find({}, function (err, res) {
        patients = res;
        patients.forEach(
        	function(element, index){
        		mutar(element, index, 30);
        	}
        );
        console.log("Mutated Correctly..");
    });


function mutar(item, index,cantMutantes)
{
	var i=0;
	for(i=0;i<cantMutantes;i++){
		var p=macheo.mutatePatient(item);	
		p.save();
	}
}