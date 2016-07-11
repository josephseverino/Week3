angular.module('MyFirstAngular',[]);

angular.module('MyFirstAngular')
  
   .controller('first', ['$scope', 
    
    firstCtrl
    ]);
    
    function firstCtrl($scope){
        console.log('Controller is working!')
        
        $scope.ButtonNoise = function(){
            console.log('here is a message in the console.log as requested')
            $scope.newGreeting = 'When you click me, I will create a heading for the body';
        }
    }
