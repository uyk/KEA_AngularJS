angular.module('songkangApp').
controller('allDataController', function($scope, $state, $http, $resource) {
    console.log("All internship controller");
    $scope.search = "";

    $scope.searchFunc = function (searchInitials) {
        $scope.search = searchInitials;
        console.log(searchInitials);
    }

    $scope.deleteInternship = function(item) {
        console.log(item);
        $http({ method: "POST",
            data: $scope.internship,
            url: "http://angularkea1.azurewebsites.net/api/internships/Delete/" + item._id })
            .success(function(data) {
                console.log(data);
                alert("Deleted");
                location.reload();
                //$scope.$parent.dummyInternships.push($scope.internship);
                //delete the internship from the local array, dummyInternships.
            }).error(function(data) {
        });
    };

    
    $scope.editInternship = function(internshipToCopy) {
        //this should navigate sending the internship to the new state.

        //copy the object for editing
        var internshipToSend = angular.copy(internshipToCopy);
        console.log(internshipToSend);
        $state.go("newInternship", //pass internship copy to the state
            { internshipParameter: internshipToSend });
    };

    $scope.internshipResource =
        $resource(
            "http://angularkea2.azurewebsites.net/api/internships/:id",
            { id: "@id" },
            {
                update: { method: 'PUT' }
            }
        );
    //retrieve all internships
    $scope.internshipResource.query(
        function(data) {
            $scope.dummyInternships = data;
        }, function(data) {
            console.log("error in internship Resource query");
        });

});