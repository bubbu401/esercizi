 function areaquadrato(l){
	return l * l;
	}
function arearettangolo(b,h){
	return b * h;
	}
function areacerchio(r){
	return r*r * 3.14;
}
module.exports = {
	arearettangolo:arearettangolo,
	areaquadrato: areaquadrato,
	areacerchio: areacerchio
	};
