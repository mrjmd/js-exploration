import {Component, ViewEncapsulation} from 'angular2/core';
import {TwigTranslatePipe} from '../pipes/twig-translate';
import {CommentsBlock} from './comments-block';
import {FormContainer} from './form-container';

@Component({
	selector: '#block-baked-content > article > div.node__content > section',
	templateUrl: '/profiles/js_exploration/themes/baked/templates/field--comment.html.twig',
	directives: [
		CommentsBlock,
		FormContainer
	],
	host: {
		'class': 'angular2-comment'
	},
	styles: [`
		.angular2-comment {background: lightgoldenrodyellow;}
	`],
  pipes: [TwigTranslatePipe],
	// disable shadow dom for styling
	encapsulation: ViewEncapsulation.None
})
export class CommentSection {

	constructor() {
		this.label = "{{ 'comments' | t }}";
		this.comments = '<angular2-comment></angular2-comment>';
		this.comment_form = '<angular2-form-container></angular2-form-container>';
	}

}
