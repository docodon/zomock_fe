'use strict';

angular.module('zomockFeApp')
 .service('ShareService',function($http, ENV) {
 	this.share = function(contacts,restaurants,event_token)
 	{
 		return $http.post(ENV.apiEndpoint + "/api/v0/share.json",
		{
			contacts: contacts,
			restaurants: Object.values(restaurants)
		},
		{
      		headers:{
      			'event-token': event_token
    		}
    	}
    	).then(function(response) {
			return response.data;
		},function(response) {
			return -1;
		});
 	} 
});
