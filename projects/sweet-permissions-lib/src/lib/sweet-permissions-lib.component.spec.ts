import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetPermissionsLibComponent } from './sweet-permissions-lib.component';

describe('SweetPermissionsLibComponent', () => {
  let component: SweetPermissionsLibComponent;
  let fixture: ComponentFixture<SweetPermissionsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetPermissionsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetPermissionsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
