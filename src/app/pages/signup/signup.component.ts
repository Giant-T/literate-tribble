import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  formGroup = this.formBuilder.group({
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    password: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(6)])
    ),
  });

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  signUp(): void {
    if (!this.formGroup.valid) return;

    this.authService.signup(this.email, this.password);
    this.router.navigate(['home']);
  }

  private get email(): string {
    return this.formGroup.controls.email.value!;
  }

  private get password(): string {
    return this.formGroup.controls.password.value!;
  }
}
