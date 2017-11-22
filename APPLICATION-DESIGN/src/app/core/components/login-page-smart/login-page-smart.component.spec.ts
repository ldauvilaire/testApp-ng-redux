import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageSmartComponent } from './login-page-smart.component';

describe('LoginPageSmartComponent', () => {
  let component: LoginPageSmartComponent;
  let fixture: ComponentFixture<LoginPageSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
