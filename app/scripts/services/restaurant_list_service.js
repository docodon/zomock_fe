'use strict';

angular.module('zomockFeApp')
.service('RestaurantListService',function($http, ENV) {
	this.get_list = function(hash){
		return $http.get(ENV.zomato_api_url + "/search.json",
			{ 
				params: hash,
				headers: {"user-key": ENV["zomato_key"]} 
			})
			.then(function(response) {
			return response.data;
		},function(response) {
			//return -1;

			var hash = {
  "results_found": 10,
  "results_start": 0,
  "results_shown": 10,
  "restaurants": [
    {
      "restaurant": {
        "R": {
          "res_id": 10741
        },
        "apikey": "4d2976a888b6bba70b1b28055c6f7af2",
        "id": "10741",
        "name": "Palette - The Food Court",
        "url": "https://www.zomato.com/pune/palette-the-food-court-jm-road?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "Yugay Plaza, Telephone Bhavan, Near Bal Gandharv Rangmandir, JM Road, Pune",
          "locality": "JM Road",
          "city": "Pune",
          "city_id": 5,
          "latitude": "18.5204303000",
          "longitude": "73.8567437000",
          "zipcode": "0",
          "country_id": 1,
          "locality_verbose": "JM Road, Pune"
        },
        "switch_to_order_menu": 0,
        "cuisines": "North Indian, South Indian, Chinese, Street Food, Fast Food",
        "average_cost_for_two": 150,
        "price_range": 1,
        "currency": "Rs.",
        "offers": [],
        "thumb": "",
        "user_rating": {
          "aggregate_rating": "0",
          "rating_text": "Not rated",
          "rating_color": "CBCBC8",
          "votes": "3"
        },
        "photos_url": "https://www.zomato.com/pune/palette-the-food-court-jm-road/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "menu_url": "https://www.zomato.com/pune/palette-the-food-court-jm-road/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "deeplink": "zomato://restaurant/10741",
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/pune/palette-the-food-court-jm-road/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "establishment_types": []
      }
    },
    {
      "restaurant": {
        "R": {
          "res_id": 18429358
        },
        "apikey": "4d2976a888b6bba70b1b28055c6f7af2",
        "id": "18429358",
        "name": "SK's Kitchen",
        "url": "https://www.zomato.com/pune/sks-kitchen-sadashiv-peth?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "236, Piyush Residency, 3rd Floor, Near Shaniwarwada, Kasba Peth, Pune",
          "locality": "Sadashiv Peth",
          "city": "Pune",
          "city_id": 5,
          "latitude": "18.5209164561",
          "longitude": "73.8569704816",
          "zipcode": "411011",
          "country_id": 1,
          "locality_verbose": "Sadashiv Peth, Pune"
        },
        "switch_to_order_menu": 0,
        "cuisines": "North Indian",
        "average_cost_for_two": 300,
        "price_range": 1,
        "currency": "Rs.",
        "offers": [],
        "thumb": "https://b.zmtcdn.com/data/pictures/chains/8/18429358/3a34d907eab13819e52efb6bbd8cef4c_featured_v2.jpg",
        "user_rating": {
          "aggregate_rating": "0",
          "rating_text": "Not rated",
          "rating_color": "CBCBC8",
          "votes": "2"
        },
        "photos_url": "https://www.zomato.com/pune/sks-kitchen-sadashiv-peth/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "menu_url": "https://www.zomato.com/pune/sks-kitchen-sadashiv-peth/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "https://b.zmtcdn.com/data/pictures/chains/8/18429358/3a34d907eab13819e52efb6bbd8cef4c_featured_v2.jpg",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "deeplink": "zomato://restaurant/18429358",
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/pune/sks-kitchen-sadashiv-peth/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "establishment_types": []
      }
    },
    {
      "restaurant": {
        "R": {
          "res_id": 18441480
        },
        "apikey": "4d2976a888b6bba70b1b28055c6f7af2",
        "id": "18441480",
        "name": "Trick Shot Pool & Cafe",
        "url": "https://www.zomato.com/pune/trick-shot-pool-cafe-budhwar-peth?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "227/1, Near Kasba Police Station, Shivaji Road, Budhwar Peth, Pune",
          "locality": "Budhwar Peth",
          "city": "Pune",
          "city_id": 5,
          "latitude": "18.5206140000",
          "longitude": "73.8558840000",
          "zipcode": "",
          "country_id": 1,
          "locality_verbose": "Budhwar Peth, Pune"
        },
        "switch_to_order_menu": 0,
        "cuisines": "Fast Food",
        "average_cost_for_two": 150,
        "price_range": 1,
        "currency": "Rs.",
        "offers": [],
        "thumb": "https://b.zmtcdn.com/data/pictures/0/18441480/ad0a4c0615ca5589331fec012d96c27d_featured_v2.jpg",
        "user_rating": {
          "aggregate_rating": "0",
          "rating_text": "Not rated",
          "rating_color": "CBCBC8",
          "votes": "0"
        },
        "photos_url": "https://www.zomato.com/pune/trick-shot-pool-cafe-budhwar-peth/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "menu_url": "https://www.zomato.com/pune/trick-shot-pool-cafe-budhwar-peth/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "https://b.zmtcdn.com/data/pictures/0/18441480/ad0a4c0615ca5589331fec012d96c27d_featured_v2.jpg",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "deeplink": "zomato://restaurant/18441480",
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/pune/trick-shot-pool-cafe-budhwar-peth/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "establishment_types": []
      }
    },
    {
      "restaurant": {
        "R": {
          "res_id": 6507073
        },
        "apikey": "4d2976a888b6bba70b1b28055c6f7af2",
        "id": "6507073",
        "name": "Shripad Idli Centre",
        "url": "https://www.zomato.com/pune/shripad-idli-centre-shaniwar-peth?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "174, Kasba Peth, Opposite Shaniwar Wada, Shaniwar Peth, Pune",
          "locality": "Shaniwar Peth",
          "city": "Pune",
          "city_id": 5,
          "latitude": "18.5192083095",
          "longitude": "73.8562000170",
          "zipcode": "",
          "country_id": 1,
          "locality_verbose": "Shaniwar Peth, Pune"
        },
        "switch_to_order_menu": 0,
        "cuisines": "South Indian, Street Food",
        "average_cost_for_two": 100,
        "price_range": 1,
        "currency": "Rs.",
        "offers": [],
        "thumb": "",
        "user_rating": {
          "aggregate_rating": "0",
          "rating_text": "Not rated",
          "rating_color": "CBCBC8",
          "votes": "2"
        },
        "photos_url": "https://www.zomato.com/pune/shripad-idli-centre-shaniwar-peth/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "menu_url": "https://www.zomato.com/pune/shripad-idli-centre-shaniwar-peth/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "deeplink": "zomato://restaurant/6507073",
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/pune/shripad-idli-centre-shaniwar-peth/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "establishment_types": []
      }
    },
    {
      "restaurant": {
        "R": {
          "res_id": 18393405
        },
        "apikey": "4d2976a888b6bba70b1b28055c6f7af2",
        "id": "18393405",
        "name": "Big City Snacks Center",
        "url": "https://www.zomato.com/pune/big-city-snacks-center-fc-road?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "Shop 7, Gokul Nagar, Dyaneshwar Paduka Chowk, FC Road, Pune",
          "locality": "FC Road",
          "city": "Pune",
          "city_id": 5,
          "latitude": "18.5220763568",
          "longitude": "73.8569847804",
          "zipcode": "411005",
          "country_id": 1,
          "locality_verbose": "FC Road, Pune"
        },
        "switch_to_order_menu": 0,
        "cuisines": "Street Food",
        "average_cost_for_two": 200,
        "price_range": 1,
        "currency": "Rs.",
        "offers": [],
        "thumb": "",
        "user_rating": {
          "aggregate_rating": "0",
          "rating_text": "Not rated",
          "rating_color": "CBCBC8",
          "votes": "0"
        },
        "photos_url": "https://www.zomato.com/pune/big-city-snacks-center-fc-road/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "menu_url": "https://www.zomato.com/pune/big-city-snacks-center-fc-road/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "deeplink": "zomato://restaurant/18393405",
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/pune/big-city-snacks-center-fc-road/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "establishment_types": []
      }
    },
    {
      "restaurant": {
        "R": {
          "res_id": 6503533
        },
        "apikey": "4d2976a888b6bba70b1b28055c6f7af2",
        "id": "6503533",
        "name": "Aatithya",
        "url": "https://www.zomato.com/pune/aatithya-shaniwar-peth?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "Navmaharshtra House, Opposite Shaniwar Wada, Shaniwar Peth, Pune",
          "locality": "Shaniwar Peth",
          "city": "Pune",
          "city_id": 5,
          "latitude": "18.5206411446",
          "longitude": "73.8546530530",
          "zipcode": "",
          "country_id": 1,
          "locality_verbose": "Shaniwar Peth, Pune"
        },
        "switch_to_order_menu": 0,
        "cuisines": "North Indian, Chinese, South Indian",
        "average_cost_for_two": 450,
        "price_range": 1,
        "currency": "Rs.",
        "offers": [],
        "thumb": "https://b.zmtcdn.com/data/pictures/3/6503533/a801e330f2be4f44994102dc1623d0b2_featured_v2.jpg",
        "user_rating": {
          "aggregate_rating": "3.0",
          "rating_text": "Average",
          "rating_color": "CDD614",
          "votes": "8"
        },
        "photos_url": "https://www.zomato.com/pune/aatithya-shaniwar-peth/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "menu_url": "https://www.zomato.com/pune/aatithya-shaniwar-peth/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "https://b.zmtcdn.com/data/pictures/3/6503533/a801e330f2be4f44994102dc1623d0b2_featured_v2.jpg",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "deeplink": "zomato://restaurant/6503533",
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/pune/aatithya-shaniwar-peth/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "establishment_types": []
      }
    },
    {
      "restaurant": {
        "R": {
          "res_id": 6504029
        },
        "apikey": "4d2976a888b6bba70b1b28055c6f7af2",
        "id": "6504029",
        "name": "Shree Krishna",
        "url": "https://www.zomato.com/pune/shree-krishna-budhwar-peth?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "Jija Mata Chowk, Budhwar Peth, Pune",
          "locality": "Budhwar Peth",
          "city": "Pune",
          "city_id": 5,
          "latitude": "18.5186357443",
          "longitude": "73.8561446965",
          "zipcode": "",
          "country_id": 1,
          "locality_verbose": "Budhwar Peth, Pune"
        },
        "switch_to_order_menu": 0,
        "cuisines": "North Indian, South Indian",
        "average_cost_for_two": 400,
        "price_range": 1,
        "currency": "Rs.",
        "offers": [],
        "thumb": "https://b.zmtcdn.com/data/pictures/9/6504029/2bd26a6a19a68ded1d174058c1b2327e_featured_v2.jpg",
        "user_rating": {
          "aggregate_rating": "2.9",
          "rating_text": "Average",
          "rating_color": "FFBA00",
          "votes": "9"
        },
        "photos_url": "https://www.zomato.com/pune/shree-krishna-budhwar-peth/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "menu_url": "https://www.zomato.com/pune/shree-krishna-budhwar-peth/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "https://b.zmtcdn.com/data/pictures/9/6504029/2bd26a6a19a68ded1d174058c1b2327e_featured_v2.jpg",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "deeplink": "zomato://restaurant/6504029",
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/pune/shree-krishna-budhwar-peth/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "establishment_types": []
      }
    },
    {
      "restaurant": {
        "R": {
          "res_id": 18274410
        },
        "apikey": "4d2976a888b6bba70b1b28055c6f7af2",
        "id": "18274410",
        "name": "Govinda Pure Veg",
        "url": "https://www.zomato.com/pune/govinda-pure-veg-budhwar-peth?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "519, Next to Ramakant Electricals, Near Apollo Theatre, Budhwar Peth, Pune",
          "locality": "Budhwar Peth",
          "city": "Pune",
          "city_id": 5,
          "latitude": "18.5188819747",
          "longitude": "73.8583151561",
          "zipcode": "",
          "country_id": 1,
          "locality_verbose": "Budhwar Peth, Pune"
        },
        "switch_to_order_menu": 0,
        "cuisines": "North Indian, Indian",
        "average_cost_for_two": 400,
        "price_range": 1,
        "currency": "Rs.",
        "offers": [],
        "thumb": "",
        "user_rating": {
          "aggregate_rating": "0",
          "rating_text": "Not rated",
          "rating_color": "CBCBC8",
          "votes": "2"
        },
        "photos_url": "https://www.zomato.com/pune/govinda-pure-veg-budhwar-peth/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "menu_url": "https://www.zomato.com/pune/govinda-pure-veg-budhwar-peth/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "deeplink": "zomato://restaurant/18274410",
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/pune/govinda-pure-veg-budhwar-peth/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "establishment_types": []
      }
    },
    {
      "restaurant": {
        "R": {
          "res_id": 6503535
        },
        "apikey": "4d2976a888b6bba70b1b28055c6f7af2",
        "id": "6503535",
        "name": "Sawjiz",
        "url": "https://www.zomato.com/pune/sawjiz-shaniwar-peth?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "Opposite Ahilyadevi School, Shaniwar Peth, Pune",
          "locality": "Shaniwar Peth",
          "city": "Pune",
          "city_id": 5,
          "latitude": "18.5187250786",
          "longitude": "73.8545655459",
          "zipcode": "",
          "country_id": 1,
          "locality_verbose": "Shaniwar Peth, Pune"
        },
        "switch_to_order_menu": 0,
        "cuisines": "North Indian, Fast Food",
        "average_cost_for_two": 500,
        "price_range": 2,
        "currency": "Rs.",
        "offers": [],
        "thumb": "https://b.zmtcdn.com/data/pictures/5/6503535/f7c564f900b617c0c4a5e90a44d8adc2_featured_v2.jpg",
        "user_rating": {
          "aggregate_rating": "3.0",
          "rating_text": "Average",
          "rating_color": "CDD614",
          "votes": "12"
        },
        "photos_url": "https://www.zomato.com/pune/sawjiz-shaniwar-peth/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "menu_url": "https://www.zomato.com/pune/sawjiz-shaniwar-peth/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "https://b.zmtcdn.com/data/pictures/5/6503535/f7c564f900b617c0c4a5e90a44d8adc2_featured_v2.jpg",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "deeplink": "zomato://restaurant/6503535",
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/pune/sawjiz-shaniwar-peth/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "establishment_types": []
      }
    },
    {
      "restaurant": {
        "R": {
          "res_id": 18279631
        },
        "apikey": "4d2976a888b6bba70b1b28055c6f7af2",
        "id": "18279631",
        "name": "Cake & Celebration",
        "url": "https://www.zomato.com/pune/cake-celebration-lonavala?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": {
          "address": "Shop No 1, Oswal Building, Near Vijaya Bank, Lonavala, Pune",
          "locality": "Lonavala",
          "city": "Pune",
          "city_id": 5,
          "latitude": "18.5203062288",
          "longitude": "73.8533369762",
          "zipcode": "",
          "country_id": 1,
          "locality_verbose": "Lonavala, Pune"
        },
        "switch_to_order_menu": 0,
        "cuisines": "Bakery, Desserts, Vegetarian",
        "average_cost_for_two": 300,
        "price_range": 1,
        "currency": "Rs.",
        "offers": [],
        "thumb": "",
        "user_rating": {
          "aggregate_rating": "0",
          "rating_text": "Not rated",
          "rating_color": "CBCBC8",
          "votes": "0"
        },
        "photos_url": "https://www.zomato.com/pune/cake-celebration-lonavala/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        "menu_url": "https://www.zomato.com/pune/cake-celebration-lonavala/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        "featured_image": "",
        "has_online_delivery": 0,
        "is_delivering_now": 0,
        "deeplink": "zomato://restaurant/18279631",
        "has_table_booking": 0,
        "events_url": "https://www.zomato.com/pune/cake-celebration-lonavala/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "establishment_types": []
      }
    }
]
};

	return hash;

		});
	};
});
