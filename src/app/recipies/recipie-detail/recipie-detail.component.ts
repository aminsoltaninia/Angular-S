import { Component, OnInit, Input } from '@angular/core';
import{Recipie}from "../../shared/models/recipies.model"
@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {
  @Input() recipieToDetail = Recipie
  constructor() { }

  ngOnInit() {
  }

}
