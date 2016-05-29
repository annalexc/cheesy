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
  .when('/:source/:type', {
    templateUrl: 'views/templates/view.html',
    controller: 'CheeseController'
  })
  .when('/:source/:type/:country', {
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
  $scope.sourceLabel;
  $scope.type = $routeParams.type;
  $scope.typeLabel;
  $scope.country = $routeParams.country;

  // console.log("I get into my search!");
  console.log($scope.source);
  // console.log($scope.type);

  $scope.cheeses;
  if($scope.source=="all cheeses"){
    $scope.source=undefined;
    $http.get('/api/cheeses').then(function(response){
    $scope.cheeses = response.data;      
  });

  } else if($scope.source && $scope.type && $scope.country){
    $scope.sourceLabel = capitalize($scope.source) + "'s Milk";
    $scope.typeLabel = capitalize($scope.type);

    $http.get('/api/cheeses/search?source='+$scope.source +'&type='+ $scope.type +'&country='+$scope.country).then(function(response){
      console.log(response);
      $scope.cheeses = response.data;     
    });

  } else if($scope.source && $scope.type){
    $scope.sourceLabel = capitalize($scope.source) + "'s Milk";
    $scope.typeLabel = capitalize($scope.type);

    $http.get('/api/cheeses/search?source='+$scope.source +'&type='+ $scope.type).then(function(response){
      console.log(response);
      $scope.cheeses = response.data;     
    });
  } else if($scope.source){
    $scope.sourceLabel = capitalize($scope.source) + "'s Milk";
    $http.get('/api/cheeses/search?source='+$scope.source).then(function(response){
      console.log(response);
      $scope.cheeses = response.data;     
    });
  }
}]);