import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnaroundListSmartComponent } from './turnaround-list-smart.component';

describe('TurnaroundListSmartComponent', () => {
  let component: TurnaroundListSmartComponent;
  let fixture: ComponentFixture<TurnaroundListSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnaroundListSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnaroundListSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
