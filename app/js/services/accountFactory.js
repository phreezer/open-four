/**
* ECO-League.com
* (c) 2014 by Marcus Heath Showalter. All rights reserved.
*
* Author: Marcus Heath Showalter
* Web: heathshowalter.com
* Email: marcus.h.showalter@gmail.com
* Date: 2014-05-10 06:05 AM
*/

'use strict';
/*jshint indent:4 */

angular.module('forumApp')
    .factory('accountFactory', function($http, APP_CONFIG){
        return {
            // Check if user is logged in also retrieve avatar and display name
            getStatus : function(params) {
                return $http.get(APP_CONFIG.API_ACCOUNT_URL, {
                    params : params
				});
            }
        }
    });