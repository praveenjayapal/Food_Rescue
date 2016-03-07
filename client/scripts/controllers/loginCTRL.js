/**
 * Created by Dean on 06-Mar-16.
 */
angular
    .module('Whatsapp')
    .controller('LoginCtrl', LoginCtrl);

function LoginCtrl($scope, $reactive) {
    $reactive(this).attach($scope);
    this.home_data = "Welcome";

    this.login = login;

    function login() {
        var emailVar = $('#email-form').value;
        var passwordVar = $('#password-form').value;
        console.log(emailVar, passwordVar);
        Meteor.loginWithPassword(emailVar, passwordVar, function (err) {
            if (err) {
                console.log(err)
            }
        });

    }


}