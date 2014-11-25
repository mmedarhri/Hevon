
if (Meteor.isClient) {
    Meteor.startup(function() {
      Session.set("sort_order", {date_creation: -1, amount_from: 1});
    });

    Meteor.subscribe('currencies');
    setTimeout(function() {
        Session.setDefault("curr", "USD");
        Session.setDefault("units", "ounces");
    }, 100);
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



    Meteor.startup(function() {

        // Set "oeapikey" in your code

        var oeapikey = "b9c6233ecf2d4993aefe27b079d8dd88";

        // OpenExchangerates URL (default for non-HTTPS free plan)
        if (!oeurl) {
            var oeurl = "http://openexchangerates.org/api/latest.json?app_id=";
        }

        Meteor.setInterval(function() {
            var ctime = Math.round(Date.now() / 1000);
            var lasto = Currencies.findOne({});
            var since = (lasto && lasto.timestamp) ? ctime - lasto.timestamp : ctime;

            if (since > 21600) { // Every 6 hours

                HTTP.post(oeurl + oeapikey, {}, function(error, result) {
                    if (!error) {
                        Currencies.remove({});
                        Currencies.insert(result.data);
                    }
                });

            } // end if
        }, 1000); // Check every 1 minute

    });

}