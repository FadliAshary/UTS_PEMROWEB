alert("Halo, selamat datang di Website saya!");

let nama = prompt("Masukkan nama Anda:");

if (nama === "" || nama === null) {
    nama = "Pengunjung";
}

document.getElementById("ucapan").innerHTML = nama;
