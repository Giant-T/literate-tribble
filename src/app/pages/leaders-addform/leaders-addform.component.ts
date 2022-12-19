import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Leader } from 'src/app/models/leader';
import { LeaderService } from 'src/app/services/leader.service';

@Component({
  selector: 'app-leaders-addform',
  templateUrl: './leaders-addform.component.html',
  styleUrls: ['./leaders-addform.component.css'],
})
export class LeadersAddformComponent {
  constructor(private leaderService: LeaderService, private router: Router) {}

  insertLeader(leader: Leader): void {
    this.leaderService.insertLeader(leader).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
