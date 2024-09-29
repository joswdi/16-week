const Tiger = {
     model: '900 GT',
     color: 'black',
     price: 752000,
     capacity: 20,
     toString: function() {
         return `Це мотоцикл ${this.model} у ${this.color} кольорі, що має запас баку ${this.capacity} літрів та його ціна становить ${this.price}`;
     },
     compareToObject: function(car) {
          if (car.model === Tiger.model && car.color === Tiger.color && car.price === Tiger.price && car.capacity === Tiger.capacity) {
               console.log('They are different');
          } else {
               console.log('They are similar');
          }
     }
}
const Rocket = {
     model: '3 GT',
     color: 'black',
     price: 1457000,
     capacity: 18,
     toString: function() {
          return `Це мотоцикл ${this.model} у ${this.color} кольорі, що має запас баку ${this.capacity} літрів та його ціна становить ${this.price}`;
      }
}
const Scrambler = {
     model: '400 X',
     color: 'black',
     price: 348000,
     capacity: 13,
     toString: function() {
          return `Це мотоцикл ${this.model} у ${this.color} кольорі, що має запас баку ${this.capacity} літрів та його ціна становить ${this.price}`;
      }
}
console.log(Tiger.toString());
console.log(Rocket.toString());
console.log(Scrambler.toString());
console.log(Tiger.compareToObject(Rocket));