var Chance = require('chance');
var chance = new Chance();

var roll5 = function() {
    return chance.integer({ min: 1, max: 5 })
    
}
var roll4 = function() {
    return chance.integer({ min: 1, max: 4 })
    
}
var roll3 = function() {
    return chance.integer({ min: 1, max: 3 })
    
}
var roll2 = function() {
    return chance.integer({ min: 1, max: 2 })
    
}






var pull5 = function() {

    var result = roll5();

    if(result == 1 ) {
        return '1 ★ หนึ่งดาวชนะ! '
    }

    if(result == 2) {
        return '2 ★ สองดาวชนะ!'
    }

    if(result == 3) {
        return '3 ★ สามดาวชนะ!'
    }

    if(result ==  4 ) {
        return '4 ★ สี่ดาวชนะ!'
    }

    if(result == 5) {
        return '5 ★ ห้าดาวชนะ'
    }

   
}


var pull4 = function() {

    var result = roll4();

    if(result == 1 ) {
        return '1 ★ หนึ่งดาวชนะ! '
    }

    if(result == 2) {
        return '2 ★ สองดาวชนะ!'
    }

    if(result == 3) {
        return '3 ★ สามดาวชนะ!'
    }

    if(result ==  4 ) {
        return '4 ★ สี่ดาวชนะ!'
    }

 
   
}


var pull3 = function() {

    var result = roll3();

    if(result == 1 ) {
        return '1 ★ หนึ่งดาวชนะ! '
    }

    if(result == 2) {
        return '2 ★ สองดาวชนะ!'
    }

    if(result == 3) {

       
        return '3 ★ สามดาวชนะ!'
    }

   
}

var pull2 = function() {

    var result = roll2();

    if(result == 1 ) {
        return '1 ★ หนึ่งดาวชนะ! '
    }

    if(result == 2) {
       
        return '2 ★ สองดาวชนะ!'
    }


   
}
module.exports.roll5 = roll5
module.exports.pull5 = pull5

module.exports.roll4 = roll4
module.exports.pull4 = pull4

module.exports.roll3 = roll3
module.exports.pull3 = pull3

module.exports.roll2 = roll2
module.exports.pull2 = pull2
