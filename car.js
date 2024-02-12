function Car(
    name,
    model,
    year,
    color
){
    this.name = name,
    this.model = model,
    this.year = year,
    this.color = color,

    {
        toggleColor: function(change) {
            this.color = change
        }
    }
};


const vehicle = new Car(
    'Toyota',
    'Camry',
    2019,
    'Black'
)

console.log(vehicle);