/**
* Open Forum
* (c) 2014 by Marcus Heath Showalter. All rights reserved.
*
* Author: Marcus Heath Showalter
* Web: heathshowalter.com
* Email: marcus.h.showalter@gmail.com
* Date: 2014-05-21 01:22 PM
*/

'use strict';
/*jshint indent:4 */

(function ( angular ) {

angular.module('forumApp')

    .directive('windowResizeListener', function() {
        return {
            restrict: "C",
            controller: function($rootScope, $scope, $window, responsiveHelp, APP_CONFIG){
				
				// Determins if the responsive breakpoint has changed after window resized
				$scope.currentBreakPoint;
				
                $scope.onResizeFunction = function() {
					var deviceType = responsiveHelp.getDeviceType()
					var screenClass = responsiveHelp.getScreenClass();
					
                    // Update the config
                    APP_CONFIG.deviceType = deviceType;
                    APP_CONFIG.screenClass = screenClass;
                    
					if($scope.currentBreakPoint !== screenClass){
						$rootScope.$broadcast('Responsive Breakpoint Changed', { screenClass: screenClass });
						$scope.currentBreakPoint = screenClass;
					}
					
                    // Alert anyone listening
                    $rootScope.$broadcast('Window Resized');
                    $rootScope.$broadcast('DeviceType Updated');
                    $rootScope.$broadcast('ScreenClass Updated');
                };

                // Call to the function when the page is first loaded
                $scope.onResizeFunction();

                angular.element($window).bind('resize', function() {
                    $scope.onResizeFunction();
                    $scope.$apply();
                });
            }
        };
    })

})( window.angular );