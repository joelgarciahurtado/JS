/* FUNCIONS COMUNS */

function print(sortida){  // Funció per visualitzar la sortida
	var s = document.getElementById("sortida"); // Objecte #sortida
		s.innerHTML += sortida; // Afegeix una nova línia de sortida
	
	if(sortida == "") s.innerHTML = ""; // Esborra la sortida	
}


/* FUNCIONS PER FACTORIAL */

function factor(nombre){ // Funció recursiva per obtenir el factorial
   
    if (nombre < 2)
		return 1;
	else
		return nombre * factor(nombre - 1); // Es crida a si mateixa
}

function factorial(){ //Funció pel visualitzar el text del factorial

	var missatge = `
					<h1>FACTORIAL</h2>
					<form name='form'>Entra un nombre enter:
					<input name='nombre' type='number' maxlength='3' size='3' autofocus='autofocus' />
					<input type='button' onclick="print('El factorial de ' + form.nombre.value +' és ' + factor(form.nombre.value) + '<br />');" value='factorial' />
					</form><br />`

	print(""); // Esborra la sortida
    print(missatge); // Utilitza la funció print() per visualitzar la sortida

}


/* FUNCIONS PER ALEATORI */

function aleatori(nombre, nombre2){
	return Math.floor(Math.random() * (nombre2 - nombre+1) ) + parseInt(nombre);
}

function entradaaleatori(){



	var missatge = `
						<h1>ALEATORI</h2>
						<form name='form'>Escolleix entre que nombre i que nombre vols generar un nombre aleatori:
						<input name='nombre' type='number' maxlength='3' size='3' autofocus='autofocus' />
						<input name='nombre2' type='number' maxlength='3' size='3' autofocus='autofocus' />
						<input type='button' onclick="print('El nombre aleatori és ' + aleatori(form.nombre.value , form.nombre2.value) + '<br />');" value='aleatori' />
						</form><br />`

	
	print(""); // Esborra la sortida
    print(missatge);

}


/* FUNCIONS PER VOCALS */

function vocals(frase, vocal){


	frase = frase.toLowerCase();

	if (frase.length > 30) {
	alert("frase massa llarga, introdueix una frase de fins a 30 carácters.");
} else {

	var frasecanviada = "<h3>"+frase+"</h3>"+"<p>"+frase.replace(/[áàaéèeíìióòoúùu]/g,vocal);
}


function entradavocals(){
		var missatge = `
						<h1>ALEATORI</h2>
						<form name='form'>Introdueix una frase i després la vocal que vols que substitueixi totes les vocals de la frase:
						<input name='frase' type='text' autofocus='autofocus' />
						<input name='vocal' type='text' maxlength='1' size='3' autofocus='autofocus' />
						<input type='button' onclick="print(frasecanviada+ '<br />');" value='vocals' />
						</form><br />`

	
	print(""); // Esborra la sortida
    print(missatge);

}



/* FUNCIONS PER PRIMERS */




/* FUNCIONS PER INREVES */
