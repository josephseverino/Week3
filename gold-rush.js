angular.module('Master',[])

angular.module('Master')
    .controller('minion',minion)
    console.log('no bugs here')
    function minion(){
       
        var mini = this;
         var array =[];
          mini.show=true
        mini.addMarker= function($event){
            console.log('mini.addMarker fired')
         
          
          array.push(
              {
                  x:$event.pageX,
                  y:$event.pageY,
                  show: true
              }
              
              );
            console.log(array)
        }
    }