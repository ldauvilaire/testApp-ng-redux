import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSmartComponent } from './page-smart.component';

describe('PageSmartComponent', () => {
  let component: PageSmartComponent;
  let fixture: ComponentFixture<PageSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
