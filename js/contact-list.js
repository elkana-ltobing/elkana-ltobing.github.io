var DaftarKontak = [];

var Program = {
  tambahKontak : function(nama, email, telepon){
    DaftarKontak.push({nama, email, telepon});
  },
  lihatSemua : function(){
    console.log(DaftarKontak);
  },
  cariKontak : function(nama){
    for (var i=0 ; i<DaftarKontak.length; i++){
    if (DaftarKontak[i].nama===nama) {
    console.log(DaftarKontak[i]);
  }
  }
  }
};

Program.tambahKontak("ruben", "ruben@gmail.com", "021777555");
Program.tambahKontak("gugel", "gugel@gmail.com", "021777888");
Program.tambahKontak("andi", "andi@gmail.com", "061445887");
