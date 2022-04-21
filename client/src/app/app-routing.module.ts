import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './shared/auth.guard';
import { ViewGameComponent } from './components/view-game/view-game.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
// import { LibraryComponent } from './components/library/library.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  { path: 'viewGame', component: ViewGameComponent },
  {path: 'wishlist', component:WishlistComponent},
  {
    path: 'user-profile/:id',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
