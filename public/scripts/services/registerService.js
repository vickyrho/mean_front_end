angular.module('myApp').factory('registerService',registerService);

    registerService.$inject=['$http'];

    function registerService ($http) {

        var service = {} ;

        service.postItem = function(regData){
            return $http.post('http://localhost:8000/users',regData).then(function(res) {
                return res;
            },function(res){
                return res;
            }
            )};

        return service ;

    }