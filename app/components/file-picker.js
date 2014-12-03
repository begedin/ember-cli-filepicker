import Ember from 'ember';

export default Ember.Component.extend({
  setupFilepicker: function() {
    var element = this.$('input')[0];
    this.get('filepicker').then( function(filepicker) {
      element.type="filepicker";
      filepicker.constructWidget(element);
    });
  }.on('didInsertElement'),
});
