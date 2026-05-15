let area= require ("./figure.js");
let ar = process.argv.slice(2);





if (ar.length < 1){
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
	console.log("area e");
	risultato =  area.arearettangolo(b,h);
}else if (poligono === "cerchio"){
	console.log("area e");
	risultato = area.areacerchio(b);
}else{

	console.log("poligono non riconosciuto");

	process.exit(1);
}


console.log(risultato);

