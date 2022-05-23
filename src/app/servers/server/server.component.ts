import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: [ './server.component.css' ]
})
export class ServerComponent implements OnInit {

  server: { id: number, name: string, status: string };

  constructor(private serverService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    // const passedServerId = this.route.snapshot.params[ 'id' ];
    // this.server = this.serverService.getServer(passedServerId);
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serverService.getServer(params[ 'id' ]);
    //   console.log('Is server allowed to be edited?');
    //   console.log(this.route.snapshot.queryParams[ 'allowEdit' ]);
    // });
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    )
  }

  editServer() {
    this.router.navigate([ 'edit' ], { relativeTo: this.route, queryParamsHandling: 'merge' });
  }
}
