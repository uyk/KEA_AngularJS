angular.module('songkangApp').
    factory("orderService",function ($q, $state, $http, $resource) {
    var cart = [];
    return {
        addOrder : function(productDetail) {
            cart.push(productDetail);
        },
        getTotalQuantity : function() {
            console.log("getTQ");
            var q = 0;
            for(var index = 0; index < cart.length; index++)
                q += cart[index].quantity;
            return q;
        },
        getTotalPrice : function() {
            var p = 0;
            for(var index = 0; index < cart.length; index++)
                p += cart[index].optionedPrice * cart[index].quantity;
            return p;
        },
        getCart : function () {
            tempCart = [
                item1 = {
                    productName : "3 Level Damping Rail - 45mm",
                    imgsrc : "resources/ball01.png",
                    defaultPrice : 3500,
                    optionedPrice : 3500,
                    productCode :   '-------',
                    originCountry : 'China',
                    size : "300",
                    quantity : 1
                },
                item2 = {
                    productName : "3 Level Damping Rail - 45mm",
                    imgsrc : "resources/ball01.png",
                    defaultPrice : 3500,
                    optionedPrice : 3900,
                    productCode :   '-------',
                    originCountry : 'China',
                    size : "350",
                    quantity : 5
                },
                item3 = {
                    productName : "3 Level Damping Rail - 45mm",
                    imgsrc : "resources/ball01.png",
                    defaultPrice : 3500,
                    optionedPrice : 4300,
                    productCode :   '-------',
                    originCountry : 'China',
                    size : "400",
                    quantity : 5
                }
            ];
            //return tempCart;
            return cart;
        },
        customerInfo : {
            name : null,
            telNumber :null,
            phoneNumber : null,
            email : null
        },
        shipInfo : {
            name : null,
            postNumber : null,
            address : null,
            telNumber : null,
            phoneNumber : null,
            email : null,
            message : null
        }
    }
})