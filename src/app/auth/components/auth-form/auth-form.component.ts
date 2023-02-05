import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from '../../../shared/services/navigation.service';
import { ROUTES } from '../../../shared/enums/routes.enum';
import { AuthorizationService } from '../../services/authorization.service';
import { Subject, takeUntil, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ILoginResponse } from '../../../shared/interfaces/login-response.interface';

@Component({
  selector: 'tt-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit, OnDestroy {
  @Input() formType: 'login' | 'registration' = 'login';
  form: FormGroup;
  private _unsubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(private _fb: FormBuilder,
              private _navigationService: NavigationService,
              private _authorizationService: AuthorizationService) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    if (this.formType === ROUTES.REGISTRATION) {
      this.form.addControl('firstName', new FormControl(''));
      this.form.addControl('lastName', new FormControl(''));
    } else {
      this.form.removeControl('firstName');
      this.form.removeControl('lastName');
    }
  }

  ngOnDestroy() {
    this._unsubscribe$.next(true);
    this._unsubscribe$.complete();
  }

  onSubmit() {
    if (this.formType === 'registration') {
      this._authorizationService.registration(this.form.value)
        .pipe(
          takeUntil(this._unsubscribe$),
          tap(() => this._navigationService.handleNavigation([ROUTES.AUTH, ROUTES.LOGIN]))
        )
        .subscribe();
    } else {
      this._authorizationService.login(this.form.value)
        .pipe(
          takeUntil(this._unsubscribe$),
          tap(async (data:  ILoginResponse | HttpErrorResponse) => {
            if (data instanceof HttpErrorResponse) {
              alert('error');
            } else {
              await this._navigationService.handleNavigation([ROUTES.TASKS, ROUTES.TASKS_LIST]);
            }
          }),
        )
        .subscribe();
    }
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
    await this._navigationService.handleNavigation(path);
  }
}
