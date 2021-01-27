import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AssignmentOneComponent } from './assignment-one/assignment-one.component';
import { AssignmentTwoGetCommentsComponent } from './assignment-two-get-comments/assignment-two-get-comments.component';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';

const routes: Routes = [
  { path: "assignment-1", component: AssignmentOneComponent },
  { path: "assignment-2", component: AssignmentTwoComponent },
  { path: "getComments", component: AssignmentTwoGetCommentsComponent },
  { path: "addUser", component: AddUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
