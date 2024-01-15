function hitungbutton() {
  var button = document.getElementById("hitungbutton");   
    button.classList.toggle("reset");
    
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
    if (panjang === "" || lebar === "") {
    // Tampilkan pesan menggunakan SweetAlert2
    var error = document.getElementById("error");
    error.style.display = "block";
    var squareside = document.getElementsByClassName("squareside");
    for (var i = 0; i < squareside.length; i++) {
      squareside[i].style.display = "none";
    }

    } else {
    // Gambar persegi panjang di canvas
    panjang = parseFloat(panjang);
    lebar = parseFloat(lebar);
    var luas = panjang * lebar;
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    canvas.style.display = "block";
    var squareside = document.getElementsByClassName("squareside");
    for (var i = 0; i < squareside.length; i++) {
      squareside[i].style.display = "none";
    }
    // Bersihkan canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Gambar persegi panjang
    ctx.fillStyle = "#3498db";  // Warna persegi panjang
    ctx.fillRect(10, 10, 100, 100);

    ctx.fillStyle = "#000";  // Warna teks
    ctx.font = "14px Arial";
    ctx.fillText("P x L", 45, 60 / 1);
    ctx.fillText(panjang + " cm", 10, 130 / 1, 100);
    ctx.fillText(lebar + " cm", 120, 100/ 2);
    ctx.fillText("Luas: " + luas + " cm²", 10, 180 / 1, 100);
    }

  }

  function resetData() {
    var canvas = document.getElementById("myCanvas");
    var error = document.getElementById("error");
    var squareside = document.getElementsByClassName("squareside");
    for (var i = 0; i < squareside.length; i++) {
      squareside[i].style.display = "";
      squareside[i].value = "";
    }
    canvas.style.display = "none";
    error.style.display = "none";
  }