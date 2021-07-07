import { Component } from '@angular/core';
import { SITE_DATA } from '../../data';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent {

  readonly bio = SITE_DATA.bio;

}
