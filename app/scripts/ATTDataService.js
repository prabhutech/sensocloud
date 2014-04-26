//'use strict';

SensoCloud.services
.factory('ATTDataService', ['$http','$rootScope', function ($http, $rootScope) {


/* AT&T M2X Challenge */

    var SANDBOX_URL = 'http://api-m2x.att.com/v1/feeds/656173cfebcee6d19780cd6c969dc965';
    var M2XAPPKEY = '6c0c7e5d7ca2816922e791f767855738';
    //var FEEDID = '656173cfebcee6d19780cd6c969dc965';


    var getStreams = function () {
        $http.get(SANDBOX_URL+'/streams',{
          headers:{
            'X-M2X-KEY':M2XAPPKEY
          }
        }).then(function(res){
          console.log('Streams data is here... '+ angular.toJson(res.data,true));
          $rootScope.$broadcast('getStreams', angular.toJson(res.data,true));
        });
      };


    var getLocation = function () {
        $http.get(SANDBOX_URL+'/location',{
          headers:{
            'X-M2X-KEY':M2XAPPKEY
          }
        }).then(function(res){
          console.log('Location data is here... '+ angular.toJson(res.data,true));
        });
      };

    var updateLocation = function (data) {
        $http.put(SANDBOX_URL+'/location',{
          headers:{
            'X-M2X-KEY':M2XAPPKEY,
            'Content-Type': 'application/json'
          },
          data: data
        }).then(function(res){
          console.log('Location data is here... '+ angular.toJson(res.data,true));
        });
      };

    var getStreamByName = function (streamName) {
        $http.get(SANDBOX_URL+'/streams/' + streamName + '/values',{
          headers:{
            'X-M2X-KEY':M2XAPPKEY
          }
        }).then(function(res){
          console.log('getStreamByName is here... '+ angular.toJson(res.data,true));
          $rootScope.$broadcast('getStreamByName', angular.toJson(res.data,true));
        });
      };


    return {
        getLocation: getLocation,
        getStreams: getStreams,
        updateLocation: updateLocation,
        getStreamByName: getStreamByName
      };
  }]);


//curl -i http://api-m2x.att.com/v1/feeds/656173cfebcee6d19780cd6c969dc965/streams -H "X-M2X-KEY: 6c0c7e5d7ca2816922e791f767855738"
//curl -i http://api-m2x.att.com/v1/feeds/656173cfebcee6d19780cd6c969dc965/location -H "X-M2X-KEY: 6c0c7e5d7ca2816922e791f767855738"
//curl -i -X PUT http://api-m2x.att.com/v1/feeds/656173cfebcee6d19780cd6c969dc965/location -H "X-M2X-KEY: 6c0c7e5d7ca2816922e791f767855738" 
//-H "Content-Type: application/json" -d '{ "name": "Central Park", "latitude": "40.77177", "longitude": "-73.97352", "elevation": "0" }'
//curl -i "http://api-m2x.att.com/v1/feeds/656173cfebcee6d19780cd6c969dc965/streams/temperature/values?start=2013-12-01T12:00:00Z&end=2013-12-03T12:00:00Z&limit=3" 
//-H "X-M2X-KEY: 6c0c7e5d7ca2816922e791f767855738"


