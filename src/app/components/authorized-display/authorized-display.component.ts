import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-authorized-display',
  templateUrl: './authorized-display.component.html',
  styleUrls: ['./authorized-display.component.css'],
})
// Affiche seulement l'enfant de ce composant si l'utilisateur ou inversement si
// hideWhenAuthenticated est à true
export class AuthorizedDisplayComponent {
  @Input() hideWhenAuthenticated: boolean = false;

  constructor(private authService: AuthService) {}

  canDisplay(): boolean {
    const isAuthenticated = this.authService.isAuthenticated();

    if (this.hideWhenAuthenticated) {
      return !isAuthenticated;
    } else {
      return isAuthenticated;
    }
  }
}
