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
			controller: function($scope, $http, menuFactory, responsiveHelp) {
                
                $scope.device = responsiveHelp;
                $scope.menu = {};
                $scope.submenu = {};
                $scope.activeMenu;
                $scope.previousMenu = false;
                
                menuFactory.get().then(function(data) {
                    $scope.menu = data;
                });
                
                $scope.setActiveMenu = function(id) {
                    if(id === 0){
                        $scope.activeMenu = false;
                    } else {
                        if($scope.getSubmenu(id)){
                            $scope.activeMenu = id;
                        }
                    }
                }
                
                $scope.getSubmenu = function(id){
                    var findSubmenu = traverse($scope.menu, id);
                    if(findSubmenu.submenu){
                        $scope.previousMenu = findSubmenu.previous;
                        $scope.submenu = findSubmenu.submenu;
                        return true;
                    } else {
                        return false;
                    }
                }
                
                function traverse(data, id) {
                    var found = {};
                    for (var i in data) {
                        if(data[i].uid === id){
                            return { 'submenu':data[i].submenu, 'previous': data[i].parent};
                        } else {
                            if (data[i].submenu !== null && typeof(data[i].submenu)=="object") {
                                found = traverse(data[i].submenu, id);
                                if(found){
                                    return found;
                                }
                            }
                        }
                    }
                }
                
			},
			templateUrl: 'html/directives/menu.html',
			restrict: 'C'
		};
	});

})( window.angular );