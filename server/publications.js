Meteor.publish('simo_users', function() {
  return simo_users.find();
});


Meteor.publish('simo_transacs', function() {
  return simo_transacs.find();
});


Meteor.publish('ibox_configuration', function() {
  return configuration.find();
});