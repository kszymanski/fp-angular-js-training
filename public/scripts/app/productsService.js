app.factory("productsService",['$http', function($http){
    return{
        query: function(){
            return $http({
                method: 'GET',
                url: '/products'
                });
        }
    };
}]);