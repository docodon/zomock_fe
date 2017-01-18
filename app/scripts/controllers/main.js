'use strict';

/**
 * @ngdoc function
 * @name zomockFeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zomockFeApp
 */
angular.module('zomockFeApp')
  .controller('MainCtrl', function ($scope, $routeParams, $location, $http, 
  									ENV, CategoryService,CollectionService,
  									CuisineService, EstablishmentService,
  									AuthenticateService, RestaurantListService) {

    // $scope.fClient = $location.search();
    // $scope.event = JSON.parse($scope.fClient.flockEvent) ;

   // $scope.fClient = {"flockClient":"desktop",
   //                   "flockEventToken":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBJZCI6ImQ4NzRlNTFiLWFjZGEtNGQ5Zi04ZDUxLTRiMTg2NzU5MzY4MyIsImV4cCI6MTQ4NTMxNDE0MywidXNlcklkIjoidTpleW1tbDdrb2xrdW1lbDFtIiwiaWF0IjoxNDg0NzA5MzQzLCJqdGkiOiJlZDlmZmZhZS04ZjY2LTQyZTgtYTRmOC0zMzQzY2U0ZDJiOWEifQ.Diahim_D8Fsnj9LTRhz8hkuSn0RJQkdjsABzIaOe07g",
   //                   "flockWidgetType":"modal",
   //                   "flockClaimToken":"0.22515012633252884_d874e51b-acda-4d9f-8d51-4b1867593683",
   //                   "flockEvent":"{\"chatName\":\"Lobby\",\"chat\":\"g:101239_lobby\",\"userName\":\"Dhruv Sharma\",\"userId\":\"u:eymml7kolkumel1m\",\"name\":\"client.pressButton\",\"button\":\"appLauncherButton\"}"
   //                  };


   //  var auth_response  = AuthenticateService.launch_app($scope.fClient.flockEventToken);
  	// auth_response.then(function(result){
 		// $scope.RESP = result;	
	  //  });

    $scope.selectedCategory = '';
    $scope.selectedCollection = '';
    $scope.selectedEstablishment = '';
    $scope.selectedCuisines = []

    $scope.location = {"entity_type":"city","entity_id":5,"title":"Pune","latitude":18.520469,"longitude":73.85662,"city_id":5,"city_name":"Pune","country_id":1,"country_name":"India"};

    $scope.querySearch = function(query){
    	return $http.get("https://developers.zomato.com/api/v2.1/locations.json", 
    		{ params: {query: query} , headers: {"user-key": ENV['zomato_key']} } 
    		).then(function(response){
           	return response.data.location_suggestions;
        	})
        };

    var category_resp = CategoryService.categories();
  	category_resp.then(function(result){
 		$scope.categories = result.categories;	
	});


    var collection_resp = CollectionService.collections($scope.location.city_id);
 	collection_resp.then(function(result){
 		$scope.collections = result.collections;	
	});

    var cuisine_resp = CuisineService.cuisines($scope.location.city_id);
 	cuisine_resp.then(function(result){
 		$scope.cuisines = result.cuisines;	
  });

    var establishment_resp = EstablishmentService.establishments($scope.location.city_id);
 	  establishment_resp.then(function(result){
 		 $scope.establishments = result.establishments;	
	});


  $scope.getRestaurants = function()
  {
    var hash = {};

    if($scope.selectedCategory)
    {
      hash.category = $scope.selectedCategory.categories.id;
    }

    if($scope.selectedCollection)
    {
       hash.collection_id =  $scope.selectedCollection.collection.collection_id;
    }

    if($scope.selectedEstablishment)
    {
      hash.establishment_type = $scope.selectedEstablishment.establishment.id ;
    }

    if($scope.selectedCuisines.length!==0)
    {
      var cuisine_ids = [] ;
    
      for(var i=0;i<$scope.selectedCuisines.length;i++)
      {
        cuisine_ids.push( $scope.selectedCuisines[i].cuisine.cuisine_id );
      }

      hash.cuisines = cuisine_ids.join();
    }

    hash.lat = $scope.location.latitude;
    hash.lon = $scope.location.longitude;
    hash.sort = 'rating';
    hash.order = 'desc';

    RestaurantListService.get_list(hash).then(function(result){
    $scope.print = result;  

    }); ;

  }



});
