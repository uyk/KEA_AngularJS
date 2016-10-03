angular.module('internshipApp').
controller('newInternshipFormController', function ($scope, $state, $stateParams, $http) {
    console.log("New Internship Form Controller");
    $scope.internship = {};
    $scope.$parent.dummyInternships = [];
    $scope.internship = $stateParams.internshipParameter;

    $scope.saveInternship = function() {
        alert("Saved");
        if ($scope.internshipForm.$valid) {
            if ($scope.internship._id != null) {
                var url_id = "http://angularkea1.azurewebsites.net/api/internships/Update/" + $scope.internship._id;
                $http({
                    method: "POST",
                    data: $scope.internship,
                    url: url_id})
                    .success(function (data) {
                        console.log("Internship saved, id : " + $scope.internship._id);
                        $scope.$parent.dummyInternships.push($scope.internship);
                        $state.go("allData");
                    }).error(function (data) {
                        console.log("ERROR in saveInternship-if");
                    }
                );
            } else if($scope.internship._id == null){
                $http({
                    method: "POST",
                    url: "http://angularkea1.azurewebsites.net/api/internships/Create",
                    data: $scope.internship})
                    .success(function(data){
                        console.log(data);
                        $scope.$parent.dummyInternships.push($scope.internship);
                        console.log($scope.internship);
                        console.log("Internship saved, id was null");
                        $state.go("allData");
                    }).error(function(data) {
                        console.log("ERROR in saveInternship-elseif");
                    }
                );
            } else {
                console.log("ERROR in saveInternship-else");
            }   
        }
    };
});