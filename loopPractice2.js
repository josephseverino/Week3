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


//problem # 4
function negativeIndex(myArray, num){
    var pick = (myArray.length)+num;
    return myArray[pick];

}
negativeIndex(['a','b','c','d','e'],-2)
negativeIndex(['jerry','sarah','sally'],-1)

//problem #5

function removeM(str){
   
        
        
         str = str.replace(/m/gi,'');
         return str
        
}

removeM('mfamily')

// problem #6

function printObject(yourObject){
     var keyArray = Object.keys(yourObject);
 
    for (var i = 0; i<keyArray.length ; i++){
      
       console.log(keyArray[i] + " is "+ yourObject[keyArray[i]]);
    }

}
printObject({a:1,b:2,c:3,d:4})

//problem #7

function vowels(inputString){
var Array =[];
for (var i = 0; i < inputString.length; i++){

    if(inputString[i] === "a" || 
       inputString[i] === "e" ||
       inputString[i] === "i" ||
       inputString[i] === "o" ||
       inputString[i] === "u"){
        Array.push(inputString[i]);
    }
}
    return Array
}
vowels('hello from a long way away')

//problem #8

function twins(Array){
    for(var i = 0; i < Array.length; i = i +2){
        if(Array[i] != Array[i+1]){
            return "False"
        }
            
        
    }
    return "true"
}

twins(['a','p','b','b','c','c'])

//problem #9

function or(arrBoolean){
    for (var i = 0; i < arrBoolean.length; i++){
        if(arrBoolean[i] === true){
            return "true"
        }
    


    }
    return "False"
}

//or([false, false, true, false]) 
//or([false, false, false]) 
or([]) 

//problem #10

function unique(arrOfStr){
    var newArrOfStr = [];
    for(var i = 0; i < arrOfStr.length; i++){
        if (arrOfStr.indexOf(arrOfStr[i]) === i){
            newArrOfStr.push(arrOfStr[i])
        }
    }
return newArrOfStr
} 

//unique(['a', 'b', 'a', 'c', 'd', 'd']) 
unique(['aodd', 'a', 'maria', 'avery','a'])
