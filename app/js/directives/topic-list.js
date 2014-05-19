/**
* Open Forum
* (c) 2014 by Marcus Heath Showalter. All rights reserved.
*
* Author: Marcus Heath Showalter
* Web: heathshowalter.com
* Email: marcus.h.showalter@gmail.com
* Date: 2014-05-17 02:08 PM
*/
(function ( angular ) {
    
'use strict';

angular.module('forumApp')

	.directive('topicList', function ($timeout, topicFactory, responsiveHelp) {
		return {
			controller: function($scope) {
                $scope.bricks = [];
				
				// Add topic to users favorites
				$scope.addFav = function(id, event){
					event.preventDefault();
					topicFactory.setFav(id);
				};
			},
			templateUrl: 'html/directives/topic-list.html',
			restrict: 'C',
			link: function(scope, element, attrs){
				
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
				
				scope.arrangeTopicList = function(){
					$(".topic-list").nested({
						selector: '.topic-brick',
						minWidth: 256,
						gutter: 0
					});
				}
				
			}
		};
	});

})( window.angular );$