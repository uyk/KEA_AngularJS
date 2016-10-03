angular.module('songkangApp').
config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('bearingSlide01', {
            url : '/bearingSlide01',
            templateUrl : 'app/partials/bearingSlide/bearingSlide01.html',
            controller : 'bearingSlideController01'
         })
        .state('bearingSlide02', {
            url : '/bearingSlide02',
            templateUrl : 'app/partials/bearingSlide/bearingSlide02.html',
            controller : 'bearingSlideController02'
        })
        .state('bearingSlide03', {
            url : '/bearingSlide03',
            templateUrl : 'app/partials/bearingSlide/bearingSlide03.html',
            controller : 'bearingSlideController03'
        })
        .state('bearingSlide04', {
            url : '/bearingSlide04',
            templateUrl : 'app/partials/bearingSlide/bearingSlide04.html',
            controller : 'bearingSlideController04'
        })
        .state('bearingSlide05', {
            url : '/bearingSlide05',
            templateUrl : 'app/partials/bearingSlide/bearingSlide05.html',
            controller : 'bearingSlideController05'
        })
});

