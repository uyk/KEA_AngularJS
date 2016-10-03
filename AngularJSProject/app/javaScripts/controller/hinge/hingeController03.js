angular.module("songkangApp").
controller("hinge03",function ($scope,$state,$stateParams,orderService) {
    console.log("hinge03");
    $scope.productDetail = {
        productName : "Damping Hinge 110 IN",
        imgsrc : "resources/hinge03.png",
        defaultPrice : 3500,
        optionedPrice : 0,
        productCode :   '-------',
        originCountry : 'China',
        size : 0,
        quantity : 1
    };
    $scope.setPrice = function () {
        switch ($scope.productDetail.size) {
            case "300" : $scope.productDetail.optionedPrice = 0; break;
            case "350" : $scope.productDetail.optionedPrice = 400; break;
            case "400" : $scope.productDetail.optionedPrice = 800; break;
            case "450" : $scope.productDetail.optionedPrice = 1200; break;
            case "500" : $scope.productDetail.optionedPrice = 1600; break;
        }
        $scope.productDetail.optionedPrice = $scope.productDetail.defaultPrice + $scope.productDetail.optionedPrice;
    };
    $scope.addCart = function () {
        if($scope.detailForm.$valid) {
            if(confirm("Added Cart.\nDo you want to go to cart?")){
                orderService.addOrder($scope.productDetail);
                $state.go("cart");
            }
            else {
                orderService.addOrder($scope.productDetail);
                console.log("cancelled");
                $state.reload();
            }

            console.log("valid");
        }
        else {
            alert("Choose Size Option");
        }
    }
});
