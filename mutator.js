
var mongoose = require('mongoose');
Patient = require('./models/patients');
MutatedPatient = require('./models/mutatedPatients');



function getRamdomCapitalLetter()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var letterNumber = 1;
    for( var i=0; i < letterNumber; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
function getRamdomLetter()
{
    var text = "";
    var possible = "qwertyuiopasdfghjklñzxcvbnm";
    var letterNumber = 1;
    for( var i=0; i < letterNumber; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
function getRamdomNumber()
{
    var text = "";
    var possible = "0123456789";
    var letterNumber = 1;
    for( var i=0; i < letterNumber; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function getRamdomInt(min,max){
    return Math.floor(Math.random() * (max-min))+min;
}

String.prototype.replaceAt=function(index, character) {
    		return this.substr(0, index) + character + this.substr(index+character.length);
		}



function testChance(){
    // Load Chance
    var Chance = require('chance');

    // Instantiate Chance so it can be used
    var chance = new Chance();

    // Use Chance here.
    var my_random_string = chance.string();
}

function mutateString(numberOfChar, originalStr){
    numberOfChar=Number(numberOfChar);
    var mutatedStr = originalStr;
    var lengthStr = originalStr.length;
    for(var i=0;i<numberOfChar;i++){
        var j = getRamdomInt(0,lengthStr);
        mutatedStr=mutatedStr.replaceAt(j,getRamdomLetter());
    }
    return mutatedStr;

}

function mutatePatient2(patient){
    
        var returnPatient = JSON.parse(JSON.stringify(patient));
        var mutatedIdentity =patient.identity.toString(); 
        var mutatedName = mutateString(getRamdomInt(1,2),patient.name.given.toString()) ;
        returnPatient.name.given=mutatedName;
        returnPatient.identity=mutatedIdentity.substring(0,mutatedIdentity.length-2)+getRamdomNumber();
        return returnPatient;
}


module.exports = { 
	mutatePatient: function (patient) {
		// Fuciones de mutacion
		var mutatedPatientJson=mutatePatient2(patient);		

		// Creacion del paciente mutado
		 var patientToSave = new MutatedPatient(
		 {
			  identity: mutatedPatientJson.identity,
			  name:
			  {
			  		given: mutatedPatientJson.name.given,
			  		family: mutatedPatientJson.name.family
			  },
			  gender: mutatedPatientJson.gender,
			  birthdate: mutatedPatientJson.birthdate,
			  targetid:patient._id
          });
		

		return patientToSave;
	}
};


