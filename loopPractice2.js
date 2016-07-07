//Number 1

function getName(obj){
    return obj.name;
}
getName({name: 'Luisa', age: 25});


//number 2

getName({name: 'Luisa', age: 25});

function totalLetters(yourArray){
    var count = 0;
    for (var i = 0; i < yourArray.length; i++){
        count += yourArray[i].length;
    }
return count
}
totalLetters(['javascript','is','awesome'])
//totalLetters(['what', 'happened', 'to','my', 'function'])

//problem #3

function keyValue(argument1,argument2){
    var object ={};
    object[argument1] = argument2;
    return object

}
keyValue('city','Denver')


