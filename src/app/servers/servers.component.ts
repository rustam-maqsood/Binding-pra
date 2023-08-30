import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
allowNewServer = false;
serverCreationStatus = 'No server was created';
ServerName = '';
serverCreated = false;
servers = ['Testserver', 'Testserver 2'];

constructor(){
  setTimeout(()=>{
    this.allowNewServer=true;
  },3000)
}

ngOnInit(){}

onCreateServer(){
  this.serverCreated=true;
  this.servers.push(this.ServerName);
  this.serverCreationStatus = 'server was created! Name is '+ this.ServerName;
}
onUpdateServerName(event:Event){
this.ServerName = (<HTMLInputElement>event.target).value;
}
}
