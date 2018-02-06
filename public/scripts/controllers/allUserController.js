angular.module('myApp').controller('allUserController',allUserController);

allUserController.$inject=['$state','$scope','$http','allUserService','$cookies'];

function allUserController($state,$scope,$http,allUserService,$cookies) {


    var ctrl = this;
    var token = $cookies.get('token');


        //console.log('hello from all user');

        $http({
            method: 'GET',
            url: 'http://localhost:8000/api/users',
            headers: {
                'x-access-token': token
            }
        }).then(function (res) {
            ctrl.userDetails = res.data;
            console.log(ctrl.userDetails);
        }, function (err) {
            console.log(err);
        });

        this.allUsers = function(){
        $http({
            method: 'GET',
            url: 'http://localhost:8000/api/users',
            headers: {
                'x-access-token': token
            }
        }).then(function (res) {
            ctrl.userDetails = res.data;
            console.log(ctrl.userDetails);
        }, function (err) {
            console.log(err);
        });
    }

    this.addUser = function(userDetails){
        console.log(userDetails);

        $http({
            method: 'POST',
            url: 'http://localhost:8000/api/users',
            headers: {
                'x-access-token': token
            },
            data: {
                name:userDetails.name,
                username:userDetails.username,
                password:userDetails.password
            }

        }).then(function(res) {
                return res;
            },function(res){
                return res;
            }
        )
    };

    this.edit = function(id){
        console.log(id);

        $http({
            method:'GET',
            url:'http://localhost:8000/api/users/'+id,
            headers:{
                'x-access-token' : token
            }
        }).then(function(response){
                ctrl.contact = response.data;
                console.log(ctrl.contact);
        })

    };


    this.removeUser = function(id){
        console.log(id);

        $http({
            method:'DELETE',
            url:'http://localhost:8000/api/users/'+id,
            headers:{
                'x-access-token' : token
            }
        }).then(function(res){
            return res;
        },function(err){
            return err ;
        });

    };

    this.updateUser = function(id){

            console.log(ctrl.contact);

            $http({
                method:'PUT',
                url:'http://localhost:8000/api/users/'+id,
                headers:{
                    'x-access-token': token
                },
                    data: {
                        name:ctrl.contact.name,
                        username:ctrl.contact.username,
                        password:ctrl.contact.password
                    }
            }).then(function(res){
                console.log(res);
            })



    };


}



