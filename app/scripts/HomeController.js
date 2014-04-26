//'use strict';

SensoCloud.SensoCloudControllers
.controller('HomeController', ['$scope','ATTDataService',function($scope, ATTDataService) {
	console.log(ATTDataService);

      ATTDataService.getStreams();
      ATTDataService.getLocation();
      //ATTDataService.updateLocation('{ "name": "Redwood City", "latitude": "40.77177", "longitude": "-73.97352", "elevation": "0" }');
      ATTDataService.getStreamByName('temperature');


    // $scope.$on('getStreamByName', function(scope, data) {
    //     //console.dir(data);
    // });

    $scope.$on('getStreams', function(scope, data) {
    	console.dir(data);
        $scope.streams = data;
    });

}]);
