import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
  keyboard: inject(),
  options: computed(() => ['One', 'Two', 'Three']),
  change: () => {},

  init() {
    this._super(...arguments);
    this.get('keyboard'); // Comment out this line to see autofocus magically work again
  },
});
