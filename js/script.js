function hitungbutton() {
    var button = document.getElementById("hitungbutton");
    
    // Toggle class untuk mengubah gaya tombol
    button.classList.toggle("reset");
    
    // Mengubah teks tombol berdasarkan kondisi saat ini
    if (button.classList.contains("reset")) {
      button.innerHTML = "Reset";
    } else {
      button.innerHTML = "Hitung";
    }
  }