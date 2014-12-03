import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Demo', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('file-picker component demo', function() {
  visit('/');

  andThen(function() {
    expectComponent('file-picker');
  });

  // TODO: Figure out how to wait for filepicker api to have loaded
  // before trying to click on the button...
  // debugger;
  // clickComponent('file-picker', 'button');

});
