alert("Selamat Datang, Selamat Bergatcha Ria !");

function display() {
    let random = [Math.floor(Math.random()*100)]
    document.getElementById('output').innerText= random
        var a = document.getElementById("nama_lengkap").value;
        var b = document.getElementById("citacita").value;

        var tabel = document.getElementById("display");
        var row = tabel.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        if (!a || !b) {
            alert("Di isi Semua ya !!");
            return
        }

        cell1.innerHTML = a; cell2.innerHTML = b; cell3.innerHTML = random


        alert("Berhasil, Semoga Sukses ya!");


}