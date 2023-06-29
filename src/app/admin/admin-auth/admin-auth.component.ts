import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.scss']
})
export class AdminAuthComponent {
  public loginForm!: FormGroup;
  public authError = false;
  public disabledOnLoad = false;
  constructor(private fb: FormBuilder,
    private auth: AuthService,) { }
  ngOnInit(): void {
    this.initLoginForm();
  }
  initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]]
    })
  }
  loginUser(): void {
    const { email, password } = this.loginForm.value;
    if (email && password && this.loginForm.valid) {
      this.disabledOnLoad = true;
      this.auth.login(email, password)
        .catch((e) => {
          console.error('catch error', e);
          this.authError = true;
          this.disabledOnLoad = false;
        })
    }
  }
}
