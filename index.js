function hitungLuas(){
   sisi = document.getElementById("input_sisi").value;
   Luas = sisi * sisi;
   keliling = 4 * sisi;
   document.getElementById("output_luas").value =  Luas;
   document.getElementById("output_keliling").value =  keliling;
}

function hanyaAngka(evt) {
   var charCode = (evt.which) ? evt.which : event.keyCode
      if (charCode > 31 && (charCode < 48 || charCode > 57))

      return false;
   return true;
}