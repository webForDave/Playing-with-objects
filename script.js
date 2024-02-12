let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 1996,
    milleage: 0,

    dirve: function(distance) {
        this.milleage += distance
    }
};
console.log(car);

car.dirve(500);

console.log(car);