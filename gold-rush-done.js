// angular.module('app',[])
// 	.controller('mapController',['$scope', function($scope){
// 		$scope.markers = [
// 		]

// 		$scope.clickHandler = function($event) {
// 			$scope.markers.push(
// 				{
// 					x: $event.pageX,
// 					y: $event.pageY,
// 					show: true,
// 					note: "",
// 					submitShow : true,
// 					hovered : false
// 				}
// 			);
// 		}
// 	}]);

	// create image on click (revel existing element)
	// 		at point clicked on x,y
	// 			for top, left at x,y

angular.module('app',[])
	.controller('mapController', mapController)
		
		
		function mapController(){
		    var markers = [];
		    var mCtrl = this;
		    
		    function clickHandler(){
		        mCtrl.markers.push(
		            )
		    }
		    
		}
		
		

		$scope.clickHandler = function($event) {
			$scope.markers.push(
				{
					x: $event.pageX,
					y: $event.pageY,
					show: true,
					note: "",
					submitShow : true,
					hovered : false
				}
			);
		
	}]);
