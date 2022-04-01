/*EJERCICIO EXTRA!
Se toma examen a 5 chicos que estan entre aprobar y desaprobar
se pide:
 - Apellido
 - Legajo ( entre 1000 y 10.000)
 - Division ( E, F , G ).
 - Nota (entre 1 y 10 incluidos)
Debemos informar
 - El promedio de notas entre todos los alumnos
 - El apellido del que tiene el legajo mas grande.
 - El legajo de la peor nota de la division E*/

function mostrar()
{
	var apellido;
	var legajo;
	var division;
	var nota;
	var contador=0;
	var legajoMasGrande;
	var peorNotaE;
	var legajoPeorNota;
	var apellidoLegajoMasGrande;
	var acumuladorNotas=0;
	var flag = true;
	var flag2 = true;

	while(contador < 2)
	{
		apellido = prompt("ingrese el apellido");

		legajo =parseInt(prompt("ingrese el legajo (entre 1000 y 10000)"))

		while(legajo <1000 || legajo > 9999)
		{
			legajo = parseInt(prompt("Error, vuelva a ingresar el legajo (entre 1000 y 10000"));
		}
		division = prompt("Ingrese la division(E,F,G)").toUpperCase();

		while(!(division == "E" || division == "F" || division == "G"))
		{
			division = prompt("Error,ingrese su division").toUpperCase();
		}

		
		nota = parseInt(prompt("Ingrese la nota(1-10)"));

		while(nota < 1 || nota > 10)
		{
			nota = parseInt(prompt("Error, vuelva a ingresar la nota (1-10)"));
		}

		//inicio acumulador

		acumuladorNotas = acumuladorNotas + nota;

		if(legajoMasGrande < legajo || flag == true)
		{
			legajoMasGrande = legajo;
			flag = false;
			apellidoLegajoMasGrande = apellido;
		}

		if(division == "E" && peorNotaE > nota || flag2 == true)
		{
			peorNotaE = nota;
			legajoPeorNota = legajo;
			flag2 = false;
		}
		//sumo el contador
		contador++
		contador = parseInt(contador);

	}


	document.write("el promedio de notas es de: " + (acumuladorNotas / contador) + ".<br>");

	document.write("El apellido con el legajo mas grande es " + apellidoLegajoMasGrande + ".<br>")
	document.write("El legajo de la peor nota de la div. E es " + legajoPeorNota );















}
	


















































































































	/*var apellido;
	var tipoReserva;
	var cantidadPersonas;
	var temporada;
	var acumuladorPersonasFamilia;
	var contadorFamiliares;
	var parejasOtoño=0;
	var parejasVerano=0;
	var parejasInvierno=0;
	var parejasPrimavera=0;
	var acumuladorOtoño;
	var respuesta = "si";

	while(respuesta == "si")
	{
		apellido = prompt ("ingrese el apellido");

		tipoReserva = prompt("ingrese el tipo de reserva: individual, parejas o familiar").toLowerCase();

		while(!(tipoReserva == "individual" || tipoReserva == "parejas" || tipoReserva == "familiar"))
		{
			tipoReserva = prompt ("Error, ingrese el tipo de reserva: individual, parejas o familiar").toLowerCase();
		}

		cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas"));

		while(cantidadPersonas = 0 || cantidadPersonas > 10)
		{
			cantidadPersonas = parseInt(prompt("Error, vuelva a ingresar la cantidad de personas hasta un maximo de 10"));

		}

		temporada = prompt("Ingrese la temporada de la reserva: Otoño, Invierno, primavera o verano").toLowerCase();

		while(!(temporada == "otoño" || temporada == "invierno" || temporada == "primavera" || temporada == "verano")
		{
			temporada = prompt("Error , reingrese la temporada: Otoño, Invierno, primavera o verano").toLowerCase();
		}


		if(tipoReserva== "parejas")
		{
			switch(temporada)
			{
				case "otoño":
				parejasOtoño++
				break

				case "verano":
				parejasVerano++;
				break
				case "invierno":
				parejasInvierno++
				break
				case "primavera":
				parejasPrimavera++
				break
			}
		}

		if(tipoReserva == "familiar")
		{

		}



	}











}*/




















/*
Gabriel Matias Veles Div.E;
E/S Ejercicio 1;
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
/*Le cambie el texto a "correctamente" porque ya vino resuelto;
*/