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

//soal 2
var data = perkenalan
function perkenalan(nama, age, address, hobby)
	{
	console.log("Nama saya " + name_param + ", umur saya " + age_param + ", alamat saya di " + address_param + ", dan saya punya hobby yaitu " + hobby_param);
	}

var name : "John"
var age : "30" 
var address : "Jalan Pelesiran"
var hobby : "Gaming" 

var perkenalan = intorduce(name, age,adress, hobby)
console.log(perkenalan) 