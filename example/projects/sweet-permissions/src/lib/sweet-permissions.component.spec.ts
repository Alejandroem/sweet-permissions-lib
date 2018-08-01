import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetPermissionsComponent } from './sweet-permissions.component';

describe('SweetPermissionsComponent', () => {
  let component: SweetPermissionsComponent;
  let fixture: ComponentFixture<SweetPermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetPermissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
