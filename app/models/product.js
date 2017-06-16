import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  ean: DS.attr('string'),
  basePrice: DS.attr('number'),
  items: DS.hasMany('items', { async: false })
});
