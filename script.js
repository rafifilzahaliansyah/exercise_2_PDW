function kirimdata() {
    var nama = document.getElementById("nama").value;
    var nik = document.getElementById("nik").value;
    var tanggal = document.getElementById("tanggal").value;
    var dari = document.getElementById("mySelect").value;
    var Vaksin = document.querySelector('input[name="peminatan"]:checked').value;
    var alamat = document.getElementById("alamat").value;
    var Saran = document.getElementById("saran").value;
  
    alert("Nama: " + nama +
          "\nNIk: " + nik +
          "\nDari: " + Vaksin +
          "\nAlamat: " + alamat +
          "\nAngkatan: " + dari +
          "\nTanggal: " + tanggal +
          "\nSaran : " + Saran);
  }
  