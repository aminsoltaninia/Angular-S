import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipie } from '../../shared/models/recipies.model';


@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  @Output() recipieSelected: EventEmitter<Recipie> = new EventEmitter<Recipie>()
  recipies : Recipie[] = [
       new Recipie('دستور 1','1 دستور  تست','http://cdn-tehran.wisgoon.com/dlir-s3/10531512022573892230.jpg'),
       new Recipie('دستور 2','دستور  تست 2 ','http://cdn-tehran.wisgoon.com/dlir-s3/10531512022573892230.jpg'),
       new Recipie('دستور 3',' 3 دستور  تست','http://cdn-tehran.wisgoon.com/dlir-s3/10531512022573892230.jpg')
  ] 

  constructor() { }

  ngOnInit() {
  }
  onEntekhabrecipie(event){
    console.log('event in recipielist :' ,event)
    this.recipieSelected.emit(event)
  }
}
