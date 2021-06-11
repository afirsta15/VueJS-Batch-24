//soal 1


var daftarHewan = 
		['2. Komodo', 
		'5. Buaya', 
		'3. Cicak', 
		'4. Ular', 
		'1. Tokek'];

				
for (var i = 1; i < daftarHewan.length; i++)
    for (var j = 0; j < i; j++)
        if (daftarHewan[i] < daftarHewan[j]) {
          var x = daftarHewan[i];
          daftarHewan[i] = daftarHewan[j];
          daftarHewan[j] = x;
        }

console.log(daftarHewan);