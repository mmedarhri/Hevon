Template.user.helpers({
  simo_user: function(id) {
    return simo_users.findOne({username:id});
  }
});