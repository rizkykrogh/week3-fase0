function pasanganTerbesar(num) {
    // you can only write your code here!
    var pasanganTerbesarResult = 0
    var sisaAngka = num;

    while (sisaAngka > 0) {
        var pasanganAngka = sisaAngka % 100;
        if(pasanganAngka > pasanganTerbesarResult) {
            pasanganTerbesarResult = pasanganAngka;
        }
        var remainder = sisaAngka % 10;
        sisaAngka = (sisaAngka - remainder) / 10;
    }
    return pasanganTerbesarResult;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  