simo_users = new Mongo.Collection('simo_users');

Schema = {};

ServicesSchema = new SimpleSchema({

    "services.password.bcrypt": {
        type: String,
        autoValue: function () {
            if (this.isUpdate) {
                return Meteor.userId();
            }
        }
    }
});


MailSchema = new SimpleSchema({

    Mail: {
        type: String,
        label: "Mail"
    }
});


CCYSchema = new SimpleSchema({
    eur: {
        type: Number,
        label: "eur"
    },
    usd: {
        type: Number,
        label: "usd"
    },

    gbp: {
        type: Number,
        label: "gbp",
        regEx: /^[0-9]{2,25}$/
    },
    czk: {
        type: Number,
        label: "czk",
        regEx: /^[0-9]{2,25}$/
    }
});

/*simo_users.attachSchema(new SimpleSchema({

    _id : {
        type: String,
        autoValue: function() {
            if (this.isUpdate) {
                return Meteor.userId();
            }
        },
        denyInsert: true,
        optional: false
    },

    Services: {
        type :ServicesSchema,
        denyInsert : true,
        optional : false

    },

        createdAt: {
            type: Date,
            autoValue: function () {
                if (this.isUpdate) {
                    return new Date();
                }
            },
            denyInsert: true,
            optional: false
        },
            Name: {
            type: String,
            label: "Name",
            max: 200
        },

        Surname: {
            type: String,
            label: "Prénom"
        },


        Mail: {
            type: MailSchema,
            label: "Mail"
        },


        CCY: {
            type: CCYSchema,
            label: "CCY"
        },

        BANK: {
            type: String,
            label: "Bank"
        },
        IBAN: {
            type: String,
            label: "IBAN"
        }
}));
*/



Schema.UserCountry = new SimpleSchema({
    name: {
        type: String
    },
    code: {
        type: String,
        regEx: /^[A-Z]{2}$/
    }
});

Schema.UserProfile = new SimpleSchema({
    firstName: {
        type: String,
        regEx: /^[a-zA-Z-]{2,25}$/,
        optional: true
    },
    lastName: {
        type: String,
        regEx: /^[a-zA-Z]{2,25}$/,
        optional: true
    },
    birthday: {
        type: Date,
        optional: true
    }
});

Schema.User = new SimpleSchema({

    profile: {
        type: Schema.UserProfile,
        optional: true
    },

    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },

    createdAt: {
        type: Date
    }
});

simo_users.attachSchema(Schema.User);

Meteor.users.attachSchema(Schema.User);