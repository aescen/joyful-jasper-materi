// Const in object
// Nilainya dapat di update, namun tidak boleh reassign dengan nilai baru
const car = {
    brand: 'civic',
    model: 'Type R',
    color: 'Black'
}
car.year = 2022
console.log(car);
car = 'avanza'
console.log(car);

// Method in object
const greeting = {
    welcome: function() {
        return 'Halo selamat datang'
    },
    goodBye: function() {
        return 'Sampai jumpa lagi'
    }
}
console.log(greeting.welcome());
console.log(greeting.goodBye());