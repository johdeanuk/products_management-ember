import { test } from 'qunit';
import moduleForAcceptance from 'products-management-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list-products');

test('should show products as the home page', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/product', 'should redirect automatically');
  });
});

test('should link to the items page under products', function (assert) {
  visit('/');
  click('a:contains("Game or something")');
  andThen(function() {
    assert.equal(currentURL(), '/items', 'should navigate to the items page');
  });
});
//
// test('should link to contact information.', function (assert) {
// });
//
// test('should list available rentals.', function (assert) {
// });
//
// test('should filter the list of rentals by city.', function (assert) {
// });
//
// test('should show details for a selected rental', function (assert) {
// });
