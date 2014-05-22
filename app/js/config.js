/**
* Open Forum
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
    'API_ACCOUNT_URL': 'json/account-status.json',
    'API_HEADER_URL': 'json/header.json',
	'API_TOPIC_LIST_URL': 'json/topic-list.json',
    'API_USER_PROFILE_URL': 'json/user-profile.json',
	'API_USER_STATS_URL' : 'json/user-stats.json',
    'LOGIN_STATUS' : false,
    'LOGIN_SUBMIT_URL' : '',
    'LOGOUT_URL' : '',
    'FORUM_PAGINATE' : true,
    'FORUM_PGNT_DISPLAY_LIMIT' : 20,
    'FORUM_PGNT_PAGE_INCREMENT' : 10,
    'FORUM_INFINATE_SCROLL' : false,
    'FORUM_INF_DISPLAY_LIMIT' : 20,
    'FORUM_INF_LOAD_LIMIT' : 500,
	'TOPIC_LIST_BRICK_WIDTH_LG' : 294,
	'TOPIC_LIST_BRICK_WIDTH_MD' : 244,
	'TOPIC_LIST_BRICK_WIDTH_SM' : 250,
	'TOPIC_LIST_BRICK_WIDTH_XS' : 256
})

.config( function(responsiveHelpProvider, APP_CONFIG) {
    
    var responsiveHelper = responsiveHelpProvider.$get();

});