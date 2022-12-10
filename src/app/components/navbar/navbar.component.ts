import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserGuard } from 'src/app/guards/user-guard';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  disconnect(): void {
    this.authService.disconnect();
    this.router.navigate(['']);
  }
}
