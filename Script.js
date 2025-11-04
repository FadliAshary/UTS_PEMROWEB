document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup-nama');
    const inputNama = document.getElementById('input-nama');
    const submitBtn = document.getElementById('submit-nama');
    const ucapanEl = document.getElementById('ucapan');
    
    function tampilkanUcapan(nama) {
        const jam = new Date().getHours();
        let ucapanWaktu;
        
        if (jam < 12) ucapanWaktu = 'Selamat Pagi';
        else if (jam < 18) ucapanWaktu = 'Selamat Siang';
        else ucapanWaktu = 'Selamat Malam';
        ucapanEl.textContent = `${ucapanWaktu}, ${nama}!`;
        return ucapanEl.textContent;
    }
    
    popup.style.display = 'flex';
    submitBtn.addEventListener('click', () => {
        let nama = inputNama.value.trim();
        if (!nama) nama = 'Pengunjung';
        popup.style.display = 'none';
        const sapaanLengkap = tampilkanUcapan(nama);
        alert(sapaanLengkap);
    });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; 
            if (pageYOffset >= sectionTop) current = section.getAttribute('id');
        });
        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === '#' + current) a.classList.add('active');
        });
    });
});