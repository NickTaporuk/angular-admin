/**
 * Created by nicktaporuk on 24.07.14.
 */
/*


    var getDevApp = angular.module("getDevApp",['ngRoute'   ]);
//main config
    getDevApp.config(function($routeProvider,$locationProvider){
        $routeProvider
            .when("/",{
                controller: EventListCtrl,
                templateUrl:'view/list.html'
            })
            .otherwise({
                redirectTo:"/"
            });
        $locationProvider.html5Mode(false);
    });
//main servises
    getDevApp.service('peopleCalc',function(){
        return {
            calcPeople : function(val){
                if(val < 5){
                    return  "Мало";
                }
                else if(val < 10){
                    return "Порядком";
                }
            }
        };
    });
//main Directives
    getDevApp.directive("ngName",function(){
        return {
            link : function ($scope,element){
                element[0].innerHTML = "<b>Hello GetDev</b>"
            }
        };
    });
//main Controllers
    getDevApp.controller('MainCtrl',function($scope,$http,peopleCalc){
//    var MainCtrl = function($scope){
    $scope.userGroup = {
        name : 'GetDev.net',
        events : [
            {name: "angular",descr:"Лекция об Angular"},
            {name: "VS2013",descr:"Лекция об VS2013"}
        ]
    };
    //
    $scope.peopleHere = 0;
    $scope.$watch('peopleHere',function(val){
            $scope.peopleDescription = peopleCalc.calcPeople(val)
    });
    $scope.notify = function(description){
        alert(description);
    };

//};
});*/
//angular.module('app.service',['ngRoute']);
//angular.module('app',['app.service']);
var app = angular.module('app',['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/login',{
                    templateUrl: 'view/login.html',
                    controller : 'LoginController'
                });
    $routeProvider.when('/home',{
        templateUrl: 'view/home.html',
        controller : 'HomeController'
    });
    $routeProvider.otherwise({redirectTo:'/login'});
});

app.controller('LoginController',function($location,$scope){
    $scope.login = 'user';
    $scope.credential = {login:'',password:''};
    //
    $scope.login = function(){
//        console.log($scope.credential);
        if($scope.credential.login==="admin"){
            $location.path('home');
        }
    };
});
/**
 *
 * */
app.controller('HomeController',['$location','$scope',function(loc,s){
    s.loguot = function(){
            loc.path('login');
    };
}]);

/**
 *
 */
app.directive('copyright',function(){
    return {
        restrict : 'AE',
        template : '(c) 2014 Nick Taporuk'
    }
});
/**
 *
 */
/*app.directive('draggable',function($document){
    return function(scope,element,attr){
           var startX = 0 , startY = 0, x = 0 , y = 0;
        element.css({
            position : 'relative',
            border : '1px solid red',
            backgroundColor :'lightgrey',
            cursor:'pointer'
        });
        element.on('mousedown',function(event){
            event.preventDefault();
            startX = event.pageX - startX;
            startY = event.pageY - startY;
            $document.on('mousemove',mousemove);
            $document.on('mouseup',mouseup);

        });

        function mousemove(event){
            y = event.pageY - y;
            x = event.pageX - x;
            element.css({
                top : y+'px',
                left: x+'px'
            });
        }

        function mouseup(){
            $document.unbind('mousemove',mousemove);
            $document.unbind('mouseup',mouseup);
        }
    }
});*/
