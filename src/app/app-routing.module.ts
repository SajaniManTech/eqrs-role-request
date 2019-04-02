import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {RoleRequestComponent} from './role-request/role-request.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'role-request',  pathMatch: 'full' },
  { path: 'role-request', component: RoleRequestComponent},
  { path: 'confirmation', component: ConfirmationComponent},
];

export const appRoutingProviders: any[] = [];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
