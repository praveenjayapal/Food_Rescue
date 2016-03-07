/**
 * Created by Dean on 3/1/2016.
 */
angular
    .module('Whatsapp')
    .controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope, $reactive) {
    $reactive(this).attach($scope);
    this.home_data = "Welcome"
}