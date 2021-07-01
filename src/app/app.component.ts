import { Component } from '@angular/core';
import {timeout} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'Title';

  onInput( event: any ){
    this.title = event.target.value;
  }

}
