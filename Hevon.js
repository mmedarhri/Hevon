if (Meteor.isClient) {
}


if (Meteor.isServer) {

  Meteor.startup(function () {
    process.env.MAIL_URL = "smtp://m.medarhri@gmail.com:Nadia088@smtp.googlemail.com:465"

  });

  simo_users.allow({
    'insert': function () {
      /* user and doc checks ,
       return true to allow insert */
      return true;
    }
  });
}