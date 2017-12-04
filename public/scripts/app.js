
var states = [
    {
        name:'login',
        state:{
            url:'/login',
            templateUrl:'../views/login.html',
            data:{
                text:"LOGIN",
                visible:"true"
            }
        }
    },
    {
        name:'reg',
        state: {
            url: '/reg',
            templateUrl: '../views/reg.html',
            data:{
                text:"reg",
                visible:"true"
            }
        }
    },
    {

        name:'info',
        state: {
            url: '/info',
            templateUrl: '../views/info.html',
            data:{
                text:"INFO",
                visible:"true"
            }
        }
    }
];

var app = angular.module('myApp',['ui.router'])

        .config(function($stateProvider,$urlRouterProvider,$locationProvider){
            $urlRouterProvider.otherwise('/');

            angular.forEach(states,function(state){
                $stateProvider.state(state.name,state.state);
            });

            $locationProvider.html5Mode({
                enabled:true,
                required: false
            });

        });