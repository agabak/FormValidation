import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
model: any = {};
items: any[] = [
  {id: 1, name: 'Mr'},
  {id: 2, name: 'Mrs'},
  {id: 3, name: 'Miss'},
  {id: 4, name: 'Mr'}
];
  constructor() { }

  ngOnInit() {
  }

  onSubmitt() {
    console.log(this.model);
  }

}
