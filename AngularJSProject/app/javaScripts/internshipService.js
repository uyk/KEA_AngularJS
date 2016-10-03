angular.module("songkangApp")
    .factory("internshipService",function($q, $state, $http, $resource) {
        //use $http service of $resource to be able to communicate with the webservice
        var internships = [];
        return {
            getInternships : function() {

            },
            addInternship : function(internship) {

            },
            updateInternship : function (internship, id) {
            },
            deleteInternship : function(id) {

            }
        }
    });