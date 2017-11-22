import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnaroundDetailComponent } from './turnaround-detail.component';

describe('TurnaroundDetailComponent', () => {
  let component: TurnaroundDetailComponent;
  let fixture: ComponentFixture<TurnaroundDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnaroundDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnaroundDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
