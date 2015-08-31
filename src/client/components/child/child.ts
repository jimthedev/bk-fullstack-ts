/// <reference path="../../../../typings/angular2/angular2.d.ts" />

import { Component, View, bootstrap } from 'angular2/angular2';
import { API } from 'services/api';

// Annotation section
@Component({
  selector: 'child',
  bindings: [API]
})
@View({
  templateUrl: 'components/child/child.html'
})
// Component controller
export class Child {
  name: string;
  books: Array<any>;

  constructor(api: API) {
    this.name = 'YAY!!!!!';
    this.books = [];
    api.getBooks()
    .then(r => r.json())
    .then(r => {
       this.books = r;
       console.log(this.books);
    });
  }
}
