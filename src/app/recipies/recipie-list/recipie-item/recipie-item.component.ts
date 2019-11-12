import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Recipie } from 'src/app/shared/models/recipies.model';


@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {
  @Input() recipie: Recipie
  @Output() selectedRecipie = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSelectRecipie(){// bayad ba output  befrestimesh aghb
     this.selectedRecipie.emit(this.recipie)
  }
}
