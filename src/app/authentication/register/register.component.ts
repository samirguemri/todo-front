import {Component, OnInit} from '@angular/core';
import {UserService} from '../../user/user.service';
import {User} from '../../user/User';
import {FormBuilder, Validators} from '@angular/forms';
import { createPasswordMatcherValidator } from 'src/app/authentication/_validators/passwordMatcher.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted: boolean = false;
  // @ts-ignore
  registrationForm = this.formBuilder.group({
    fullname: [
      '',
      [Validators.required, Validators.minLength(4)]
    ],
    email: [
      '', {
        validators: [Validators.required, Validators.email],
        asyncValidators: [],
        updateOn: 'submit'
      }
    ],
    password: [
      '', {
        validators: [Validators.required, Validators.minLength(6)],
        asyncValidators: [],
        updateOn: 'submit'
      }],
    confirmPassword: [
      '', {
        validators: [Validators.required, Validators.minLength(6)],
        asyncValidators: [],
        updateOn: 'submit'
      }]
  }, {
    validators: [createPasswordMatcherValidator()]
  });

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    const newUser: User = {
      id: null,
      fullName: this.registrationForm.value.fullname,
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password
    };
    this.registerUser(newUser);
  }

  registerUser(user: User): void {
    this.userService.addNewUser(user).subscribe(data => {
      console.log(data);
    }, (error) => {
      console.log('Unable to add user');
    });
  }

}
