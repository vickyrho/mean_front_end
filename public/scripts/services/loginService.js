angular.module('myApp').factory('loginService',loginService);

loginService.$inject=['$http'];

function loginService ($http) {

    var service = {} ;

    service.postItem = function(logData){
        return $http.post('http://localhost:8000/api/authenticate',logData).then(function(res) {
                return res;
            },function(res){
                return res;
            }
        )};

    return service ;

}