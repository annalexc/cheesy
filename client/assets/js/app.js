// console.log("Loaded!");

var app = angular.module('CheesyDB', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/templates/view.html',
    controller: 'CheeseController'
  })
  .when('/search/:source', {
    templateUrl: 'views/templates/cheese-list.html',
    controller: 'CheeseController'
  })
  .when('/search/:source/:type', {
    templateUrl: 'views/templates/cheese-list.html',
    controller: 'CheeseController'
  })
  .when('/search/:source/:type/:country', {
    templateUrl: 'views/templates/cheese-list.html',
    controller: 'CheeseController'
  })
  .when('/name/:name', {
    templateUrl: 'views/templates/cheese-details.html',
    controller: 'CheeseDetailsController'
  })
  .when('/no-results', {
    templateUrl: 'views/templates/no-results.html',
    controller: 'CheeseController'
  })
  .otherwise({
    redirectTo: '/'
  })

}]);


// app.controller('CheesesController', ['$scope', function( $scope ) {

// }]);


app.controller('CheeseController', ['$scope', '$routeParams', '$http', '$window', function( $scope, $routeParams, $http, $window ) {

  $scope.source = $routeParams.source;
  $scope.sourceLabel;
  $scope.type = $routeParams.type;
  $scope.typeLabel;
  $scope.country = $routeParams.country;
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
      if($scope.cheeses.length == 0){
        $scope.redirectToNoResults();
      };
    });

  } else if($scope.source && $scope.type){
    $scope.sourceLabel = capitalize($scope.source) + "'s Milk";
    $scope.typeLabel = capitalize($scope.type);

    $http.get('/api/cheeses/search?source='+$scope.source +'&type='+ $scope.type).then(function(response){
      console.log(response);
      $scope.cheeses = response.data;
      if($scope.cheeses.length == 0){
        $scope.redirectToNoResults();
      };     
    });
  } else if($scope.source){
    $scope.sourceLabel = capitalize($scope.source) + "'s Milk";
    $http.get('/api/cheeses/search?source='+$scope.source).then(function(response){
      console.log(response);
      $scope.cheeses = response.data; 
      if($scope.cheeses.length == 0){
        $scope.redirectToNoResults();
      };    
    });
  }

  $scope.redirectToNoResults = function(){
    $window.location.href = '/#/no-results';
  }

}]);

app.controller('CheeseDetailsController', ['$scope', '$routeParams', '$http', '$window', function( $scope, $routeParams, $http, $window ) {


  $scope.name = $routeParams.name;
  $scope.cheese;



  $http.get('/api/cheeses/name/'+$scope.name).then(function(response){
    // console.log(response.data.length)
    
    if(response.data.length == 0 ){
      $scope.redirectToNoResults();
    } else {
      $scope.cheese = response.data[0];
      $scope.source = capitalize($scope.cheese.milk_source);
      $scope.type = capitalize($scope.cheese.type);
    }
    console.log($scope.cheese); 
    
  });
  

  $scope.redirectToNoResults = function(){
    $window.location.href = '/#/no-results';
  }

}]);