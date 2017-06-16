import DS from 'ember-data';

export default DS.Model.extend({
  product: DS.belongsTo('product'),
  salesPrice: DS.attr('number'),
  status: DS.attr('number')
});
