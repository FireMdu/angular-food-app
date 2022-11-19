import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  userName: string = ''
  serverName: string = 'Default Server';
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000
    )
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus = `Server (${this.serverName}) was created`;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUserName() {
    this.userName = '';
  }
}
