function hitungbutton() {
  var button = document.getElementById("hitungbutton");
  var squareside = document.getElementsByClassName("squareside");
    
    // Toggle class untuk mengubah gaya tombol
    button.classList.toggle("reset");
    
    // Mengubah teks tombol berdasarkan kondisi saat ini
    if (button.classList.contains("reset")) {
      button.innerHTML = "Reset";
      hitungLuas();
    } else {
      button.innerHTML = "Hitung";
      resetData();
    }
  }

  function hitungLuas() {
    var panjang = document.getElementsByClassName("squareside")[0].value;
    var lebar = document.getElementsByClassName("squareside")[1].value;
    panjang = parseFloat(panjang);
    lebar = parseFloat(lebar);
    var luas = panjang * lebar;

    // Gambar persegi panjang di canvas
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    // Bersihkan canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Gambar persegi panjang
    ctx.fillStyle = "#3498db";  // Warna persegi panjang
    ctx.fillRect(10, 10, 100, 100);

    ctx.fillStyle = "#000";  // Warna teks
    ctx.font = "14px Arial";
    ctx.fillText(panjang + " cm", 10, 130 / 1, 100);
    ctx.fillText(lebar + " cm", 120, 100/ 2);
    ctx.fillText("Luas: " + luas + " cm²", 10, 180 / 1, 100);

  
  }

  function resetData() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var squareside = document.getElementsByClassName("squareside");
    for (var i = 0; i < squareside.length; i++) {
      squareside[i].value = "";
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }