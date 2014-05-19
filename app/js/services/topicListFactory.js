/**
* Open Forum
* (c) 2014 by Marcus Heath Showalter. All rights reserved.
*
* Author: Marcus Heath Showalter
* Web: heathshowalter.com
* Email: marcus.h.showalter@gmail.com
* Date: 2014-05-19 03:24 AM
*/

'use strict';
/*jshint indent:4 */

(function ( angular ) {

angular.module('forumApp')

    .factory('topicFactory', function($http, APP_CONFIG){
        return {
            // Check if user is logged in also retrieve avatar and display name
            getList : function(params) {
                return $http.get(APP_CONFIG.API_TOPIC_LIST_URL, {
                    params : params
                });
            },
			
			setFav : function(id) {
				console.log('Add topic to favorites')
			}
        }
    })

})( window.angular );