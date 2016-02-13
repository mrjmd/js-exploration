import {Component} from 'angular2/core';
import {BaseComment} from '../base/comment';
import {UserProfile} from './user-profile';
import {Author} from './author';
import {ContentLinks} from './content-links';
import {Content} from './content';

@Component({
	selector: 'angular2-comment',
	templateUrl: '/profiles/js_exploration/themes/baked/templates/comment.html.twig',
	directives: [
		UserProfile,
		Author,
		ContentLinks,
		Content
	]
})
export class CommentsBlock extends BaseComment {

	constructor() {
		super();

		this.status = 'published';

		this.comment = {
			owner: {
				anonymous: false
			}
		};

		this.user_picture = '<angular2-user-picture></angular2-user-picture>';

		this.author = '<angular2-author></angular2-author>';

		this.created = '2 days ago';

		this.title = 'My feedback';

		this.content = {
			links: {
				toString: () => '<angular2-content-links></angular2-content-links>'
			},
			toString: () => '<angular2-content></angular2-content>'
		};


	}

}
