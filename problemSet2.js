//Problem # 1
function firstReverse(str){
    var array = str.split("");
  
    var newArray = [];
    for (var i = array.length-1; i>= 0; i--){
            newArray.push(array[i])
    }
    newArray = newArray.join("")
    return newArray
}

firstReverse('hello world')

//Problem # 2
function swapCase(str){
    var array = str.split("");
  
    var newArray = [];
    for (var i = 0; i < array.length ; i++){
            if (array[i] === " "){
                newArray.push(array[i])
            }else if (array[i] === array[i].toUpperCase()){
                newArray.push(array[i].toLowerCase())
            }else {
                newArray.push(array[i].toUpperCase())
            }
    }
 
 newArray = newArray.join("")
 return newArray   
}

swapCase('HeLLo  Y HH WOrld')