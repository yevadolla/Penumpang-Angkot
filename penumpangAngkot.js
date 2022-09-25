var penumpang = []

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

var hapusPenumpang = function(nm, penumpang){
    if (penumpang.length == 0){
        console.log('Angkot masih kosong');
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++){
            if (penumpang[i] == nm){
                penumpang[i] = undefined;
                return penumpang;
            } else if (i == penumpang.length-1){
                console.log(nm+' tidak ada diangkot');
                return penumpang;
            }
        }
    }
}

//membuat object angkot
function Angkot (sopir, trayek, penumpang, kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPn){
        this.penumpang.push(namaPn);
        return this.penumpang;
    }
    this.penumpangTurun = function(namaPn, bayar){
        if(this.penumpang.length == 0){
            alert('angkot masih kosong');
            return false;
        }
        for (var i=0; i < this.penumpang.length; i++){
            if(this.penumpang[i]==namaPn){
                this.penumpang[i]=undefined;
                this.kas+=bayar;
                return this.penumpang;
            }
        }
    }
}

var angkot1 = new Angkot('Adnan',['Cicaheum', 'Cipabiru'], [], 0 );
var angkot2 = new Angkot('Adam', ['Pasar Cina', 'Baning'], [], 0);