/**
 * Tuliskan ALGORITMA dan PSEUDOCODE Untuk menyelesaikan kasus berikut:
 *
 * Pada tahun 2020, SeaWorld ingin mengganti harga tiketnya. Saat ini, aquarium tersebut memiliki HARGA DASAR dari tiket masuk Rp 25.000.
 * Harga tiket masuk akan disesuaikan dengan umur dan status pelajar dari pengunjung tersebut.
 * Kamu harus membuat program yang akan menghitung harga tiket masuk dari tiap pengunjung. Di program ini nantinya, pengunjung akan menginput NAMA, TAHUN KELAHIRAN,
 * dan STATUS PELAJAR.
 * STATUS PELAJAR bisa diisi: true jika merupakan pelajar
 *                            false jika bukan merupakan pelajar
 *
 * -Umur < 2 tahun: HARGA TIKET GRATIS
 * -Umur 2-10:  Harga tiket seharga HARGA DASAR
 * -Umur 11-18:  Jika bukan pelajar, maka harga adalah harga dasar dikalikan 1.5
 *               Jika pelajar, maka harga adalah harga dasar dikalikan 1.25
 * -Umur 19 keatas: Jika bukan pelajar, harga adalah harga dasar dikalikan 2
 *                  Jika pelajar, maka harga adalah harga dasar dikalikan 1.5
 * -Jika umurnya diatas 120 tahun ATAU dia kelahiran dibawah tahun 1900, maka tampilkan 'Invalid Age' dan hentikan program.
 *
 * Setelah menghitung harga, maka tampilkan NAMA dan HARGA TIKET dari pengunjung tersebut.
 *
 *
 */

// Your algorithm/pseudocode here

/*
[ALGORITHMA]
1. Isi nama
2. Isi tahun kelahiran
3. Isi status pekerjaan
4. Isi harga dasar
5. Isi harga apabila kelahiran diatas tahun 2018 maka gratis
6. Jika tidak maka isi harga apabila kelahiran diatas tahun 2010 & dibawah tahun 2018 maka menggunakan harga dasar
7. Jika tidak maka isi harga apabila pelajar dan kelahiran diatas tahun 2002 & dibawah tahun 2010 maka menggunakan harga dasar x 1.25
8. Jika tidak maka isi harga apabila bukan pelajar dan kelahiran diatas tahun 2002 & dibawah tahun 2010 maka menggunakan harga dasar x 1.5
9. Jika tidak maka isi harga apabila pelajar dan kelahiran dibawah tahun 2002 & diatas tahun 1900 maka menggunakan harga dasar x 1.5
8. Jika tidak maka isi harga apabila bukan pelajar dan kelahiran dibawah 2002 & diatas tahun 1900 maka menggunakan harga dasar x 2
9. Jika kelahiran dibawah tahun 1900 maka umur tidak valid

[PSEUDOCODE]
1. INPUT name, year, 
2. SET job = true
    job = Pelajar
2. INPUT basicPrice as 'Rp. 25,000'
3. IF year > 2018
    THEN name + basicePrice * 0
   IF ELSE (2010 < year > 2018)
    THEN name + basicPrice
   IF ELSE (2002 < year > 2010) && (job = true)
    THEN name + basicPrice * 1.25
   IF ELSE (2002 < year > 2010) && (job = false)
    THEN name + basicPrice * 1.5
   IF ELSE (1900 < year > 2002) && (job = true)
    THEN name + basicPrice * 1.5
   IF ELSE (1900 < year > 2002) && (job = false)
    THEN name + basicPrice * 2
   ELSE (year < 1900)
    THEN year ==! valid
*/
