Template.Total_Transacs.helpers({
    total: function() {
        return simo_transacs.find().count();
    }
});