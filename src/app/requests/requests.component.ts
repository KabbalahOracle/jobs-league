import { Component, OnInit } from '@angular/core';
import { Request } from './request';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestComponent implements OnInit {
  /*
  player = 'moshiach216';
  */
  request: Request = {
    id: 1,
    desc: 'Angular 8 MongoDB and Web3 blockchain app live in prod.',
    ethAccount: '0xe64b1965A76C58fE302F732461Def1F8f8f4905C',
    value: 3000,
    risk: 40,
    status: 'Funded'
  };

  constructor() { }

  ngOnInit() {
  }

}