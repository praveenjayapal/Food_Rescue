/**
 * Created by Dean on 3/1/2016.
 */
angular.module('Whatsapp', [
        'angular-meteor',
        'ionic',
        "accounts.ui"
    ]);

if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
}

else {
    angular.element(document).ready(onReady);
}

function onReady() {
    angular.bootstrap(document, ['Whatsapp']);
}

Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});
