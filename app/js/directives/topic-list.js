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

	.directive('topicList', function ($timeout, topicFactory, responsiveHelp, APP_CONFIG) {
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
				
				scope.getBrickWidth = function(){
					switch(responsiveHelp.getScreenClass()) {
						case 'lg':
							console.log('lg');
							return APP_CONFIG.TOPIC_LIST_BRICK_WIDTH_LG;
						case 'md':
							console.log('md');
							return APP_CONFIG.TOPIC_LIST_BRICK_WIDTH_MD;
						case 'sm':
							console.log('sm');
							return APP_CONFIG.TOPIC_LIST_BRICK_WIDTH_SM;
						case 'xs':
							console.log('xs');
							return APP_CONFIG.TOPIC_LIST_BRICK_WIDTH_XS;
					}
				};
				
				scope.setBrickWidth = function(){
					var brickWidth = scope.getBrickWidth();
					console.log('asdf',brickWidth);
					$('.size11').css({ 'width': brickWidth, 'height': brickWidth });
					$('.size21').css({ 'width': brickWidth * 2, 'height': brickWidth });
					$('.size31').css({ 'width': brickWidth * 3, 'height': brickWidth });
					// BROKEN HERE and in jquery.nested method
					//$(".topic-list").nested().setWidth(brickWidth);
					$(".topic-lit").nested({
						resizeToFit: true,
						resizeToFitOptions: {
							resizeAny: true
						},
						selector: '.topic-brick',
						minWidth: brickWidth,
						gutter: 0
					});
					//console.log($(".topic-list").nested().destroy());
				}
				
				scope.arrangeTopicList = function(){
					$(".topic-list").nested({
						resizeToFit: true,
						resizeToFitOptions: {
							resizeAny: true
						},
						selector: '.topic-brick',
						minWidth: scope.getBrickWidth(),
						gutter: 0
					});
				};
				
				scope.$on('Responsive Breakpoint Changed', function(event, screen){
					if(screen.screenClass !== 'xs' && screen.screenClass !== 'sm'){
						scope.setBrickWidth();
					} else {
						console.log('kill it');
						$(".topic-list").remove();
					}
					
				});
				
			}
		};
	});

})( window.angular );$;$