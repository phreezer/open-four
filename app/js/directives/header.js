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
	.directive('header', function () {
		return {
			controller: function($rootScope, $scope, $http, headerFactory, accountFactory) {
                
                // Hide Account Container until the data is parsed to prevent odd template rendering
                $scope.showAccountContainer = false;
                
                headerFactory.get().then(function(response){
                    if(response.data.status == "ok"){
                        $scope.headerMenu = response.data.menu;
                    } else {
                        // Handle Error with retry
                    }
                });
                
                accountFactory.getStatus().then(function(response){
                    if(response.data.status == "ok"){
                        
                        $rootScope.loginStatus = true;
                        
                        validateStatusResponse(response.data.account);
                    } else {
                        $rootScope.loginStatus = false;
                    }
                });
                
                var validateStatusResponse = function (account){
                    // displayName is a Required Property
                    if(checkDisplayName(account.displayName)){
                        $scope.account = account;
                        $rootScope.loginStatus = true;
                    } else {
                        $rootScope.loginStatus = false;
                    }
                    // Ready to display the template
                    $scope.showAccountContainer = true;
                }
                
                var checkDisplayName = function(name){
                    if(name !== undefined){
                        return true;
                    } else {
                        return false;
                    }
                };
                
                var checkAvatarURL = function(url){
                    if(url){
                        return url;
                    } else {
                        url = "img/defaults/avatar.png";
                        return url;
                    }
                };
                
                
			},
			templateUrl: 'html/directives/header.html',
			restrict: 'C'
		};
	});

})( window.angular );