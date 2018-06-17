import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { BioComponent } from './components/bio/bio.component';

@NgModule({
  declarations: [
    AppComponent,
    BioComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
