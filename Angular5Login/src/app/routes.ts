import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';


export const appRoutes : Routes = [
    { path : 'home', component: HomeComponent, canActivate:[AuthGuard]},
    { 
        path : 'login', component : SignInComponent
    },
    { path : 'login', redirectTo : '/login', pathMatch : 'full' }
]