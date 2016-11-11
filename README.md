# Mutador de Pacientes
Primer versión del algoritmo de mutacion de pacientes.

# Resumen
> El algoritmo genera un "mutante de paciente" modificando los datos de un paciente recibido por parametro

Precondiciones:
- El algoritmo espera 1 parámetro (objeto json). El parametro es un paciente.
- El algoritmo no chequea errores o faltantes en dicho json. Supone que el objeto json esta completos y correcto.
- Debe incluirse el archivo mutator.js antes de ser invocada la función.

PostCondiciones:
- El resultado es un paciente mutado en formato json.

Los objetos JSON de pacientes tienen la siguiente estructura
----------
`myPatient = {
	identity: 12345674,
	name: {
		given: "a name",
		family: "a surname"
	},
	gender: "a gender",
	birthDate: 'a date as string'
};`


# Cómo usarlo y probarlo
- Desde la consola ejecutar git clone XXXXXXXXXX
- Luego en el directorio donde hemos bajado los archivos, ejecutamos npm install
- Ejecutamos el programa: node test.js
