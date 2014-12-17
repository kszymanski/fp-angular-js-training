app.controller("productController",["$scope","productsService", function($scope, productsService){
    $scope.products = [];
    productsService.query().success(function(data){
        $scope.products = data;
    });
    
}]);