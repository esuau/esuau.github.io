import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  navItems = [
    { icon: 'person_outline', route: '', label: 'Bio' },
    { icon: 'description', route: '', label: 'Resume' },
    { icon: 'question_answer', route: '', label: 'Contact' }
  ];

  constructor( private breakpointObserver: BreakpointObserver ) { }

}
