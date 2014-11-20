Template.userItem.helpers({
  name: function() {
    return _.extend({}, simo_users.findOne({"username": Meteor.user().username}), this).username;
      },
  mail: function() {
    return _.extend({}, simo_users.find({"username": "Mohamed"},{'emails.address':1,'_id':0}),this);
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
