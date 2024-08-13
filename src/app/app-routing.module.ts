import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m =>m.PagesModule),
    canActivate: [AuthGuard],
    providers: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m =>m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
