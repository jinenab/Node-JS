var counter = function(arry){
    return 'The number of '+arry.length + '\n done!';
};
// Adding more modules
var adder = function(a,b){
    return 'On adding the two number it gives'+(a+b);
}

var pi = 3.1535;

// module.exports is the important part, it makes the counter available for other modules!
//  module.exports.counter = counter ;
//  module.exports.adder = adder;
//  module.exports.pi = pi;
 module.exports = {
     counter:counter,
     adder:adder,
     pi:pi
 }