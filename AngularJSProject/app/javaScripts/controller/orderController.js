angular.module('songkangApp').
controller('orderController',function ($scope, $http, $state, orderService) {
    console.log(orderService.getCart().length);
    console.log("orderController");
    
    $scope.myCart = orderService.getCart();
    $scope.totalQuantity = orderService.getTotalQuantity();
    $scope.totalPrice = orderService.getTotalPrice();
    $scope.customerInfo = orderService.customerInfo;
    $scope.shipInfo = orderService.shipInfo;
    // $scope.customerInfo = {
    //     name : null,
    //     telNumber :null,
    //     phoneNumber : null,
    //     email : null
    // };
    // $scope.shipInfo = {
    //     name : null,
    //     postNumber : null,
    //     address : null,
    //     telNumber : null,
    //     phoneNumber : null,
    //     email : null,
    //     message : null        
    // };

    $scope.sendOrder = function () {
        console.log("");
        $scope.orderDetail = {
            initials : "UYK",
            customer : $scope.customerInfo,
            ship : $scope.shipInfo
        };
        if ($scope.orderForm.$valid) {
            if ($scope.orderDetail._id != null) {
                var url_id = "http://angularkea1.azurewebsites.net/api/internships/Update/" + $scope.orderDetail._id;
                $http({
                    method: "POST",
                    data: $scope.orderDetail,
                    url: url_id})
                    .success(function (data) {
                        console.log("orderDetail saved, id : " + $scope.orderDetail._id);
                        $state.go("finishedOrder");
                    }).error(function (data) {
                        console.log("ERROR in orderDetail._id!=null");
                    }
                );
            } else if($scope.orderDetail._id == null){
                $http({
                    method: "POST",
                    url: "http://angularkea1.azurewebsites.net/api/internships/Create",
                    data: $scope.orderDetail})
                    .success(function(data){
                        console.log("orderDetail saved, id was null");
                        $state.go("finishedOrder");
                    }).error(function(data) {
                        console.log("ERROR in orderDetail-elseif");
                    }
                );
            } else {
                console.log("ERROR in orderDetail-else");
            }
        }
        else {
            alert("Not Valid Information");
        }
    };
});