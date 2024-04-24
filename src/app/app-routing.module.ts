import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UsersComponent } from './admin/users/users.component';
import { StudentProfileComponent } from './admin/students/student-profile/student-profile.component';
import { UserDetailsComponent } from './admin/users/user-details/user-details.component';
import { UserProfileComponent } from './admin/users/user-profile/user-profile.component';
import { StudentsComponent } from './admin/students/students.component';
import { StudentDetailsComponent } from './admin/students/student-details/student-details.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'users', component: UsersComponent},
  {path: 'student-profile', component: StudentProfileComponent},
  {path: 'user-details', component: UserDetailsComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'student-details', component: StudentDetailsComponent},
  {path: 'student-profile', component: StudentProfileComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
