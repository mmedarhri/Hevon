Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'usersList'});
Router.route('/transacs', {name: 'transacsList'});
Router.route('/config', {name: 'configList'});
