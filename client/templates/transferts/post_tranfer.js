Template.postTransfer.created = function() {
  Session.set('postSubmitErrors', {});
}

Template.postTransfer.helpers({
  errorMessage: function(field) {
    return Session.get('postSubmitErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '';
  },

  currDropdown: function(id,cls) {
    if (!id) { id = "currency"; }
    if (!cls) { cls = "form-control"; }

    var html = "<select id='"+id+"' name='"+id+"' class='"+cls+"'>";
    for (var k in currencies) {
      if (Session.get("curr") === k) { html += "<option value='" + k + "' selected>" + currencies[k][2] + "</option>"; }
      else { html += "<option value='" + k + "'>" + currencies[k][2] + "</option>"; }
    }
    html += "</select>";
    return html;
  }

});

Template.postTransfer.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var post = {
      amount_sent: $(e.target).find('[name=amount_sent]').val(),
      amount_received: $(e.target).find('[name=amount_received]').val()
    };
    
    var errors = validatePost(post);
    if (errors.amont_sent || errors.amont_received)
      return Session.set('postSubmitErrors', errors);
    
    Meteor.call('postInsert', post, function(error, result) {
      // display the error to the user and abort
      if (error)
        return throwError(error.reason);
      
      // show this result but route anyway
      if (result.postExists)
        throwError('This link has already been posted');
      
      Router.go('postPage', {_id: result._id});  
    });
  }
});