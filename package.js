Package.describe({
  name: "yogiben:admin",
  summary: "A complete admin dashboard solution",
  version: "1.2.0",
  git: "https://github.com/yogiben/meteor-admin"
});

Package.on_use(function(api){

  both = ['client','server']

  api.versionsFrom('METEOR@1.0');

  api.use(
    ['iron:router@1.0.9',
    'coffeescript',
    'underscore',
    'reactive-var',
    'aldeed:collection2@2.3.3',
    'aldeed:autoform@5.3.0',
    'aldeed:template-extension@3.4.3',
    'alanning:roles@1.2.13',
    'raix:handlebar-helpers@0.2.4',
    'reywood:publish-composite@1.3.6',
    'momentjs:moment@2.10.3',
    'aldeed:tabular@1.2.0',
    'meteorhacks:unblock@1.1.0',
    'zimme:active-route@2.0.0'
    ],
    both);

  api.use(['less','session','jquery','templating'],'client')

  api.use(['email'],'server')

  api.add_files([
    'lib/both/AdminDashboard.coffee',
    'lib/both/router.coffee',
    'lib/both/utils.coffee',
    'lib/both/startup.coffee',
    'lib/both/collections.coffee'
    ], both);

  api.add_files([
    'lib/client/html/admin_templates.html',
    'lib/client/html/admin_widgets.html',
    'lib/client/html/admin_layouts.html',
    'lib/client/html/admin_sidebar.html',
    'lib/client/html/admin_header.html',
    'lib/client/css/admin-custom.less',
    'lib/client/js/admin_layout.js',
    'lib/client/js/helpers.coffee',
    'lib/client/js/templates.coffee',
    'lib/client/js/events.coffee',
    'lib/client/js/slim_scroll.js',
    'lib/client/js/autoForm.coffee',
    'lib/client/js/app.js'
    ], 'client');

  api.add_files([
    'lib/server/publish.coffee',
    'lib/server/methods.coffee'
    ], 'server');

  api.add_files([
    'lib/client/css/AdminLTE.min.css',
    'lib/client/css/skins/skin-black-light.min.css',
    'lib/client/css/skins/skin-black.min.css',
    'lib/client/css/skins/skin-blue-light.min.css',
    'lib/client/css/skins/skin-blue.min.css',
    'lib/client/css/skins/skin-green-light.min.css',
    'lib/client/css/skins/skin-green.min.css',
    'lib/client/css/skins/skin-purple-light.min.css',
    'lib/client/css/skins/skin-purple.min.css',
    'lib/client/css/skins/skin-red-light.min.css',
    'lib/client/css/skins/skin-red.min.css',
    'lib/client/css/skins/skin-yellow-light.min.css',
    'lib/client/css/skins/skin-yellow.min.css'
  ], 'client', { isAsset: true });

  api.export('AdminDashboard',both)
});
