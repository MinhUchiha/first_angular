export class Author{
  _name: String;
  age = 12;
  constructor(name: String){
    this.name = name;
  }
  get name(){
    return this._name;
  }
  set name(name: String){
    this._name = name;
  }
}
