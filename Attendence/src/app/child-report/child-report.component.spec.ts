import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildReportComponent } from './child-report.component';

describe('ChildReportComponent', () => {
  let component: ChildReportComponent;
  let fixture: ComponentFixture<ChildReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
