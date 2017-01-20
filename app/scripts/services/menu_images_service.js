'use strict';

angular.module('zomockFeApp')
.service('MenuImageService',function($http, ENV) {
	

	this.image_url_array = function(zomato_url, event_token)
	{
		return $http.post(ENV.apiEndpoint + "/api/v0/menu_images",
		{
			url: zomato_url
		},
		{ 
			headers:{
				'event-token': event_token
				} 
		}).then(function(response) {
			return response.data;
		},function(response) {
			return [];
		});
	} 

});

// code intended to make a cross-origin request using js 

// var resolve = function(response)
// {
		// 	return response.data;
		// }

		// var reject = function()
		// {
		// 	return -1;
		// }

		// return new Promise(function(resolve, reject) 
		// {
    	
  //   		var xhr = new XMLHttpRequest();
  //   		xhr.open('GET', zomato_url);
    	
  //   		xhr.onload = function () {
  //     						if (this.status >= 200 && this.status < 300) {
	 //        					resolve(xhr.response);
	 //     					 } else {
	 //        						reject();
	 //      						}
	 //    					  };
	    	
	 //    	xhr.onerror = function () {
	 //      		reject();
	 //    	};
	    	
	 //    	xhr.send();
	  
	 //  });


