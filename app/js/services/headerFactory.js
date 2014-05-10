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
    .factory('headerFactory', function($http){
        return {
            get : function(params){
                return $http.get('json/header.json', {
                    params : params
                });
            }
        }
    });