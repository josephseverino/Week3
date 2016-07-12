angular.module('MyFirstAngular',[]);

angular.module('MyFirstAngular')
  
   .controller('first', ['$scope', 
    
    firstCtrl
    ]);
    
    function firstCtrl($scope){
        console.log('Controller is working!')
        $scope.unorderedList = function(){
            
        }
        $scope.ButtonNoise = function(){
            console.log('here is a message in the console.log as requested')
            $scope.newGreeting = 'When you click me, I will create a heading for the body';
        }
        
        $scope.list = function() {
          $scope.listDevelopment 
        }
       
        $scope.showConfirm = function(){
          
         
            var r = confirm("Are you sure you to navigate there?");
            if (r == true) {
                window.location = this.href;
            } else{
                event.preventDefault();
              $scope.hide =false;
            }
                
        }
        
        
            
        
    }
  


