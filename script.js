
function cuba() {
    
    let sahkan = confirm('Adakah anda pasti?');
     if (sahkan) {
         return true;
     } else {
         alert('Arahan simpan dibatalkan');
         return false;
     }
}

function func() {
    let nama = prompt('Siapa nama?');
    document.getElementById('tajuk').innerText = 'Selamat Datang ' + nama;
}

function fokuss() {
    document.getElementById('mesej').innerText = 'Sila klik butang Simpan';
}

function blurr() {
    document.getElementById('mesej').innerText = 'Sila nyatakan keperluan anda';
}

