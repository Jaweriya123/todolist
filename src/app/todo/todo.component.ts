import { Component, OnInit } from '@angular/core';
import { toEditorSettings } from 'typescript';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}
  name1:string;
  item:any;
  selected:boolean;

 
    items =[
      {
        'name':'javera',
        'selected':false,
        'editing':false
      },
      {
        'name':'rimsha',
        'selected':false,
        'editing':false
      }
    ];
  
    addvalue(textValue:string) {
      if(textValue){
       this.items.push({ name:this.name1, selected:false, editing:false});
       this.name1= ''; 
      }
  }

  
  removevalue(name: string){
    this.items= this.items.filter(item => item.name!== name)
  }

deleteSelected() {
  for(var i=(this.items.length-1); i>-1 ; i--){
    if(this.items[i].selected){
      this.items.splice(i, 1);
    }
  }
}

  edit(item):void{
      item.editing=true
  }
  done_edit(item):void{
       item.editing=false
  }
      
}
 