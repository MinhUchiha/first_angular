import { Author } from '../author/author'
export class Post{
  _content: String;
  _author: Author = new Author("");
  constructor(content: String){
    this.content = content;
  }

  get content(){
    return this._content;
  }
  set content(content: String){
    this._content = content;
  }
  get author(){
    return this._author;
  }
  set author(author: Author){
    this._author = author;
  }
}
