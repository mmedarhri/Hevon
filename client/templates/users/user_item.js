Template.userItem.helpers({
  name: function() {
    return _.extend({}, simo_users.findOne({"username": Meteor.user().username}), this).username;
      }
/*
  address: function() {
    return _.extend({}, simo_users.findOne({"username": Meteor.user().username}), this).address;
  },

  bank: function() {
    return _.extend({}, simo_users.findOne({"username": Meteor.user().username}), this).bank;
  },

  iban: function() {
    return _.extend({}, simo_users.findOne({"username": Meteor.user().username}), this).iban;
  }*/
});
