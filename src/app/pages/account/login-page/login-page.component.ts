import { Security } from './../../../utils/security.util';
import { CustomValidator } from './../../../validators/custom.validator';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;
  public busy = false;

  constructor(
    private router: Router,
    private service: DataService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      username: ['', Validators.compose([
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.required,
        CustomValidator.isCpf()
      ])],
      password: ['', Validators.compose([
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.required,

      ])]
    });
  }

  ngOnInit() {
    const token = Security.getToken();
    if (token) {
      this.busy = true;
      this
        .service
        .refreshToken()
        .subscribe(
          (data: any) => {
          this.busy = false;
          this.setUser(data.customer, data.token);
        },
          (err) => {
            localStorage.clear();
            this.busy = false

          }
        );

    }
  }


  submit() {
    this.busy = true;
    this
      .service
      .authenticate(this.form.value)
      .subscribe((data: any) => {
        console.log(data);
        this.busy = false;
        this.setUser(data.customer, data.token);
      },
        (err) => {
          console.log(err);
          this.busy = false;
        }
      );

  }

  setUser(user, token) {
    Security.set(user, token);
    this.router.navigate(['/'])
  }

}

