angular.module('songkangApp').
config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('hinge01', {
            url : '/hinge01',
            templateUrl : 'app/partials/hinge/hinge01.html',
            controller : 'hinge01'
        })
        .state('hinge02', {
            url : '/hinge02',
            templateUrl : 'app/partials/hinge/hinge02.html',
            controller : 'hinge02'
        })
        .state('hinge03', {
            url : '/hinge03',
            templateUrl : 'app/partials/hinge/hinge03.html',
            controller : 'hinge03'
        })
        .state('hinge04', {
            url : '/hinge04',
            templateUrl : 'app/partials/hinge/hinge04.html',
            controller : 'hinge04'
        })
        .state('hinge05', {
            url : '/hinge05',
            templateUrl : 'app/partials/hinge/hinge05.html',
            controller : 'hinge05'
        })
        .state('hinge06', {
            url : '/hinge06',
            templateUrl : 'app/partials/hinge/hinge06.html',
            controller : 'hinge01'
        })
        .state('hinge07', {
            url : '/hinge07',
            templateUrl : 'app/partials/hinge/hinge07.html',
            controller : 'hinge07'
        })
        .state('hinge08', {
            url : '/hinge08',
            templateUrl : 'app/partials/hinge/hinge08.html',
            controller : 'hinge08'
        })
        .state('hinge09', {
            url : '/hinge09',
            templateUrl : 'app/partials/hinge/hinge09.html',
            controller : 'hinge09'
        })
        .state('hinge10', {
            url : '/hinge10',
            templateUrl : 'app/partials/hinge/hinge10.html',
            controller : 'hinge10'
        })
});

