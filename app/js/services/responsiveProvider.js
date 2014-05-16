/**
* ECO-League.com
* (c) 2014 by Marcus Heath Showalter. All rights reserved.
*
* Author: Marcus Heath Showalter
* Web: heathshowalter.com
* Email: marcus.h.showalter@gmail.com
* Date: 2014-05-12 01:30 AM
*/

(function(angular) {
    
    'use strict';
    
    angular.module('heath-responsive', []).provider('responsiveHelp', ["$windowProvider",
        function($windowProvider) {
            // Gather winWidth and smartDevice information only 1x at app startup...
            var $window = $windowProvider.$get();

            var helper = {
                isExtraSmall: function() {
                    return (getSmallestScreenSize($window) < 768);
                },
                isSmall: function() {
                    return (getSmallestScreenSize($window) >= 768 && getSmallestScreenSize($window) < 992);
                },
                isMedium: function() {
                    return (getSmallestScreenSize($window) >= 992 && getSmallestScreenSize($window) < 1200);
                },
                isLarge: function() {
                    return (getSmallestScreenSize($window) >= 1200);
                },
                getScreenClass: function() {
                    var screenClass = 'lg';
                    // Determine Screen Size Class [lg, md, sm, xs]
                    if(this.isExtraSmall()) {
                        screenClass = 'xs';
                    } else if(this.isSmall()) {
                        screenClass = 'sm';
                    } else if(this.isMedium()) {
                        screenClass = 'md';
                    }
                    return screenClass;
                },
                getDeviceType: function() {
                    // Default Settings
                    var deviceType = 'Desktop';

                    // Determine device type [Desktop, Mobile]
                    if(this.isSmartDevice){
                        deviceType = 'Mobile';
                    }
                    return deviceType;
                },
                winWidth: getSmallestScreenSize($window),
                isSmartDevice: isSmartDevice($window)
            };
            // Publish accessor function...
            this.$get = function() {
                return helper;
            };
        }])

    .directive('windowResizeListener', function() {
        return {
            restrict: "C",
            controller: function($rootScope, $scope, $window, responsiveHelp, APP_CONFIG){

                $scope.onResizeFunction = function() {
                    // Update the config
                    APP_CONFIG.deviceType = responsiveHelp.getDeviceType();
                    APP_CONFIG.screenClass = responsiveHelp.getScreenClass();
                    
                    // Alert anyone listening
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
    
    function isSmartDevice( $window )
    {
        var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
        // Check for mobile devices
        return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
    }

    // Emulators and some devices may lie about the window size but not the screen size so use the smallest value possible
    function getSmallestScreenSize($window) {
        var arr = [$window['outerWidth'], $window['screen'].availWidth, $window['screen'].width];
        arr.sort(function(a, b){return a-b});    // sort by lowest screen size first
        return arr[0];    // return lowest screensize
    }
    
})(window.angular);