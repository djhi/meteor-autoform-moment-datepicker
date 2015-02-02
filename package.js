Package.describe({
  name: 'gildaspk:autoform-moment-datepicker',
  summary: 'Moment datepicker for AutoForm',
  version: '0.0.1',
  git: 'https://github.com/gildaspk/meteor-autoform-moment-datepicker.git'
});

Package.onUse(function(api) {
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('aldeed:autoform@4.0.0');
  api.use('gildaspk:moment-datepicker@0.0.1');
  api.addFiles([
    'autoform-moment-datepicker.html',
    'autoform-moment-datepicker.js'
  ], 'client');
});
