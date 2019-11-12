import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipieShow : Boolean = true;
  
  onNavigation(event){
      console.log(event); 
      if(event == 'recipie'){
        this.recipieShow = true;//hala az in dakhele valedesh bahre mibarim ba ngIf
      }
      else
        this.recipieShow= false; 
  }
}
