/* global filepicker */
import injectScript from 'ember-inject-script';
// import config from 'your-app/config/environment';
import config from '../config/environment';

export default {
  name: 'typekit',
  initialize: function() {
  }
};

export function initialize(container, application) {
  var url = "//api.filepicker.io/v1/filepicker.js";
  var promise = injectScript(url).then(function() {
    filepicker.setKey(config.FILEPICKER_API_KEY);
    return filepicker;
  });
  application.register('ember-cli-filepicker:api', promise, {instantiate: false});
  application.inject('component:file-picker', 'filepicker', 'ember-cli-filepicker:api');
};

export default {
  name: 'file-picker',
  initialize: initialize
};
