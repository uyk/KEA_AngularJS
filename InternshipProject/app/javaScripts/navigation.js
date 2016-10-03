angular.module('internshipApp').
config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/newInternship');

    $stateProvider
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
