/**
* ECO-League.com
* (c) 2014 by Marcus Heath Showalter. All rights reserved.
*
* Author: Marcus Heath Showalter
* Web: heathshowalter.com
* Email: marcus.h.showalter@gmail.com
* Date: 2014-05-14 06:38 AM
*/

angular.module('forumApp')

.constant('APP_CONFIG',{
    'APP_VERSION' : '0.1',
    'ANIMATION_SPEED_FAST' : 300,
    'ANIMATION_SPEED_NORMAL' : 400,
    'ANIMATION_SPEED_SLOW' : 800,
    'JSON_MENU_URL': 'json/menu.json',
    'JSON_ACCOUNT_URL': 'json/account-status.json',
    'JSON_HEADER_URL': 'json/header.json',
    'JSON_USER_PROFILE_URL': 'json/user-profile.json',
    'JSON_USER_STATS_URL' : 'json/user-stats.json',
    'LOGIN_STATUS' : false,
    'LOGIN_SUBMIT_URL' : '',
    'LOGOUT_URL' : '',
    'FORUM_PAGINATE' : true,
    'FORUM_PGNT_DISPLAY_LIMIT' : 20,
    'FORUM_PGNT_PAGE_INCREMENT' : 10,
    'FORUM_INFINATE_SCROLL' : false,
    'FORUM_INF_DISPLAY_LIMIT' : 20,
    'FORUM_INF_LOAD_LIMIT' : 500
})

.config( function(responsiveHelpProvider, APP_CONFIG) {
    var responsiveHelper = responsiveHelpProvider.$get();
    /*
    // Default Settings
    APP_CONFIG.DEVICE = 'Desktop';
    APP_CONFIG.SCREEN_CLASS = 'lg';

    // Determine device type [Desktop, Mobile]
    if(responsiveHelper.isSmartDevice){
        APP_CONFIG.DEVICE = 'Mobile';
    }
    
    // Determine Screen Size Class [lg, md, sm, xs]
    if(responsiveHelper.isExtraSmall()) {
        APP_CONFIG.SCREEN_CLASS = 'xs';
    } else if(responsiveHelper.isSmall()) {
        APP_CONFIG.SCREEN_CLASS = 'sm';
    } else if(responsiveHelper.isMedium()) {
        APP_CONFIG.SCREEN_CLASS = 'md';
    }
    */
});