var penumpang = ['dola', undefined,'eva']

var tambahPenumpang = function(nm, penumpang){
    if (penumpang.length == 0){
        penumpang.push(nm);
        return penumpang;
    } else {
        for (var i=0; i<penumpang.length; i++){
            if (penumpang[i] == undefined){
                penumpang[i] = nm;
                return penumpang;
            } else if (penumpang[i] == nm){
                console.log(nm+' sudah ada diangkot');
                return penumpang;
            } else if (i == penumpang.length-1) {
                penumpang.push(nm);
                return penumpang;
            }
        }
    }
}
