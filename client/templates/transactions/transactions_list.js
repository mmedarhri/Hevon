Template.transacsList.helpers({
    simo_transacs: function() {
        return simo_transacs.find({}, {sort: Session.get("sort_order")});
    }
});



