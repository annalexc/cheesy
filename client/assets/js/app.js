console.log("hi");

var app = angular.module('CheesyDB', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/templates/view.html',
    controller: 'CheesesController'
  })
  .when('/:source', {
    templateUrl: 'views/templates/view.html',
    controller: 'CheeseController'
  })
  .otherwise({
    redirectTo: '/'
  })

}]);


app.controller('CheesesController', ['$scope', '$http', function( $scope, $http ) {
  $scope.cheeses;

  $http.get('/api/cheeses').then(function(response){
    $scope.cheeses = response.data;
    // console.log($scope.cheeses);      
  });
}]);


app.controller('CheeseController', ['$scope', '$routeParams', '$http', function( $scope, $routeParams, $http ) {

  $scope.source = $routeParams.source;
  console.log("I get into my search!");
  console.log($scope.source);

  $scope.cheeses;

  $http.get('/api/cheeses/search?source='+$scope.source).then(function(response){
    console.log(response);
    $scope.cheeses = response.data;     
  });


}]);