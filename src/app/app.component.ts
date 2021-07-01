import { Component } from '@angular/core';
import {timeout} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'Dynamic title'
  number = 42
  arr = [1, 2, 3]
  obj = { a: 1, b: { c: 2 }  }

  inputValue = ''

  constructor() {
    //
  }

  // onInput(event: KeyboardEvent) {
  //   this.inputValue = (<HTMLInputElement>event.target).value
  // }

  onInput (event: any) {
    this.inputValue = event.target.value
  }

  onBlur (str: string) {
    this.inputValue = str
  }
  onClick() {
    alert( 'Button click! )' )
  }

}
