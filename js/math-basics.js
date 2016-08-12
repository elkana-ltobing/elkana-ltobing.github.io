// fungsi pangkat
function pangkatAngka(x,y){
var x = 2;
var y = 3;
var hasilPangkat = Math.pow(x,y);
return hasilPangkat;
}

// fungsi akar kuadrat
function akarKuadrat(z){
var z = 9;
var hasilKuadrat = Math.sqrt(z);
return hasilKuadrat;
}

// fungsi hipotenusa
function hipotenusa(a,b){
var a = 3;
var b = 4;
var hasilHipotenusa = Math.hypot(a, b);
return hasilHipotenusa + " cm";
}

// fungsi luas lingkaran
function luasLingkaran(r){
var r = 7
var luasLingkaran = Math.PI*(Math.pow(r,2));
return Math.round(luasLingkaran)+" cm2";
}