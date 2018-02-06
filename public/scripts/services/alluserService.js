angular.module('myApp').factory('allUserService',allUserService);

allUserService.$inject = ['$http'];

function allUserService($http) {

    var service = {};
    var token = localStorage.getItem('token');

    service.getUsers = function(){
        return  $http({
            method: 'GET',
            url: 'http://localhost:8000/api/users',
            headers: {
                'x-access-token': token
            }
        }).then(function(res){
            return res;
        },function(err){
            return err;
        })
    };

    return service ;
    
}