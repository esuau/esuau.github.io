import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ContactComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide email', () => {
    expect(component.emailVisible).toBe(false);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).not.toContain(component.emailAddress);
  });

  it('should show email on button click', () => {
    expect(component.emailVisible).toBe(false);

    const button = fixture.debugElement.nativeElement.querySelector('#btn-email-mask');
    button.click();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.emailVisible).toBe(true);
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.textContent).toContain(component.emailAddress);
    });
  });

  it('should show social links', () => {
    const socialIcons = fixture.debugElement.queryAll(By.css('.social-media-icon'));
    expect(socialIcons.length).toEqual(component.socialList.length);
  });
});
