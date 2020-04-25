import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BioComponent } from './bio.component';
import { SITE_DATA } from '../../data';

describe('BioComponent', () => {
  let component: BioComponent;
  let fixture: ComponentFixture<BioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud include bio-content component', () => {
    const bioContent = fixture.debugElement.nativeElement.querySelector('app-bio-content');
    expect(bioContent).not.toBeNull();
  });

  it('should bind title from SITE_DATA', () => {
    const bioTitle = fixture.debugElement.nativeElement.querySelector('#bio-title');
    expect(bioTitle.textContent).toEqual(SITE_DATA.bio.title);
  });

  it('shoud have clickable labels', () => {
    const labels = fixture.debugElement.queryAll(By.css('.label.clickable'));
    expect(labels.length).toEqual(5);
  });
});
