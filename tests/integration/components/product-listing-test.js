import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

let product = Ember.Object.create({
  name: 'test-name',
  ean: 'test-ean',
  basePrice: 10
});

moduleForComponent('product-listing', 'Integration | Component | product listing', {
  integration: true
});

test('should display product details', function(assert) {
  this.set('productObj', product);
  this.render(hbs`{{product-listing product=productObj}}`);
  assert.equal(this.$('.listing h3').text(), 'test-name', 'Title: test-name');
  //assert.equal(this.$('.lisitng .ean').text().trim(), 'EAN: test-ean');
  //assert.equal(this.$('.lisitng .basePrice').text().trim(), 'Base Price: 10');
});
//
// test('it renders', function(assert) {
//
//   // Set any properties with this.set('myProperty', 'value');
//   // Handle any actions with this.on('myAction', function(val) { ... });
//
//   this.render(hbs`{{product-listing}}`);
//
//   assert.equal(this.$().text().trim(), '');
//
//   // Template block usage:
//   this.render(hbs`
//     {{#product-listing}}
//       template block text
//     {{/product-listing}}
//   `);
//
//   assert.equal(this.$().text().trim(), 'template block text');
// });
