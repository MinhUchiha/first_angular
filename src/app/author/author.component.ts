import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Author } from './author';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  author = new Author("");
  authorlist = [
    new Author("Tim"),
    new Author("Jack"),
    new Author("Kyuubi"),
    new Author("Zet")
  ];
@Output('select-author') change = new EventEmitter();
  constructor() {
  }
  ngOnInit() {
  }

  emitChangeValue(event) {
    this.change.emit(event);
  }

}
