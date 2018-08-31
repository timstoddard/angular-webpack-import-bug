import { Component } from '@angular/core';
import { foo } from './foo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-wpe';

  constructor() {
    // COMMENT OUT THE FOLLOWING LINE TO RESOLVE THE COMPILATION ERROR
    const a: string = 2;
    foo();
  }
}
