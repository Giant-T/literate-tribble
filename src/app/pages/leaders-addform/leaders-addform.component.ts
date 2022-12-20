import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Leader } from 'src/app/models/leader';
import { LeaderService } from 'src/app/services/leader.service';

@Component({
  selector: 'app-leaders-addform',
  templateUrl: './leaders-addform.component.html',
  styleUrls: ['./leaders-addform.component.css'],
})
export class LeadersAddformComponent {
  leader: Leader = {
    name: '',
    sex: '',
    dateStart: new Date(),
    politicalParty: ''
  }

  constructor(private leaderService: LeaderService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.leader.countryId = this.activatedRoute.snapshot.paramMap.get("id") ?? undefined;
  }

  insertLeader(leader: Leader): void {
    this.leaderService.insertLeader(leader).subscribe((result) => {
      this.router.navigate(['/home']);
    });
  }
}
