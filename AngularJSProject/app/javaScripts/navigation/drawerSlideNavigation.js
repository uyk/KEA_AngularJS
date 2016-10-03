angular.module('songkangApp').
config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('drawerSlide01', {
            url : '/drawerSlide01',
            templateUrl : 'app/partials/drawerSlide/drawerSlide01.html',
            controller : 'drawerSlide01'
        })
});

