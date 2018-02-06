angular.module('myApp').controller('loginController',loginController);

    loginController.$inject=['$state','$scope','loginService','$http','$cookies'];

    function loginController($state,$scope,loginService,$http,$cookies) {

        var ctrl = this ;
        $cookies.put('isLoggedIn',true);
        ctrl.isLoggedIn = true ;
        var userDetails;
        var expiry = new Date();
        expiry.setMinutes(expiry.getMinutes()+100);

       this.addUser = function(logDetails) {
            console.log(logDetails);

            userDetails = {
              username:logDetails.username,
              password:logDetails.password
            };

           loginService.postItem(userDetails).then(function(data) {
            console.log('data in console is ');
               console.log(data.data);

            localStorage.setItem('token', data.data.token);
            $cookies.put('token',data.data.token,{expires:expiry});

            if(data.data.success == true) {
                $state.go('allUser');
                $cookies.put('isLoggedIn',false);
                ctrl.isLoggedIn = false;
            }
            else
                ctrl.message = data.data.message ;



           });
       };

       this.goTo = function(state) {
          // console.log('HI')
           $state.go(state);
        };

        this.logOut = function(){
          ctrl.isLoggedIn = true;
          $cookies.remove('token');
            $state.go('info');

            };

    //    ctrl.isLoggedIn = $cookies.get('isLoggedIn');
    }