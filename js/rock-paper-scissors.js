// Buatlah fungsi pilihan aksi pengguna
var pengguna = 	prompt("Masukkan pilihan. tl=Telunjuk, jp=Jempol, kl=Kelingking", "tl");
var pilihanPengguna = pengguna.toUpperCase();
switch(pilihanPengguna){
	case "TL":
	alert("Pilihan anda - Telunjuk");
	break;
    
	case "JP":
	alert("Pilihan anda - Jempol");
	break;
        
	default:
	alert("Pilihan anda - Kelingking");
}

// Buatlah fungsi acak yang akan digunakan otomatis oleh lawan
var lawan = Math.random();
if (lawan<=0.33){
	lawan="Telunjuk"
    alert("Pilihan Komputer - Telunjuk");
}
else if(lawan<=0.66){
	lawan="Jempol"
    alert("Pilihan Komputer - Jempol");
}
else{
	lawan="Kelingking"
    alert("Pilihan Komputer - Kelingking");
}

// Buatlah fungsi bertarung
if (pilihanPengguna==="TL"){
	if (lawan==="Jempol"){
		alert("Kamu - Telunjuk, Komputer - Jempol");
		alert("Maaf, Komputer Menang!");
	}
	if (lawan==="Kelingking"){
		alert("Kamu - Telunjuk, Komputer - Kelingking");
		alert("Selamat, Kamu Menang!");
	}
	if (lawan==="Telunjuk"){
		alert("Kamu - Telunjuk, Komputer - Telunjuk");
		alert("Hasil Seri!!");
	}
}
if (pilihanPengguna==="JP"){
	if (lawan==="Telunjuk"){
		alert("Kamu - Jempol, Komputer - Telunjuk");
		alert("Selamat, Kamu Menang!");
	}
	if (lawan==="Kelingking"){
		alert("Kamu - Jempol, Komputer - Kelingking");
		alert("Maaf, Komputer Menang!");
	}
	if (lawan==="Jempol"){
		alert("Kamu - Jempol, Komputer - Jempol");
		alert("Hasil Seri!!");
	}
}
if (pilihanPengguna==="KL"){
	if (lawan==="Jempol"){
		alert("Kamu - Kelingking, Komputer - Jempol");
		alert("Selamat, Kamu Menang!");
	}
	if (lawan==="Telunjuk"){
		alert("Kamu - Kelingking, Komputer - Telunjuk");
		alert("Maaf, Komputer Menang!");
	}
	if (lawan==="Kelingking"){
		alert("Kamu - Kelingking, Komputer - Kelingking");
		alert("Hasil Seri!");
	}
}