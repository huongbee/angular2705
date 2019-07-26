import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name: string;
  age: number;
  constructor() { }

  ngOnInit() {
  }
  getDataInput(input) {
    this.name = input.value;
  }
  getData(age) {
    this.age = isNaN(age.value) ? 0 : age.value;
  }

}
