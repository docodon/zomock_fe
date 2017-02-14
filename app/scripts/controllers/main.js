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
                    $interval, MenuImageService, UpdateLocationService, $mdToast,  $mdDialog
                    , UserContactService, UserGroupService, GeneratePollService,ShareService 
                    ){

    var PAGE_SIZE = ENV.pagination_size ;



   $scope.location = {"entity_type":"city","entity_id":5,"title":"Pune","latitude":18.520469,"longitude":73.85662,"city_id":5,"city_name":"Pune","country_id":1,"country_name":"India"};

//   $scope.fClient = $location.search();
  $scope.fClient = {"flockClient":"desktop","flockEventToken":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBJZCI6ImQ4NzRlNTFiLWFjZGEtNGQ5Zi04ZDUxLTRiMTg2NzU5MzY4MyIsImV4cCI6MTQ4NzUyODU1NCwidXNlcklkIjoidTpleW1tbDdrb2xrdW1lbDFtIiwiaWF0IjoxNDg2OTIzNzU0LCJqdGkiOiI0NzFlZGQ3MC1lNTI3LTQ2NDUtOGRjNy1kNjcxNDhhOTJkZjAifQ.18b6YTaQMhS1rHe99DLO6am52ufPd9vpUP24z7UC81c",
                  "flockWidgetType":"modal",
                  "flockClaimToken":"0.8205162086699669_d874e51b-acda-4d9f-8d51-4b1867593683","flockEvent":"{\"chatName\":\"Lobby\",\"chat\":\"g:101239_lobby\",\"userName\":\"Dhruv Sharma\",\"userId\":\"u:eymml7kolkumel1m\",\"name\":\"client.pressButton\",\"button\":\"appLauncherButton\"}"}

   // $scope.event = JSON.parse($scope.fClient.flockEvent) ;


    var auth_response  = AuthenticateService.launch_app($scope.fClient.flockEventToken);
  	auth_response.then(function(result){
      if(result==-1)
      {
        $location.url('/404');
        return;
      }
      $scope.flock_token = result.flock_token;
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


  // selected restaurants 

  $scope.selected_rest = {};

  $scope.isChecked = function (rest){
    return rest.R.res_id in $scope.selected_rest;
  };

  $scope.toggle = function(rest){
    if(rest.R.res_id in $scope.selected_rest)
      delete $scope.selected_rest[rest.R.res_id];
    else 
      $scope.selected_rest[rest.R.res_id] = rest;
  };

  //dialog box for sharing restaurants

  $scope.openDialog = function(){
    $mdDialog.show({
            parent: angular.element(document.body),
            scope: this,
            clickOutsideToClose: true,
            preserveScope: true,              
            templateUrl: 'views/share_dialog.html',
            controllerAs: 'share_dialog',
            controller: mdDialogCtrl
            })
        };

  var mdDialogCtrl = function ($scope) { 
    console.log($scope.selected_rest);
    
    var raiseToast = function(message){
        $mdToast.show(
        $mdToast.simple()
        .textContent(message)
        .position('bottom right')
        .hideDelay(3000)
        );
        return;
    };

    var contacts  = UserContactService.contacts($scope.flock_token);
    contacts.then(function(result){   
      if(result==-1) //raise a toast 
      {
        raiseToast('Not able to fetch user contacts !');
        return;
      }
      $scope.contact_list = result;

    });

    var groups  = UserGroupService.groups($scope.flock_token); 
    groups.then(function(result){
      if(result==-1) //raise a toast 
      {
         raiseToast('not able to fetch user groups !'); 
         return ;
      }
      $scope.group_list = result;
    });

    
    $scope.sel_groups = [];
    $scope.sel_contacts = []; 

    $scope.generate_polls = function(){
      
      if(Object.values($scope.selected_rest).length==0)
      {
        raiseToast('select atleast one restaurant !');  
        return ;
      }
      
      if($scope.sel_groups.length==0)
      {
        raiseToast('select atleast one group !'); 
        return ;
      }

      var gen_polls = GeneratePollService.generate($scope.sel_groups,
                          $scope.selected_rest,$scope.fClient.flockEventToken);

      gen_polls.then(function(result){
        if(result==-1)
        {
          raiseToast('Not able to generate polls !'); 
          return ;
        }
        else
        {
          raiseToast('Polls on the way !'); 
          return ;
        }
      }); 
    };

    $scope.share_with_contacts = function(){
      
      if(Object.values($scope.selected_rest).length==0)
      {
        raiseToast('select atleast one restaurant !');  
        return ;
      }
      if($scope.sel_contacts.length==0)
      {
        raiseToast('select atleast one contact !'); 
        return ;
      }

      var share = ShareService.share($scope.sel_contacts,
                          $scope.selected_rest,$scope.fClient.flockEventToken);
      
      share.then(function(result){
        if(result==-1)
        {
          raiseToast('Not able to share !'); 
          return ;
        }
        else
        {
          raiseToast('Shared !'); 
          return ;
        }
      });     
    };
  
  };

});
