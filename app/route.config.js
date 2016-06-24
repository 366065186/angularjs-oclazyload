"use strict"
app.config(["$stateProvider","$urlRouterProvider",routeFn]);
function routeFn($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/main");
    $stateProvider
        .state("main",{
            url:"/main",
            templateUrl:"views/main.html",
            controller:"mainCtrl",
            controllerAs:"main",
            resolve:{
                deps:["$ocLazyLoad",function($ocLazyLoad){
                    return $ocLazyLoad.load("controllers/main.js");
                }]
            }
        })
        .state("adminUser",{
            url:"/adminUser",
            templateUrl:"views/adminUser.html",
            controller:"adminUserCtrl",
            controllerAs:"adminUser",
            resolve:{
                deps:["$ocLazyLoad",function($ocLazyLoad){
                    return $ocLazyLoad.load("controllers/adminUser.js");
                }]
            }
        })
};