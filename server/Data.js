/**
 * Created by Dean on 07-Mar-16.
 */
Meteor.publish("pickUpClients", function () {
    return FoodProviderClientCollection.find();
});

