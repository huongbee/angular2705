import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <h1>Hello</h1>
  //   <h1>Hello</h1>
  // `,
  // styleUrls: ['./app.component.css']
  styles: [
    `
      h1{
        color:red
      }
    `,
    ``
  ]
})
export class AppComponent {
  title = 'angular2705';
  name = 'Angular';
}

/**
 * B1: tao component: ng g c name
 * B2: khai bao:
 *      import ở app.module.ts
 *      thêm: FirstComponent vào declarations
 * B3: sử dụng
 *
 * index.html -> root:AppComponent -> other cpn
 */