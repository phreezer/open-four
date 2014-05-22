/**
* Open Forum
* (c) 2014 by Marcus Heath Showalter. All rights reserved.
*
* Author: Marcus Heath Showalter
* Web: heathshowalter.com
* Email: marcus.h.showalter@gmail.com
* Date: 2014-05-22 05:22 AM
*/

'use strict';
/*jshint indent:4 */

(function ( angular ) {

angular.module('forumApp')

	.directive('brick-wall', function () {
		return {
			controller: function($scope) {
                topicFactory.getList().then(function(response){
					console.log(response.data);
                    if(response.data.status == "ok"){
						scope.bricks = response.data.topics;
						$timeout(function(){
							scope.arrangeTopicList();
						});
                    } else {
                        // Handle Error with retry
                    }
                });
			},
			transclude: true,
			template: '<div class="brick-wall-container"><div ng-transclude></div></div>',
			restrict: 'C',
			link: function(scope, element, attr){
				
			}
		};
	});

	.directive('brick', function () {
		return {
			controller: function($scope) {
         		
			},
			transclude: true,
			template: '<div class="brick-container"><div ng-transclude></div></div>',
			restrict: 'C',
			link: function(scope, element, attr){
				
			}
		};
	});

})( window.angular );