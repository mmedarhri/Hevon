Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'usersList'});
Router.route('/transacs', {name: 'transacsList'});
Router.route('/config', {name: 'configList'});
