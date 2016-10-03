angular.module('songkangApp').
config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url : '/home',
            templateUrl : 'app/partials/home.html',
            controller : 'homeController'
        })
        .state('bearingSlide', {
            url:'/bearingSlide',
            templateUrl:'app/partials/bearingSlide.html'
            //controller:'bearingSlideController'
        })
        .state('drawerSlide', {
            url:'/drawerSlide',
            templateUrl:'app/partials/drawerSlide.html',
            //controller:'drawerSlideController'
        })
        .state('hinge', {
            url:'/hinge',
            templateUrl:'app/partials/hinge.html',
            controller:'hingeController'
        })
        .state('testCertification', {
            url:'/testCertification',
            templateUrl:'app/partials/testCertification.html',
            controller:'testCertificationController'
        })
        .state('contact', {
            url:'/contact',
            templateUrl:'app/partials/contact.html',
            controller:'contactController'
        })
        .state('cart', {
            url:'/cart',
            templateUrl:'app/partials/cart.html',
            controller:'cartController'
        })
        .state('order', {
            url:'/order',
            templateUrl:'app/partials/order.html',
            controller:'orderController'
        })
        .state('finishedOrder', {
            url:'/finishedOrder',
            templateUrl:'app/partials/finishedOrder.html',
            controller:'finishedOrderController'
        })
        .state('newInternship', {
            url: '/newInternship',
            templateUrl: 'app/partials/newInternshipForm.html',
            controller : 'newInternshipFormController',
            params: {internshipParameter : null}
        })
        .state('allData', {
            url: '/allData',
            views: {
                '': { templateUrl: 'app/partials/allData.html' },
                'dataTable@allData': {
                    templateUrl: 'app/partials/allData-table.html',
                    controller : "allDataController"
                }
            }
        });
    
});
