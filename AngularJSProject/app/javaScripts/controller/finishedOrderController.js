angular.module('songkangApp').
controller('finishedOrderController',function ($scope, $http, $state, orderService) {
    console.log(orderService.getCart().length);
    console.log("finishedOrderController");
    console.log(orderService.customerInfo);
    console.log(orderService.shipInfo);

    $scope.myCart = orderService.getCart();
    $scope.totalQuantity = orderService.getTotalQuantity();
    $scope.totalPrice = orderService.getTotalPrice();
    // $scope.customerInfo = orderService.customerInfo;
    // $scope.shipInfo = orderService.shipInfo;
    $scope.finish = function () {
        location.reload();
        $state.go("home");
        location.reload();
    }

    $scope.customerInfo = {
        name : "aa",
        telNumber :"df",
        phoneNumber : "Df",
        email : "Sdg@df"
    };
    $scope.shipInfo = {
        name : "Sgsdf",
        postNumber : 23,
        address : "dsf",
        telNumber : "sdf",
        phoneNumber : "Sdf",
        email : "Sdf@df",
        message : "Sdgsdf"
    };
});