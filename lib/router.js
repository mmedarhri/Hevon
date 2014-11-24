Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});




Router.route('/', {name: 'home'});
Router.route('/user', {name: 'user'});
Router.route('/updateUser', {name: 'updateUser'});
Router.route('/userItem', {name: 'userItem'});
Router.route('/transacs', {name: 'transacsList'});
Router.route('/config', {name: 'configList'});
Router.route('/transfert', {name: 'postTransfer'});
Router.route('/insertUser', {name: 'insertUser'});
Router.route('/contact', {name: 'contactForm'});





var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'usersList'});
