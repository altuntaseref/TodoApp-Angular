import {TodoItem} from "./todoitem";

export class Model {
  name: string;
  items: TodoItem[];
  constructor() {
    this.name = "Chero";
    this.items=[
      {description:"kahvaltı",action:true},
      {description:"spor",action:true},
      {description:"alışveriş",action:false},
    ]
  }
}
