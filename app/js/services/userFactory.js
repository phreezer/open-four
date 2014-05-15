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
    .factory('userFactory', function($http, APP_CONFIG){
        return {
            getProfile : function(params){
                return $http.get(APP_CONFIG.JSON_USER_PROFILE_URL, {
                    params : params
                });
            },
            getStats : function(params){
                return $http.get(APP_CONFIG.JSON_USER_STATS_URL, {
                    params : params
                });
            }
        }
    });