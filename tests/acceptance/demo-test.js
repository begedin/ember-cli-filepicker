/* global waitForPromise */
/* global waitForElement */

import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

Ember.Test.registerAsyncHelper('waitForPromise', function(app, name) {
  return new Ember.Test.promise(function(resolve) {
    Ember.Test.adapter.asyncStart();
    var promise = app.__container__.lookup(name);
    promise.then(function(){
      Ember.run.schedule('afterRender', null, resolve);
      Ember.Test.adapter.asyncEnd();
    });
  });
});

Ember.Test.registerAsyncHelper('waitForElement', function(app, selector, timeout) {
  var elapsed = 0;
  timeout = timeout || 100;
  return new Ember.Test.promise(function(resolve, reject) {
    Ember.Test.adapter.asyncStart();
    var tick = function() {
      if (find(selector).length > 0) {
        Ember.run.schedule('afterRender', null, resolve);
        Ember.Test.adapter.asyncEnd();
      } else {
        if (elapsed > timeout) {
          throw("waitForElement: timed out waiting for " + selector);
        } else {
          elapsed += 10;
          Ember.run.later(this, tick, 10);
        }
      }
    }();
  });
});

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
    expectNoElement('.fpfile');
  });
});

test('demo page shows file stats after upload', function() {
  visit('/');
  waitForPromise("ember-cli-filepicker:api");
  clickComponent('file-picker', 'button');
  waitForElement('.fpfile');
  andThen(function() {
    expectElement('.fpfile', 1);
  });
});
