angular.module('myApp').controller('registerController',registerController);

registerController.$inject=['$scope','$http','registerService','$state'];

function registerController($scope,$http,registerService,$state) {



    this.display = function(userDetails){
        console.log('hello from controller');
        console.log(userDetails);

    registerService.postItem(userDetails).then(function(data){
        console.log(data);
        $state.go('login');
    });

    }



}