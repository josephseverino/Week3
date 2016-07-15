angular.module('weddingBells',[])

angular.module('weddingBells')
    .controller('ballAndChain',
        Eternity)
        
   Eternity.$inject =['divorceFactory']    
        
        function Eternity(diverceFactory){
         var love =this;
         
         love.averageAgeValue = divorceFactory.avarageAge()
         
         love.info = divorceFactory.info 
        }
        
        
        angular.module('weddingBells')
            .factory('divorceFactory', Splitsies)
            
            
            function Splitsies(){
                var data = [{
        // couple 1
        year: 2013,
        spouses: [{
            age: 23,
            occupation: 'Dentist',
            education: 'DDS',
            gender: 'female'
        },{
            age: 43,
            occupation: 'Plumber',
            education: 'Highschool',
            gender: 'male'
        }],
        duration: 2
    },{ // couple 2
        year: 2000,
        spouses: [{
            age: 32,
            occupation: 'Burger Flipper Engineer',
            education: 'RefactorU',
            gender: 'male'
        },{
            age: 35,
            occupation: 'WNBA',
            education: 'G.E.D.',
            gender: 'female'
        }],
        duration: 5
    },{ // couple 3
        year: 1865,
        spouses: [{
            age: 20,
            occupation: 'Buggysmith',
            education: 'None',
            gender: 'male'
        },{
            age: 15,
            occupation: 'Doll Dresser',
            education: 'Mom',
            gender: 'female'
        }],
        duration: 10
    }]
    
    
    
    return {
        info:data,
        averageAge: function(){
            var initialValue =0;
            var sum = data.reduce(function(preVal,curVal){
                return preVal +curVal.spouses.age
            },initalValue)
            
            return sum/data.length
        }
    }
    
            }