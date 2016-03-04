/**
 * Created by Dean on 3/1/2016.
 */

if (Meteor.isCordova) {
    angular
        .module('Whatsapp')
        .config(mobile_config);
}
else {
    angular
        .module('Whatsapp')
        .config(web_config);
}


function mobile_config($stateProvider, $urlRouterProvider) {
    // Conditional to check if the app should be a mobile app.
    // Or a web browser app.
    $stateProvider
        .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'client/templates/mobile/tabs.html'
        })

        .state('tab.chats', {
            url: '/chats',
            views: {
                'tab-chats': {
                    templateUrl: 'client/templates/mobile/chats.html',
                    controller: 'ChatsCtrl as chats'
                }
            }
        })

        .state('tab.home', {
            url: '/home',
            views: {
                'tab-home': {
                    templateUrl: 'client/templates/mobile/home.html',
                    controller: 'HomeCtrl as home'
                }
            }
        });

    $urlRouterProvider.otherwise('tab/home');
}

function web_config($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'client/templates/mobile/tabs.html'
        })

        .state('tab.chats', {
            url: '/chats',
            views: {
                'tab-chats': {
                    templateUrl: 'client/templates/mobile/chats.html',
                    controller: 'ChatsCtrl as chats'
                }
            }
        })

        .state('tab.home', {
            url: '/home',
            views: {
                'tab-home': {
                    templateUrl: 'client/templates/mobile/home.html',
                    controller: 'HomeCtrl as home'
                }
            }
        });

    $urlRouterProvider.otherwise('tab/home');

}