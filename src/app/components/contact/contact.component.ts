import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  emailVisible = false;

  emailAddress = 'evan.suau@outlook.com';

  socialList = [
    { name: 'twitter', link: 'https://twitter.com/evan_suau' },
    { name: 'linkedin', link: 'https://www.linkedin.com/in/evansuau' }
  ];

  constructor() { }

  ngOnInit() {
  }

  showEmail() {
    this.emailVisible = true;
  }

}
