import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSmartComponent } from './users-smart.component';

describe('UsersSmartComponent', () => {
  let component: UsersSmartComponent;
  let fixture: ComponentFixture<UsersSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
