import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BioComponent } from './bio.component';

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

  it('shoud have clickable labels', () => {
    const labels = fixture.debugElement.queryAll(By.css('.label.clickable'));
    expect(labels.length).toEqual(5);
  });
});
