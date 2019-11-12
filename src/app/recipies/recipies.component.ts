import { Component, OnInit } from '@angular/core';
import{Recipie} from "../shared/models/recipies.model"

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
  recipie = Recipie
  constructor() { }

  ngOnInit() {
  }
   
  onRecipieSelected(event){
     console.log("event in recipies is :",event);
     this.recipie = event
  }
}
