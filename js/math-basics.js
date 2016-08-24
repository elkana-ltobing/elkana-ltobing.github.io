// fungsi pangkat
function pangkatAngka(x,y) {
  return Math.pow(x,y);
}
pangkatAngka(2,3); // 8

// fungsi akar kuadrat
function akarKuadrat(z){
  return Math.sqrt(z);
}
akarKuadrat(9); // 3

// fungsi hipotenusa
function hipotenusa(a,b){
return Math.hypot(a, b) + " cm";
}
hipotenusa(3,4); // 5cm

// fungsi luas lingkaran
function luasLingkaran(r){
return Math.round(Math.PI*(Math.pow(r,2)))+" cm2";
}
luasLingkaran(7); // 154 cm2
