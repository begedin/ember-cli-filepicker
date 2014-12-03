import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('file-picker', 'FilePickerComponent with mock filepicker api', {
  setup: function() {
    var api = {
      constructWidget: function(element) {}
    };
    var filepicker = new Ember.RSVP.Promise(function(resolve) { resolve(api); });
    this.subject({ filepicker: filepicker });
  }
});


test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');

});

test('it sets input type to filepicker', function() {
  equal(this.$().find('input').attr('type'), 'filepicker');
});

test('it passes input element to constructWidget', function() {
  // TODO: Verify this somehow
  ok(true);
});
