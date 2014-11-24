Template.updateUser.helpers({

    simo_users : function(){
        return simo_users;
    },

    name: function() {
        return simo_users.findOne({"username": "Mohamed"}).profile.name;
    },


    mail: function() {
        return simo_users.findOne({"username": "Mohamed"}).emails[0].address;
    },

    address: function() {
        return simo_users.findOne({"username": "Mohamed"}).profile.address;
    },

    IBAN: function() {
        return simo_users.findOne({"username": "Mohamed"}).profile.IBAN;
    },

    bank: function() {
        return simo_users.findOne({"username": "Mohamed"}).profile.bank;
    },

    ccyEuros: function() {
        return simo_users.findOne({"username": "Mohamed"}).profile.ccy.eur;
    },

    ccyUSD: function() {
        return simo_users.findOne({"username": "Mohamed"}).profile.ccy.usd;
    },

    ccyGBP: function() {
        return simo_users.findOne({"username": "Mohamed"}).profile.ccy.gbp;
    },

    ccyCZK: function() {
        return simo_users.findOne({"username": "Mohamed"}).profile.ccy.czk;
    }
});
