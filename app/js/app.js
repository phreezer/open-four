/**
* Open Forum
* (c) 2014 by Marcus Heath Showalter. All rights reserved.
*
* Author: Marcus Heath Showalter
* Web: heathshowalter.com
* Email: marcus.h.showalter@gmail.com
* Date: 2014-05-10 06:05 AM
*/

'use strict';

angular.module('forumApp', [
'ngSanitize', 
'ngRoute', 
'heath-responsive'])

.config(function($routeProvider, responsiveHelpProvider, APP_CONFIG) {
    
    $routeProvider.when('/', {
        templateUrl: 'html/pages/main.html',
        controller: 'MainCtrl'
    }).otherwise({
        redirectTo: '/'
    });
    
})
