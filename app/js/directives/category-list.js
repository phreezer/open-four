/**
* Open Forum
* (c) 2014 by Marcus Heath Showalter. All rights reserved.
*
* Author: Marcus Heath Showalter
* Web: heathshowalter.com
* Email: marcus.h.showalter@gmail.com
* Date: 2014-05-17 02:08 PM
*/

'use strict';
/*jshint indent:4 */

(function ( angular ) {

angular.module('forumApp')
	.directive('categoryList', function () {
		return {
			controller: function($scope, $http, responsiveHelp) {
                
			},
			templateUrl: 'html/directives/category-list.html',
			restrict: 'C'
		};
	});

})( window.angular );