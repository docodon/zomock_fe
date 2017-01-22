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
  									AuthenticateService, RestaurantListService, $timeout, 
                    $interval, MenuImageService, UpdateLocationService, $mdToast ) {

    var PAGE_SIZE = ENV.pagination_size ;



   $scope.location = {"entity_type":"city","entity_id":5,"title":"Pune","latitude":18.520469,"longitude":73.85662,"city_id":5,"city_name":"Pune","country_id":1,"country_name":"India"};

   $scope.fClient = $location.search();
   // $scope.event = JSON.parse($scope.fClient.flockEvent) ;


    var auth_response  = AuthenticateService.launch_app($scope.fClient.flockEventToken);
  	auth_response.then(function(result){
      if(result==-1)
      {
        $location.url('/404');
        return;
      }
      $scope.location = result.location_details;
    });

    $scope.selectedCategory = '';
    $scope.selectedCollection = '';
    $scope.selectedEstablishment = '';
    $scope.selectedCuisines = []

    $scope.resetFilters = function()
    {
      $scope.selectedCategory = '';
      $scope.selectedCollection = '';
      $scope.selectedEstablishment = '';
      $scope.selectedCuisines = []
    };


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


  var prepare_params = function()
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
    hash.count = PAGE_SIZE;

    return hash;

  };

  $scope.getRestaurants = function()
  {

      var hash = prepare_params();  
      hash.start = 0;

      $scope.reveal = null;

      RestaurantListService.get_list(hash).then(function(result){
      
      $scope.rest_list = result;

      if($scope.rest_list==-1)
      {
        $mdToast.show(
        $mdToast.simple()
        .textContent('Something went wrong, Internal error !')
        .position('bottom right')
        .hideDelay(3000)
        );
        return ;
      }


      if(result.results_shown===0)
      { 
        $mdToast.show(
          $mdToast.simple()
          .textContent('No results found !')
          .position('bottom right')
          .hideDelay(3000)
        );
     
        return ;
      }

      var uloc = UpdateLocationService.update_location($scope.fClient.flockEventToken, $scope.location);

      uloc.then(function(loc_status){

          if(loc_status==-1)
          {
            $mdToast.show(
              $mdToast.simple()
              .textContent('Something went wrong, Internal error !')
              .position('bottom right')
              .hideDelay(3000)
            );
            return ;
          }

          result.results_found = Math.min(100,result.results_found);  
          $scope.pages = Math.floor(result.results_found/PAGE_SIZE);  

          if(result.results_found%PAGE_SIZE !== 0)    //over here find number of pages .i.e Number/10
          {  
             $scope.pages+=1;
          }

          $scope.reveal = 1 ;    //reveal the pagination 
       
          $scope.paging = {
            total: $scope.pages,
            current: 1,
            onPageChanged: loadPages,
          };

      });

    });
  };

  $scope.currentPage = 0;

  function loadPages(){

    if($scope.reveal == null)
      return ;
    
    // console.log('Current page is : ' + $scope.paging.current);

    $scope.hash = prepare_params();
    $scope.hash.start = PAGE_SIZE*($scope.paging.current - 1);

    // TODO : Load current page Data here
    
    RestaurantListService.get_list($scope.hash).then(function(result){      
        $scope.rest_list = result;        
    
    });

    $scope.currentPage = $scope.paging.current;
 
  }
  

  // ng-image-gallery settings

  $scope.conf = 
  {
    thumbnails  :   false, 
    inline    :   false,
    bubbles   :   true,
    imgBubbles  :   true, 
    bgClose   :   false
  };

  $scope.images = [];

  $scope.methods = {};
  $scope.openGallery = function(url){
      var resp = MenuImageService.image_url_array(url,$scope.fClient.flockEventToken);
      resp.then(function(result){
        $scope.images = result;  
    });
    //$scope.methods.open();
  };


});
