import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AnimationListComponent } from './animation-list/animation-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';
import { ViewanimationmoviesComponent } from './viewanimationmovies/viewanimationmovies.component';
import { EditcomponentComponent } from './editcomponent/editcomponent.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { LibraryComponent } from './library/library.component';
const routes: Routes = [
 {
  path:'',component:HomeComponent
 },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'animation-list',component:AnimationListComponent
  },
  {
    path:'table',component:TableComponent
  },
  {
    path:'adminpage',component:AdminPageComponent
  },
  {
    path:'viewanimation',component:ViewanimationmoviesComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'adminpage/update/:_id',component:EditcomponentComponent
  },
  {
    path:'myaccount',component:MyaccountComponent
  },
  {
    path:'library/:_id',component:LibraryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
