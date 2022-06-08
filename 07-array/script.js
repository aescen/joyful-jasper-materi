// let buah = "jeruk"

// let buah2 = "Apel"

// array
// wadah yg mampu menympan banyak data
let buah = ["jeruk", "apel", "semangka"]
// menambahkan data array
buah.push("rambutan")

// tampil secara keseluruhan
console.log(buah);

// tampil data satu per satu
console.log(buah[0]);
console.log(buah[1]);
console.log(buah[2]);
console.log(buah[3]);

// membuat fungsi untuk menampilkan data array
function printArray (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArray(buah)

let hewan = ["kucing", "hamster", "otter", "kelinci"]
printArray(hewan)


// menampilkan data array dari belakang
for (let i = hewan.length - 1; i >= 0; i--) {
  console.log(hewan[i]);
}



