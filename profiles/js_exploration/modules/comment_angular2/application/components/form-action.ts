import {Component} from 'angular2/core';
import {TwigTranslatePipe} from '../pipes/twig-translate';

@Component({
	selector: 'angular2-form-action',
	templateUrl: '/profiles/js_exploration/themes/baked/templates/container.html.twig',
  pipes: [TwigTranslatePipe]
})
export class FormAction {

	constructor() {
		this.attributes = [
      '',
      'data-drupal-selector="edit-actions"',
      'class="form-actions js-form-wrapper form-wrapper"',
      'id="edit-actions"',
      ''
    ].join(' ');
		this.children = `
<input data-drupal-selector="edit-preview" type="submit" id="edit-preview" name="op" value="{{ 'Preview' | t }}" class="button js-form-submit form-submit">
<input data-drupal-selector="edit-submit" type="submit" id="edit-submit" name="op" value="{{ 'Save' | t }}" class="button button--primary js-form-submit form-submit">
    `;
	}

}
