// // Cara membuat object
let namaObject = { key: 'value' }

// // Contoh object
let person = {
    nama: 'Dila',
    umur: 22,
    hoby: 'journaling',
    'makanan kesukaan': 'tempe'
}
console.log(person);
// // cara mengakses properti :
// // 1. Dot notation
console.log(person.umur + ' ' + 'dot notation');
console.log(person.hoby);

// // 2.Bracket notation
console.log(person['umur'] + ' ' + 'bracket notation');
console.log(person['makanan kesukaan']);