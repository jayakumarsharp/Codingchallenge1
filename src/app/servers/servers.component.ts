import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allownewserver = false;
  title = 'first-app';

  constructor() { }

  ngOnInit() {
  }
  oncreateserver() {

  }
}
