
function switchTab(event, tabId) {
  const panes = document.querySelectorAll('.tab-pane');
  panes.forEach(pane => pane.classList.remove('active'));

  const btns = document.querySelectorAll('.tab-btn');
  btns.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', () => {
          navMenu.classList.toggle('active');
      });

      document.querySelectorAll('.nav-menu a').forEach(link => {
          link.addEventListener('click', () => {
              navMenu.classList.remove('active');
          });
      });
  }

  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
      quoteForm.addEventListener('submit', function(e) {
          e.preventDefault();

          const name = document.getElementById('formName').value.trim();
          const phone = document.getElementById('formPhone').value.trim();
          const floors = document.getElementById('formFloors').value;
          const liftType = document.getElementById('formLiftType').value;
          const city = document.getElementById('formCity').value.trim() || '-';

          const waMessage = `Halo Tim Penjualan IKAME Lift,%0A%0ASaya ingin mengajukan permintaan penawaran harga:%0A- *Nama Pemesan:* ${encodeURIComponent(name)}%0A- *No. WhatsApp:* ${encodeURIComponent(phone)}%0A- *Kebutuhan Lantai:* ${encodeURIComponent(floors)}%0A- *Tipe Lift:* ${encodeURIComponent(liftType)}%0A- *Kota / Lokasi Proyek:* ${encodeURIComponent(city)}%0A%0AMohon bantuan estimasi harga dan jadwal konsultasi. Terima kasih.`;

          const url = `https://wa.me/6281281192244?text=${waMessage}`;
          window.open(url, '_blank');
      });
  }
});


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; 

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal();

   const menuToggle = document.getElementById('menuToggle');
   const navMenu = document.getElementById('navMenu');
   
   if (menuToggle && navMenu) {
       menuToggle.addEventListener('click', function() {
           navMenu.classList.toggle('active');
       });
   }
   
   const quoteForm = document.getElementById('quoteForm');
   
   if (quoteForm) {
       quoteForm.addEventListener('submit', function(e) {
           e.preventDefault(); 
           
           let name = document.getElementById('formName').value;
           let phone = document.getElementById('formPhone').value;
           let floors = document.getElementById('formFloors').value;
           let liftType = document.getElementById('formLiftType').value;
           let city = document.getElementById('formCity').value;
   
           let message = `Halo IKAME, perkenalkan saya *${name}*.\n\nSaya ingin konsultasi estimasi biaya pemasangan Home Lift. Berikut adalah detail rencana proyek saya:\n\n* Tipe Lift: ${liftType}\n* Jumlah Lantai: ${floors}\n* Lokasi Proyek: ${city}\n* Nomor Kontak: ${phone}\n\nMohon panduan dan informasi lebih lanjut mengenai ukuran void dan harganya. Terima kasih.`;
           
           let waURL = `https://wa.me/6281281192244?text=${encodeURIComponent(message)}`;
           window.open(waURL, '_blank');
       });
   }