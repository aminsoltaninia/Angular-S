import { Component, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  //@Output() 
  //recipieLoaded  = new EventEmitter<boolean>();//emit ke mikonim barmigardonim be componente pedaresh ke app hast
  @Output() recipieLoaded: EventEmitter<string> = new EventEmitter<string>() ;
  constructor() { }

  ngOnInit() {
  }
  
  onSelect(value){
      if(value=='recipie'){
        this.recipieLoaded.emit('recipie')
      }
      else
        this.recipieLoaded.emit('shopping-list')
  }
}
