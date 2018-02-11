import { Component, OnInit, Input } from '@angular/core';

import {Leader} from '../shared/leader';

import { LeadersService } from '../services/leaders.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-leaderdetail',
  templateUrl: './leaderdetail.component.html',
  styleUrls: ['./leaderdetail.component.scss']
})
export class LeaderdetailComponent implements OnInit {
  leader: Leader;

  constructor(private leaderService: LeadersService,
    private route: ActivatedRoute,
    private location: Location) { }

    ngOnInit() {
      let id = +this.route.snapshot.params['id'];
      this.leaderService.getLeader(id).subscribe(leader => this.leader = leader);
    }
  
    goBack(): void {
      this.location.back();
    }

}
