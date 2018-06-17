import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BioComponent } from './components/bio/bio.component';

const appRoutes: Routes = [
  { path: '', component: BioComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
