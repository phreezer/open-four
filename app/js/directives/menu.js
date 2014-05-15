/**
* ECO-League.com
* (c) 2014 by Marcus Heath Showalter. All rights reserved.
*
* Author: Marcus Heath Showalter
* Web: heathshowalter.com
* Email: marcus.h.showalter@gmail.com
* Date: 2014-05-10 06:05 AM
*/
(function ( angular ) {
    
'use strict';

angular.module('forumApp')
	.directive('menu', function () {
		return {
			controller: function($rootScope, $scope, $http, menuFactory) {

                menuFactory.get().then(function(data){
                    console.log('menu data',data);
                });
                
			},
			templateUrl: 'html/directives/menu.html',
			restrict: 'C'
		};
	});

})( window.angular );