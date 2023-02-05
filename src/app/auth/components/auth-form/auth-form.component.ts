import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from '../../../shared/services/navigation.service';
import { ROUTES } from '../../../shared/enums/routes.enum';

@Component({
  selector: 'tt-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  @Input() formType: 'login' | 'registration' = 'login';
  form: FormGroup;

  constructor(private _fb: FormBuilder, private _navigationService: NavigationService) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log(this.form.value);
  }

  handleLoginVisibility(): boolean {
    return this.formType === ROUTES.LOGIN;
  }

  handleRegistrationVisibility(): boolean {
    return this.formType === ROUTES.REGISTRATION;
  }

  onValueChange(field: string, event: string) {
    this.form.controls[field].setValue(event);
  }

  async navigateWithinAuth() {
    let path = [ROUTES.AUTH];
    this.formType === ROUTES.LOGIN ? path.push(ROUTES.REGISTRATION) : path.push(ROUTES.LOGIN);
    await this._navigationService.handleNavigation(path.join('/'));
  }
}
