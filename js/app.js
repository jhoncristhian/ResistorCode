//variables
const lista = [["black", 0, 0,1],
				["brown",1,1,10],
				["red",2,2,100],
				["orange",3,3,1000],
				["yellow",4,4,10000],
				["green",5,5,100000],
				["blue",6,6,1000000],
				["purple",7,7,10000000],
				["gray",8,8,100000000],
				["white",9,9,1000000000],
				["golden", "5%"],
				["silver","10%"]
				];

const entrada = document.getElementById('entrada');
const enviar = document.getElementById('enviar');
const enviar2 = document.getElementById('enviar2');
const val1 = document.getElementById('val1');
const val2 = document.getElementById('val2');
const val3 = document.getElementById('val3');
const val4 = document.getElementById('val4');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
var salida = document.getElementById('salida');

//funciones
function conversorInputToColors(){
	//number to colors
	//console.log(entrada.value);
	
	var a1 = process(entrada.value, 1);
	var a2 = process(entrada.value, 2);
	var a3 = process(entrada.value, 3);
	drawProcess(a1,a2,a3);
	console.log("sal;"+a1+","+a2+","+a3);
	salida.innerHTML = entrada.value+" Ohm 5%";
}

//para conversorInputToColors
function process(num,opc){
	var ed=""+num;
	var res = "";
	if (ed.length>=1 && opc==1) {
		for(var i=0; lista.length > i;i++){
			if(parseInt(ed[0])==lista[i][1]){
				res=lista[i][0];
			}				
		}
		console.log("opc1:"+res);
	}else if (ed.length >= 2 && ed.length <11 && opc==2) {
		//max es 9900000000 min 1 incluso 0
		for(var i=0; lista.length > i;i++){
			if(parseInt(ed[1])==lista[i][1]){
				res=lista[i][0];
			}				
		}
		console.log("opc2:"+res);
		console.log(ed.length >= 3 && ed.length <11);
	}else if(ed.length >= 2 && ed.length <11 && opc == 3){
		//este metodo cuenta cuantas cifras hay despues de la posicion 1
		var con = ed.length -2;
		var sun = "1";
		for(var i =0; i < con; i++){
			sun+="0";
		}		
		sun = parseInt(sun);
		console.log(sun);
		for(var i=0; 10 > i;i++){
			if(sun==lista[i][3]){
				res=lista[i][0];
			}				
		}
		console.log("opc3:"+res);
	}
	return res;
}
//drAW
function drawProcess(col1, col2, col3) {
	//vamos a colorear respecto a las 3 bandas}
	c1.style.backgroundColor=""+col1;
	c2.style.backgroundColor=""+col2;
	c3.style.backgroundColor=""+col3;
	c4.style.backgroundColor="rgb(129 128 1)";
}

function conversorColorsToNumber(){
	//code colors to number
	var sal = parseInt(operar(val1.value, 1)+""+operar(val2.value,1))*operar(val3.value, 3);
	sal = sal + " Ohm "+operar(val4.value,4);
	salida.innerHTML = sal; 
	console.log(operar(val1.value, 1)+":"+operar(val2.value,1)+":"+operar(val3.value, 3)+":"+operar(val4.value,4));

	//draw resistor
	drawOperar();
}

//para conversorColorsToNumber
function operar(color, opc) {//string, num
	var res = "";
	if (opc==1) {//1er banda y 2ban
		for(var i=0; lista.length > i;i++){
			if(color==lista[i][0]){
				res=lista[i][1];
			}				
		}
	}else if(opc==3){//3ban
		for(var i=0; 10 > i;i++){
			if(color==lista[i][0]){
				res=lista[i][3];
			}		
		}
	}else if(opc==4){//4ban
		if(color==="golden"){
			res=lista[10][1];
		}else if(color==="silver"){
			res=lista[11][1];
		}	
	}
	return res;
}

function drawOperar(){
	c1.style.backgroundColor=""+val1.value;
	c2.style.backgroundColor=""+val2.value;
	c3.style.backgroundColor=""+val3.value;
	if (val4.value==="golden") {
		c4.style.backgroundColor="rgb(129 128 1)";
	}else{
		c4.style.backgroundColor="rgb(134 122 145)";
	}
	
}

//eventos
enviar.addEventListener("click", function(){
	conversorInputToColors();
});

enviar2.addEventListener("click", function(){
	conversorColorsToNumber();
});