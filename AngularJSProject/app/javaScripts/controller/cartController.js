angular.module('songkangApp').
controller('cartController', function ($scope,$state, orderService) {
    $scope.myCart = orderService.getCart();
    $scope.totalQuantity = orderService.getTotalQuantity();
    $scope.totalPrice = orderService.getTotalPrice();
    
    $scope.deleteFromCart = function (cart,index) {
        cart.splice(index,1);
        $state.reload();
    };
    $scope.gotoOrder = function (cart) {
        console.log("myCart");
        for(var index = 0; index < cart.length; index++)
            console.log(cart[index]);
        console.log("Cart");
        for(var index = 0; index < orderService.getCart().length; index++)
            console.log(orderService.getCart()[index]);
        $state.go("order");
    };
});
