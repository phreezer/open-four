/**
* Open Forum
* (c) 2014 by Marcus Heath Showalter. All rights reserved.
*
* Author: Marcus Heath Showalter
* Web: heathshowalter.com
* Email: marcus.h.showalter@gmail.com
* Date: 2014-05-20 01:09 PM
*/

'use strict';
/*jshint indent:4 */

(function ( angular ) {

angular.module('forumApp')

	.directive('sidebarActionMenu', function () {
		return {
			controller: function($scope) {
         		// Display User Login or Create Posts if already logged in
         		
			},
			templateUrl: '',
			restrict: 'C'
		};
	});
	
	.directive('sidebarTopicFilter', function () {
		return {
			controller: function($scope) {
         		
			},
			templateUrl: '',
			restrict: 'C'
		};
	});
	
	.directive('sidebarSortBy', function () {
		return {
			controller: function($scope) {
         		
			},
			templateUrl: '',
			restrict: 'C'
		};
	});	

})( window.angular );