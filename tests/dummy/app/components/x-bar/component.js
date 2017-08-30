import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  title: 'Default Title',
  description: 'Default Description',
  showBorder: true,
  isVisible: true,
  isTasteful: false
});