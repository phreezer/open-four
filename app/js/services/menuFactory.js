/**
* ECO-League.com
* (c) 2014 by Marcus Heath Showalter. All rights reserved.
*
* Author: Marcus Heath Showalter
* Web: heathshowalter.com
* Email: marcus.h.showalter@gmail.com
* Date: 2014-05-10 06:01 PM
*/

'use strict';
/*jshint indent:4 */


angular.module('forumApp')
    .factory('menuFactory', function($http, APP_CONFIG){
        var menu = [];
        var sortData = function(data){
            // Root Menu
            if(!menu[0]){
                angular.forEach(data, function(value, index){
                    if(value.parent === 0){
                        // Create Root Level Menu Item
                        menu.push(value);
                    } else {
                        // Add Any Submenu Item of any tier so long as the 
                        // parent and submenu items were loaded in order or it will break
                        traverse(menu,value);
                    }
                });
            }
            return menu;
        }
        
        function traverse(data,menuItem) {
            for (var i in data) {
                if(menuItem.parent && data[i].uid === menuItem.parent){
                    if(data[i].submenu){
                        data[i].submenu.push(menuItem);
                    } else {
                        data[i].submenu = [];
                        data[i].submenu.push(menuItem);
                    }
                    
                    return true;
                } else {
                    if (data[i].submenu !== null && typeof(data[i].submenu)=="object") {
                        if(traverse(data[i].submenu, menuItem)){
                            return true;
                        }
                    }
                }
            }
        }
        
        return {
            get : function(params){
                return $http.get(APP_CONFIG.JSON_MENU_URL, {
                    params : params
                }).then(function(result){
                    if(!menu[0]){
                        // First Load
                        result = sortData(result.data.menu);
                    } else {
                        // Load from Memory
                        result = menu;
                    }
                    return result;
                });
            }
        }
    });