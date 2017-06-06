// Create an object called Multiplier with two methods: multiply and getCurrentValue. multiply should initially return the number supplied * 1 and from then on whatever the current value is times the number supplied.getCurrentValue should return the last answer returned from multiply.
var multiplier = {
  lastvalue: 1,

  multiply: function(a) {
    // console.log("==multiply==");
    console.log(a);
    console.log(typeof a);
    var b = a * this.lastvalue;
    console.log(this.lastvalue);
    this.lastvalue = b;
    console.log(b);

  },
}
multiplier.multiply(1);
