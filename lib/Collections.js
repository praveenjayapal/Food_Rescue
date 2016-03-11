/**
 * Created by Dean on 07-Mar-16.
 */
FoodProviderClientCollection = new Mongo.Collection("pickUpClients");

Meteor.methods({

    addfoodproviderClient: function (Client_Name, Address, Phone_Number, Email) {
        FoodProviderClientCollection.insert(
            {
                "clientName": Client_Name,
                "contact": {
                    "phone_number": Phone_Number,
                    "email": Email,
                    "address": Address
                },
                "food_distributed": {}
            });
    },

    addPickUpDetailsToClient: function (Client_ID, jobdetails) {
        FoodProviderClientCollection.update({_id: Client_ID}, {$push: {'food_distributed': jobdetails}})
    }
})
;
