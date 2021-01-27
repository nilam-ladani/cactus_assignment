import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AssignmentTwoComponent } from '../assignment-two/assignment-two.component';
import { UserService } from '../assignment-two/Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  AddUserForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    userName: [null, Validators.required]
  });

  userList;
  validateUser = false;

  constructor(
    private fb: FormBuilder, 
    private us: UserService, 
    private route: Router
    ) { }

  ngOnInit(): void {
    this.us.users.subscribe(data => {
      this.userList = data;
    })
  }
  onSubmit(evt) {
    if (this.AddUserForm.valid) {
      this.userList.find(user => {
        console.log(user.name === this.AddUserForm.get('userName').value)
        if (user.name === this.AddUserForm.get('userName').value) {
           alert("User already exist!!");
       } else {
          document.cookie = `userName=${this.AddUserForm.get('userName').value}`
          document.cookie = `email=${this.AddUserForm.get('email').value}`;
          this.route.navigate(['assignment-2'])
        }
      })

    }
  }
}
