import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ListComponent } from './components/list-component/list-component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path:'list', component: ListComponent},
    {path: 'dashboard', component:DashboardComponent},
    {path:'**', redirectTo: '/home', pathMatch: 'full'}
];
