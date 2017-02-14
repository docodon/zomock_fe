'use strict';

angular.module('zomockFeApp')
 .service('GeneratePollService',function($http, ENV) {
 	this.generate = function(groups,restaurants,event_token)
 	{
 		return $http.post(ENV.apiEndpoint + "/api/v0/polls.json",
		{
			groups: groups,
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
