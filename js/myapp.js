var bulan = prompt(
  "Masukkan 3 huruf awal bulan lahir kamu. cth: Aug / Oct /Dec", "May").toUpperCase();

var tanggal = prompt("Masukkan tanggal lahir kamu. cth: 3 atau 21", "7");

switch (bulan){
   case "JAN":
   if(tanggal<=19){
     alert('Zodiak kamu adalah "CAPRICORN"');
   }
   else if(tanggal<=31){
     alert('Zodiak kamu adalah "AQUARIUS"');
   }
   else {
     alert("keyword tanggal salah..");
   }
   break;

   case "FEB":
   if(tanggal<=18){
     alert('Zodiak kamu adalah "AQUARIUS"');
   }
   else if(tanggal<=29){
     alert('Zodiak kamu adalah "PISCES"');
   }
   else {
     alert("keyword tanggal salah..");
   }
    break;

   case "MAR":
   if(tanggal<=20){
     alert('Zodiak kamu adalah "PISCES"');
   }
   else if(tanggal<=31){
     alert('Zodiak kamu adalah "ARIES"');
   }
   else {
     alert("keyword tanggal salah..");
   }
   break;

   case "APR":
   if(tanggal<=19){
     alert('Zodiak kamu adalah "ARIES"');
   }
   else if(tanggal<=30){
     alert('Zodiak kamu adalah "TAURUS"');
   }
   else {
     alert("keyword tanggal salah..");
   }
   break;

   case "MAY":
   if(tanggal<=20){
     alert('Zodiak kamu adalah "TAURUS"');
   }
   else if(tanggal<=31){
     alert('Zodiak kamu adalah "GEMINI"');
   }
   else {
     alert("keyword tanggal salah..");
   }
   break;

   case "JUN":
   if(tanggal<=20){
     alert('Zodiak kamu adalah "GEMINI"');
   }
   else if(tanggal<=30){
     alert('Zodiak kamu adalah "CANCER"');
   }
   else {
     alert("keyword tanggal salah..");
   }
   break;

   case "JUL":
   if(tanggal<=22){
     alert('Zodiak kamu adalah "CANCER"');
   }
   else if(tanggal<=31){
     alert('Zodiak kamu adalah "LEO"');
   }
   else {
     alert("keyword tanggal salah..");
   }
   break;

   case "AUG":
   if(tanggal<=22){
     alert('Zodiak kamu adalah "LEO"');
   }
   else if(tanggal<=31){
     alert('Zodiak kamu adalah "VIRGO"');
   }
   else {
     alert("keyword tanggal salah..");
   }
   break;

   case "SEP":
   if(tanggal<=22){
     alert('Zodiak kamu adalah "VIRGO"');
   }
   else if(tanggal<=30){
     alert('Zodiak kamu adalah "LIBRA"');
   }
   else {
     alert("keyword tanggal salah..");
   }
   break;

   case "OCT":
   if(tanggal<=22){
     alert('Zodiak kamu adalah "LIBRA"');
   }
   else if(tanggal<=31){
     alert('Zodiak kamu adalah "SCORPIO"');
   }
   else {
     alert("keyword tanggal salah..");
   }
   break;

   case "NOV":
   if(tanggal<=21){
     alert('Zodiak kamu adalah "SCORPIO"');
   }
   else if(tanggal<=30){
     alert('Zodiak kamu adalah "SAGITARIUS"');
   }
   else {
     alert("keyword tanggal salah..");
   }
   break;

   case "DEC":
   if(tanggal<=21){
     alert('Zodiak kamu adalah "SAGITARIUS"');
   }
   else if(tanggal<=31){
     alert('Zodiak kamu adalah "CAPRICORN"');
   }
   else {
     alert("keyword tanggal salah..");
   }
   break;

   default:
   alert("keyword bulan salah..");
   }
