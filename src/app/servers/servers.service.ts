import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  servers: { id: number, name: string, status: string } [] = [
    {
      id: 1,
      name: 'Test server1',
      status: 'Online'
    },
    {
      id: 2,
      name: 'Test server2',
      status: 'Offline'
    },
    {
      id: 3,
      name: 'Test server3',
      status: 'Not installed'
    }
  ];

  constructor() { }

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    return this.servers.find(
      (s) => {
        return s.id === Number(id);
      }
    );
  }

  updateServer(id: number, serverInfo: { name: string, status: string }) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if( server ) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
    return server;
  }
}
