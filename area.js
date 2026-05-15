let area= require ("./figure.js");
let ar = process.argv.slice(2);





if (ar.length < 1 || ar.length > 3){
console.log("per calcolare l area: <nome poligono> <numero> <numero>");
console.log("es:quadrato 5 oppure rettangolo 1 5");
process.exit(1);
}

let poligono = (ar [0])
let b = Number (ar [1]);
let h =Number (ar [2]);

let risultato ;
if (poligono ==="quadrato"){
	console.log("area e");
	risultato = area.areaquadrato(b);
}else if (poligono === "rettangolo"){
	if (ar.length !== 3){
	console.log("per il rettangolo e necessario inserire due parametri base e altezza");
	process.exit(1);
	}else{
	console.log("area e");
	risultato =  area.arearettangolo(b,h);
	}
}else if (poligono === "cerchio"){
	console.log("area e");
	risultato = area.areacerchio(b);
}else{

	console.log("poligono non riconosciuto");

	process.exit(1);
}


console.log(risultato);

