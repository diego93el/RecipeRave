import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { AccountComponent } from './pages/account/account.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path:'dashboard',
        component: DashboardComponent,
    },
    {
        path:'recipes',
        component: RecipesComponent,
    },
    {
        path:'account',
        component: AccountComponent,
    },
    {
        path:'comments',
        component: CommentsComponent,
    },
    {
        path:'settings',
        component: SettingsComponent,
    },
];
