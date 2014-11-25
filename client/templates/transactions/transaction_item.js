Template.userItem.helpers({

    total: function() {
        return simo_transacs.find().count();
    },

    _id: function() {
        return this._id;
    },
    id_user:function() {
        return this.id_user;
    },
    amount_from:function() {
        return this.amount_from;
    },
    ccy_from:function() {
        return this.ccy_from;
    },
    ccy_to:function() {
        return this.ccy_to;
    },
    date_creation:function() {
        return this.date_creation;
    },
    status:function() {
        return this.status;
    }
});
