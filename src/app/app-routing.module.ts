import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BioComponent } from './components/bio/bio.component';

const routes: Routes = [
  { path: 'bio', component: BioComponent },
  { path: '', redirectTo: '/bio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
